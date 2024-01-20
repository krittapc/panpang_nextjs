import { google } from "googleapis";
const keyFile = "./service-account-key.json";
const spreadsheetId = "1zsEhTcofjSCTL57222zJotqDqG3QUV8OI0PkS6EQyUg";

export const appendRowToSheet = async (formData) => {
  const auth = new google.auth.GoogleAuth({
    keyFile,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

   const sheets = google.sheets({ version: "v4", auth });

  try {
    const range = "test"; // Replace with the sheet name
    const valueInputOption = "RAW"; // Use 'RAW' for simple values, 'USER_ENTERED' for formulas, and formatting
    const insertDataOption = "INSERT_ROWS"; // 'INSERT_ROWS' to append a new row

    const resource = {
      values: [Object.values(formData)], // Data to append as a new row
    };

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption,
      insertDataOption,
      resource,
    });

    console.log(
      "Row appended successfully:",
      response.data.updates.updatedCells
    );

    return response.data.updates.updatedCells
  } catch (error) {
    console.error("Error appending row to spreadsheet:", error.message);
  }
};

