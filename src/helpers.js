import { requiredActionType } from "./constants";

export const getLabelForRequiredAction = (item) => {
  switch (item.event_type) {
    case requiredActionType.UNFAVORABLE_REVIEW_RECEIVED:
      return {
        key: "REVIEW",
        class: "review",
        label: "Review"
      };
    case requiredActionType.FEEDBACK_RECEIVED:
      return {
        key: "FEEDBACK",
        class: "feedback",
        label: "Feedback"
      };
    case requiredActionType.APPOINTMENT_REQUESTED:
    case requiredActionType.APPOINTMENT_SYNC_FAILED:
    case requiredActionType.APPOINTMENT_CONFLICTED:
      return {
        key: "APPT_REQUEST",
        class: "appt_request",
        label: "Appt Request"
      };
    case requiredActionType.CALLBACK_REQUESTED:
    case requiredActionType.UNCLASSIFIED_MESSAGE_RECEIVED:
      return {
        key: "APPOINTMENT",
        class: "appointment",
        label: "Appointment"
      };
    case requiredActionType.UNKNOWN_PATIENT_FORM_SUBMITTED:
    case requiredActionType.FORM_SUBMISSION_REQUIRE_STAFF_SIGNATURE:
    case requiredActionType.GENERAL_FORM_SUBMISSION_UNKNOWN_REFERRAL_ALERT:
    case requiredActionType.GENERAL_FORM_SUBMISSION_PRACTICE_ALERT:
    case requiredActionType.GENERAL_FORM_SUBMISSION_REQUIRE_DOCTOR_SIGNATURE:
      return {
        key: "FORM",
        class: "form",
        label: "Form"
      };
    case requiredActionType.PAYMENT_RECEIVED:
      return {
        key: "PAYMENT",
        class: "payment",
        label: "Payment"
      };
    default:
      return null;
  }
};
