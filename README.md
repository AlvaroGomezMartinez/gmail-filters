# Gmail Filters Project

Automations for labeling Gmail threads related to NAHS & NAMS Cognos Attendance/Enrollment reports.

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
