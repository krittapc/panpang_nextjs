"use server";

import { revalidatePath } from "next/cache";
import { google } from "googleapis";
const keyFile = "./lib/service-account-key.json";
import { NextResponse, NextRequest } from "next/server";
const spreadsheetId = "1zsEhTcofjSCTL57222zJotqDqG3QUV8OI0PkS6EQyUg";

// import { signIn, signOut } from "./auth";
// import bcrypt from "bcryptjs";

export const addPost = async (prevState, formData) => {
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");

  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const addUser = async (prevState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const create = async (prevState, formData) => {
  console.log(formData)
  const {
    internetNO,
    province,
    latlongCust,
    latlongSP,
    custName,
    channel,
    amount,
    tm,
    custZone,
    problem,
    dealer,
    contact,
  } = Object.fromEntries(formData);
  const auth = new google.auth.GoogleAuth({
    keyFile,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });

  try {
    const range = "test";
    const valueInputOption = "RAW";
    const insertDataOption = "INSERT_ROWS";
    const resource = {
      values: [[
        internetNO,
        province,
        latlongCust,
        latlongSP,
        custName,
        channel,
        amount,
        tm,
        custZone,
        problem,
        dealer,
        contact,
      ]]
      //   values:[["test","123","456"]]
    };

    const result = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption,
      insertDataOption,
      resource,
    });

    console.log("Row appended successfully:", result.data.updates.updatedCells);
    return { success: true, message: "Recording successfully" };

    // return NextResponse.json({ status: 200, data: values, msessage: "OK" });
  } catch (error) {
    console.error("Error appending row to spreadsheet:", error.message);
    return { success: false, message: error.message };
  }
};
