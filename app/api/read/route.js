import { google } from "googleapis";
// import { google } from "google-auth-library";
const keyFile = "./lib/service-account-key.json";
const spreadsheetId = "1zsEhTcofjSCTL57222zJotqDqG3QUV8OI0PkS6EQyUg";
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request) {

  if (request.method !== "GET") {
    return NextResponse.json({ status: 405 },{message: "Method is not allowed"})
  }

  const auth = new google.auth.GoogleAuth({
    keyFile,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });

  try {
    const range = "test"; // Update with the actual sheet name or range you want to retrieve

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const values = response.data.values;

    // console.log("Data retrieved successfully:", values);

    return NextResponse.json({ status: 200, data: values }, { message: "OK" });
  } catch (error) {
    console.error("Error retrieving data from spreadsheet:", error.message);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
