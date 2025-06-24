"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addStudentToSheet = void 0;
var functions = require("firebase-functions");
var admin = require("firebase-admin");
var googleapis_1 = require("googleapis");
var path = require("path");
var fs = require("fs");
admin.initializeApp();
var SHEET_ID = "הכניסי-כאן-את-ה-Spreadsheet-ID";
var SHEET_TAB = "Sheet1";
var keyFile = path.join(__dirname, "kesem-be97f-f10811da4f22.json");
var creds = JSON.parse(fs.readFileSync(keyFile, "utf-8"));
var SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
var auth = new googleapis_1.google.auth.GoogleAuth({
    credentials: creds,
    scopes: SCOPES,
});
var sheets = googleapis_1.google.sheets({ version: "v4", auth: auth });
exports.addStudentToSheet = functions.firestore
    .document("students/{docId}")
    .onCreate(function (snap) { return __awaiter(void 0, void 0, void 0, function () {
    var data, row;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = snap.data();
                if (!data) {
                    console.error("No data found in document");
                    return [2 /*return*/, null];
                }
                row = [
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
                // הוספת שורה חדשה לגיליון
                return [4 /*yield*/, sheets.spreadsheets.values.append({
                        spreadsheetId: SHEET_ID,
                        range: "".concat(SHEET_TAB, "!A1"),
                        valueInputOption: "RAW",
                        requestBody: {
                            values: [row],
                        },
                    })];
            case 1:
                // הוספת שורה חדשה לגיליון
                _a.sent();
                console.log("Row added to Google Sheets:", row);
                return [2 /*return*/, null];
        }
    });
}); });
