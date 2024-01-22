"use server";

import { revalidatePath } from "next/cache";
import { google } from "googleapis";
import { NextResponse, NextRequest } from "next/server";
const path = require("path");

const spreadsheetId = process.env.GOOGLE_SPREDSHEET_ID;
// const keyFile = path.join(process.cwd(), 'service-account-key.json');
// const keyFile = process.env.KEY_FILE;
// console.log("spreadsheetId",spreadsheetId)
// console.log("keyFile", keyFile);

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
    credentials: {
      // Contents of your service account key
      type: "service_account",
      project_id: "soajobstatus",
      private_key_id: "e939706aee112e2a5132b341a4cbde85e6416abc",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDQPYUdjqFkfofw\nDiyPrSUSGJnKHwmCVRCwer8PDPsrmllMh+qC7FZB6wlUVy/jz8MSQnudMpKlLL+b\nh7eflMrxfQmpQd9I4iIz7wbQrgwVUI5+lgoZLjWO0kS/Ug1QwZCteH1GmJcB7Qwa\nD7nprbfeaSfXAedBU+fmTHeSfydOfWuKXTlizy7oEAuj8tdpp6pElmwuc2E+x2Qp\nI9mScw7nap6RqB3Th4kVPmn8FZOaPkG81w76mHCEl1qKbjhcdDrPbHwdxCzQwQKG\nDslVTe2p+FaZAouOnJklyOUwJ/qJMHfyOTVfK/H8W2xmWBa0Lnat82zMBfwJI0Sl\noCUVZUiVAgMBAAECggEALJ25uxr3nlnz0y2eQ4xT4Hwv2xvqRCfoov8xl05vNCjm\nUBzg1HtBge8TOSRTCOrXPz7KUGRpAgXD6dVatNDC6JmjK8YGyo1Uya7BVY2s3hY7\n6YhJEpsRc4++lgVFABPw5RHnOWxxEkMRMDZFXXlQZ1E9bXYlb5xEF9YzWkpvCAQ5\nRGm9PF+40nvOy3g2jCU5QDWC9uX3TuUgHJDf6RuknnbG81eX7k1WVtEc+TZVhOkb\ngAV3DgywNzd1p5TQY1KHZ6pIlSByTMC5D3nKSetac0rA/2duXURrFxtKNa+sWf3s\nN9D+tbQzyu5QB7/bPa5YOMya7UuOSY/aGVO8Fyt+8wKBgQDrlGkaVintfEIYlXdf\nQ5QXMYHToPoaiEARvXqPOxkW1e8UyFqAP2BQEoWQoWBqzg3/rqPgW3het/GD42ax\nKbugRz9O+GTvvU4XxpqjLQY5/qDM6GLfCYa1oz1LqWQBIavPw9onseDf1+F+JVtK\nSLXp9twzOKMaxosh7rEd7nva5wKBgQDiSnBlDpQv5+VfP1MmUYbWRxczKv8jdJql\nvF0xG+D2FpSJEGM+EJ2uLsn0RHfxO20+nc+6GktDvy42tuHmBMBgE+HgAmmKcpJ9\nEAEC4A/VUC4L4SFg09UBOiPyaABwWpiW5vs3YNTLAAUoVGgCkTMkum4mPiv28c6l\nNq+g+W5tIwKBgQDMLkuSOhAI9+PJrvJRrR7To2Mk66caC/GL7rAlKFGsiyu21Zgr\nA8MUY5lEK7qHl6RmcRU0RdNkNQWtDBFbiBJI7reeWIgTif3/eXFZ8JIu/dSdBOV8\n7qLFF4Du7RfyKx7g6p1QPknreQ7F6Nbg4XhaGk3sTzB+6op4lIsKqELNDQKBgQCH\nP7qBi/8hytYa4XxPELcoZwEEwhQQGuc7W6PPcDw6mTBZ44ONWt0DeE+YQTv24G/g\n1u2K66BEc4WpihDmK7zXL8r22jo+V1Aak3AnScfs1KlQzFPozXMn8pn9jg+FF4DP\n4GoRpTxJwE9U1W386s/Iiey/yrT4OXoq4M6DxdEsRQKBgDjTgyCUk/whq3MKZJlr\nXAKoUXSG3yqYc1/VzfLbcIc5Jtr1UqcH6oBQJ+T3+ZUUrnPiDKQFamAFfs5uMNza\ndWCx6EWpGEjAhpOJlqrSFB0pgoLfZ4TDUHB7WSBdBFRc/djyo+WtJ3CZYPKwHWPT\nF1+zAeQMePZY71zS2zS2xWQO\n-----END PRIVATE KEY-----\n",
      client_email: "panpang@soajobstatus.iam.gserviceaccount.com",
      client_id: "106703085150022770881",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url:
        "https://www.googleapis.com/robot/v1/metadata/x509/panpang%40soajobstatus.iam.gserviceaccount.com",
      universe_domain: "googleapis.com",
    },
    // keyFile,
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
