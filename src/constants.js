export const colours = [
  "#1abc9c",
  "#2ecc71",
  "#3498db",
  "#9b59b6",
  "#34495e",
  "#16a085",
  "#27ae60",
  "#2980b9",
  "#8e44ad",
  "#2c3e50",
  "#f1c40f",
  "#e67e22",
  "#e74c3c",
  "#061417",
  "#95a5a6",
  "#f39c12",
  "#d35400",
  "#c0392b",
  "#bdc3c7",
  "#7f8c8d"
];

export const requiredActionFilterTypes = {
  APPT_REQUEST: { text: "Appt Request", filters: ["AR", "AC", "ASF"] },
  FORM: { text: "Form", filters: ["UPFS", "FSRS", "FURAS", "FWAPS"] },
  APPOINTMENT: { text: "Appointment", filters: ["CR", "UMR"] },
  PAYMENT: { text: "Payment", filters: ["PR"] },
  REVIEW: { text: "Review", filters: ["URR"] },
  FEEDBACK: { text: "Feedback", filters: ["FR"] }
};

export const requiredActionType = {
  UNFAVORABLE_REVIEW_RECEIVED: "URR",
  UNCLASSIFIED_MESSAGE_RECEIVED: "UMR",
  CALLBACK_REQUESTED: "CR",
  FEEDBACK_RECEIVED: "FR",
  APPOINTMENT_REQUESTED: "AR",
  APPOINTMENT_SYNC_FAILED: "ASF",
  APPOINTMENT_CONFLICTED: "AC",
  PAYMENT_RECEIVED: "PR",
  GENERAL_FORM_SUBMISSION_PRACTICE_ALERT: "FWAPS",
  FORM_SUBMISSION_REQUIRE_STAFF_SIGNATURE: "FSRS",
  UNKNOWN_PATIENT_FORM_SUBMITTED: "UPFS",
  GENERAL_FORM_SUBMISSION_UNKNOWN_REFERRAL_ALERT: "FURAS",
  GENERAL_FORM_SUBMISSION_REQUIRE_DOCTOR_SIGNATURE: "FRDS"
};
