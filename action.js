"use server";

// import { revalidatePath } from "next/cache";
import { google } from "googleapis";
// import { NextResponse, NextRequest } from "next/server";
// const path = require("path");
import { format } from "date-fns";
// const liffId = process.env.NEXT_PUBLIC_LIFF_ID;

const spreadsheetId = process.env.GOOGLE_SPREDSHEET_ID;
// const keyFile = path.join(process.cwd(), 'service-account-key.json');
const keyFile = process.env.SERVICE_ACCOUNT_KEY;
// console.log("spreadsheetId",spreadsheetId)
// console.log("keyFile", keyFile);

// const spreadsheetId = "1zsEhTcofjSCTL57222zJotqDqG3QUV8OI0PkS6EQyUg";

// export const line = async () => {
//   const liff = (await import("@line/liff")).default;
//   try {
//     await liff.init({ liffId });
//   } catch (error) {
//     console.error("liff init error", error.message);
//   }
//   if (!liff.isLoggedIn()) {
//     liff.login();
//   }
//   await liff.ready;
//   const profile = await liff.getProfile();
//   return profile;
// };

export const create = async (prevState, formData) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "__Host-GAPS=1:zDuU9BEpvYA8FyprsgROpa0CirSB1w:awwaBpvU_cTw6xDK"
  );

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
    remark,
    userId,
    displayName,
  } = Object.fromEntries(formData);

  var raw = JSON.stringify({
    non: internetNO,
    custZone: custZone,
    province: province,
    custName: custName,
    latlongCust: latlongCust,
    latlongSP: latlongSP,
    problem: problem,
    remark: remark,
    tm: tm,
    among: amount,
    channel: channel,
    dealer: dealer,
    contact: "'" + contact,
    userId: userId,
    displayName: displayName,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://script.google.com/macros/s/AKfycbwrs6aePWtKBr2_eOE1SOG0Bcd6XKOyXUn1pFMlmCYrNcHTbHryGgF0294Wu4Ndpd2M/exec?action=addTicket",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      return { success: true, message: "Recording successfully" };
    })
    .catch((error) => {
      console.log("error", error);
      return { success: false, message: error.message };
    });

  // const date = format(new Date(), "dd/MM/yyyy, HH:mm:ss");
  // const auth = new google.auth.GoogleAuth({
  //   credentials: JSON.parse(keyFile),
  //   // keyFile,
  //   scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  // });
  // const sheets = google.sheets({ version: "v4", auth });

  // try {
  //   const range = "test!B2:O2";
  //   const valueInputOption = "RAW";
  //   const insertDataOption = "INSERT_ROWS";
  //   const resource = {
  //     values: [
  //       [
  //         date,
  //         internetNO,
  //         custZone,
  //         province,
  //         custName,
  //         latlongCust,
  //         latlongSP,
  //         problem,
  //         remark,
  //         tm,
  //         amount,
  //         channel,
  //         dealer,
  //         contact,
  //       ],
  //     ],
  //     //   values:[["test","123","456"]]
  //   };

  //   const result = await sheets.spreadsheets.values.append({
  //     spreadsheetId,
  //     range,
  //     valueInputOption,
  //     insertDataOption,
  //     resource,
  //   });

  //   console.log("Row appended successfully:", result.data.updates.updatedCells);
  //   return { success: true, message: "Recording successfully" };

  //   // return NextResponse.json({ status: 200, data: values, msessage: "OK" });
  // } catch (error) {
  //   console.error("Error appending row to spreadsheet:", error.message);
  //   return { success: false, message: error.message };
  // }
};
