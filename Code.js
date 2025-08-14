/**
 * Labels Cognos Attendance/Enrollment reports based on the attachment filename.
 *
 * Search query:
 *   subject:"A new version of My Alt HS Attendance/Enrollment Count is available" is:unread
 *
 * Side effects:
 * - Applies a specific label based on detected report type
 * - Moves thread to archive (skips inbox)
 * - Marks thread as read
 *
 * @returns {void}
 */
function labelCognosReports() {
  var threads = GmailApp.search(
    'subject:"A new version of My Alt HS Attendance/Enrollment Count is available" is:unread'
  );

  threads.forEach(function (thread) {
    var messages = thread.getMessages();
    messages.forEach(function (message) {
      var attachments = message.getAttachments();
      attachments.forEach(function (attachment) {
        var filename = attachment.getName();

        if (filename.includes("My Alt MS Attendance/Enrollment Count")) {
            var msLabelName =
              "Campuses/NAHS/Transition Information Workflow Project/Alt_MS_Attendance_Enrollment_Count";
            var msLabel = GmailApp.getUserLabelByName(msLabelName);
            if (!msLabel) {
              msLabel = GmailApp.createLabel(msLabelName);
            }
            msLabel.addToThread(thread);
            thread.moveToArchive(); // Skip inbox
            thread.markRead();      // Mark as read
        } else if (filename.includes("My Alt HS Attendance/Enrollment Count")) {
            var hsLabelName =
              "Campuses/NAHS/Transition Information Workflow Project/Alt_HS_Attendance_Enrollment_Count";
            var hsLabel = GmailApp.getUserLabelByName(hsLabelName);
            if (!hsLabel) {
              hsLabel = GmailApp.createLabel(hsLabelName);
            }
            hsLabel.addToThread(thread);
            thread.moveToArchive(); // Skip inbox
            thread.markRead();      // Mark as read
        }
      });
    });
  });
}
