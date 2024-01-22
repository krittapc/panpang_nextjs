"use server";

import { revalidatePath } from "next/cache";
import { google } from "googleapis";
import { NextResponse, NextRequest } from "next/server";
const path = require("path");

const spreadsheetId = process.env.GOOGLE_SPREDSHEET_ID;
// const keyFile = path.join(process.cwd(), 'service-account-key.json');
const keyFile = "/lib/service-account-key.json";
// console.log("spreadsheetId",spreadsheetId)
console.log("keyFile", keyFile);

// const spreadsheetId = "1zsEhTcofjSCTL57222zJotqDqG3QUV8OI0PkS6EQyUg";

export const create = async (prevState, formData) => {
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
      values: [
        [
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
        ],
      ],
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
