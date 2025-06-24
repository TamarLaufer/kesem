import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { google } from "googleapis";
import * as path from "path";
import * as fs from "fs";

admin.initializeApp();

const SHEET_ID = "הכניסי-כאן-את-ה-Spreadsheet-ID";
const SHEET_TAB = "Sheet1";

const keyFile = path.join(__dirname, "kesem-be97f-f10811da4f22.json");
const creds = JSON.parse(fs.readFileSync(keyFile, "utf-8"));

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

const auth = new google.auth.GoogleAuth({
  credentials: creds,
  scopes: SCOPES,
});

const sheets = google.sheets({ version: "v4", auth });

export const addStudentToSheet = functions.firestore
  .document("students/{docId}")
  .onCreate(async (snap: admin.firestore.DocumentSnapshot) => {
    const data = snap.data();
    if (!data) {
      console.error("No data found in document");
      return null;
    }
    const row: (string | number)[] = [
      data.firstName || "שם התלמיד/ה",
      data.lastName || "שם משפחה",
      data.city || "עיר מגורים",
      data.grade || "כיתה",
      data.gradeNumber || "מספר כיתה",
      data.email || 'דוא"ל',
      data.parentName || "שם הורה",
      data.parentPhone || "טלפון הורה",
      data.studentPhone || "טלפון תלמיד/ה",
      data.schoolName || "שם בית ספר",
      data.howDidYouHereAboutUs || "איך שמעת עלינו?",
      data.comments || "הערות/בקשות",
      snap.createTime ? snap.createTime.toDate().toISOString() : "",
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_TAB}!A1`,
      valueInputOption: "RAW",
      requestBody: {
        values: [row],
      },
    });

    console.log("Row added to Google Sheets:", row);
    return null;
  });
