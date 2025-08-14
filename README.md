# Gmail Filters Project

Automation for labeling Gmail threads related to NAHS & NAMS Cognos Attendance/Enrollment reports. This script addresses a limitation of Gmail filtering that doesn't filter emails when the subject is the same, but the attachments have different names. For example, if an email's subject is, "A new version of My Alt HS Attendance/Enrollment Count is available", but the attachment is named either "My Alt <em>MS</em> Attendance/Enrollment Count" or "My Alt <em>HS</em> Attendance/Enrollment Count", this script will look at the title of the attachment and add the appropriate label to the email.

## Script/Function
- `labelCognosReports()`
  - Searches unread threads matching the report subject and applies a label depending on attachment file name.
  - Moves threads to archive and marks them as read.

## Usage
### (Preferred Method) Set to Run on Triggers
1. Open the Google Apps editor for this project,
2. Select the <em>Triggers</em> icon,
3. Click on the blue <em>+ Add Trigger</em> button on the bottom right,
4. Create a separate trigger for each day of the week you want the function to run (i.e., Mon-Fri)
#### <b>Add Trigger for Gmail-filters</b>
Make the following selections under each of the following headings:
##### <b>Choose which function to run</b>
`labelCognosReports`
##### <b>Choose which deployment should run</b>
`Head`
##### <b>Select event source</b>
`Time-driven`
##### <b>Select type of time based trigger</b>
`Week Timer`
##### <b>Select day of week</b>
If you intend to run this script every day of the work week, start with `Every Monday`, then when you create the next four triggers pick the following day of the week.
##### <b>Select time of day</b>
Choose which ever time block you  want the script to run.
###
5. Click `Save`
6. Create another trigger for the following day of the week. Do this until you have created all five triggers, one for each day of the week.

### (Optionally) Manually Run the function
1. Open the Apps Script editor for this project,
2. Choose `labelCognosReports` from the function dropdown,
3. Click Run, then view logs under Executions.

## Notes
- Labels are created on-the-fly if they don’t exist.
