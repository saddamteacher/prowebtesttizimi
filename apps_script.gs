// Google Apps Script kodi
// Sheets: Extensions → Apps Script → bu kodni joylashtiring

const SHEET_NAME = 'Sheet1';

function doGet(e) {
  return jsonResponse({ ok: true, message: 'ProWeb API ishlayapti' });
}

function doPost(e) {
  try {
    const data   = JSON.parse(e.postData.contents);
    const sheet  = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const action = data.action;

    if (action === 'add') {
      sheet.appendRow([
        data.subject, data.block,
        data.question,
        data.opt1, data.opt2, data.opt3, data.opt4,
        data.correct
      ]);
      return jsonResponse({ ok: true });
    }

    if (action === 'delete') {
      const rows = sheet.getDataRange().getValues();
      for (let i = rows.length - 1; i >= 1; i--) {
        if (rows[i][0] === data.subject &&
            String(rows[i][1]) === String(data.block) &&
            rows[i][2] === data.question) {
          sheet.deleteRow(i + 1);
          return jsonResponse({ ok: true });
        }
      }
      return jsonResponse({ ok: false, error: 'Topilmadi' });
    }

    if (action === 'clear') {
      const rows = sheet.getDataRange().getValues();
      for (let i = rows.length - 1; i >= 1; i--) {
        if (rows[i][0] === data.subject &&
            String(rows[i][1]) === String(data.block)) {
          sheet.deleteRow(i + 1);
        }
      }
      return jsonResponse({ ok: true });
    }

    if (action === 'get') {
      const rows = sheet.getDataRange().getValues();
      const result = [];
      for (let i = 1; i < rows.length; i++) {
        if (rows[i][0] === data.subject &&
            String(rows[i][1]) === String(data.block)) {
          result.push({
            text:    rows[i][2],
            options: [rows[i][3], rows[i][4], rows[i][5], rows[i][6]],
            correct: parseInt(rows[i][7]) || 0
          });
        }
      }
      return jsonResponse({ ok: true, questions: result });
    }

    return jsonResponse({ ok: false, error: 'Noma\'lum action' });

  } catch (err) {
    return jsonResponse({ ok: false, error: err.message });
  }
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
