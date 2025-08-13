# Gmail Filters Project

Automation for labeling Gmail threads related to NAHS & NAMS Cognos Attendance/Enrollment reports. This script addresses a limitation of Gmail filtering that doesn't filter emails when the subject is the same, but the attachments have different names. For example, if an email's subject is, "A new version of My Alt HS Attendance/Enrollment Count is available", but the attachment is named either "My Alt <em>MS</em> Attendance/Enrollment Count" or "My Alt <em>HS</em> Attendance/Enrollment Count", this script will look at the title of the attachment and add the appropriate label to the email.

## Prerequisites
- Node.js and `clasp` installed
- Logged in to `clasp` and bound to this Apps Script project (`.clasp.json`)

## Project Structure
- `appsscript.json` — Apps Script manifest
- `Code.js` — Main script with Gmail labeling logic
- `.claspignore` — Files excluded from `clasp push`
- `.gitignore` — Git ignore rules for local development

## Script/Function
- `labelCognosReports()`
  - Searches unread threads matching the report subject and applies a label depending on attachment file name.
  - Moves threads to archive and marks them as read.

## Usage

Push local changes to the Apps Script project:

```zsh
clasp push
```

Pull the latest from Apps Script (if edited in the online editor):

```zsh
clasp pull
```

Run the function:
1. Open the Apps Script editor for the bound project (`clasp open`),
2. Choose `labelCognosReports` from the function dropdown,
3. Click Run, then view logs under Executions.

Optional shortcut to open the script in browser:

```zsh
clasp open
```

## Notes
- Labels are created on-the-fly if they don’t exist.
- `.claspignore` is configured to only allow manifest and script/HTML files to be pushed.
