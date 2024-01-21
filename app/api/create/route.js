import { google } from "googleapis";
const keyFile = "./service-account-key.json";
const spreadsheetId = "1zsEhTcofjSCTL57222zJotqDqG3QUV8OI0PkS6EQyUg";
import { NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.json();
  console.log(formData);
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
      values: [Object.values(formData)],
      // values:[["test","123","456"]]
    };

    const result = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption,
      insertDataOption,
      resource,
    });

    console.log("Row appended successfully:", result.data.updates.updatedCells);

    return NextResponse.json({ status: 200 }, { message: "OK" });
  } catch (error) {
    console.error("Error appending row to spreadsheet:", error.message);
    NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
