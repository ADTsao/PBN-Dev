import React from "react";

export const Controls = ({ filters, updateFilters }) => {
  return (
    <div className="controls col-sm-3">
      <h5>Filter Activity</h5>
      <button onClick={() => updateFilters("")}>Select All</button>
      <ul>
        <li
          className={filters.includes("APPT_REQUEST") ? "active" : ""}
          onClick={() => updateFilters("APPT_REQUEST")}
        >
          Appt Request
        </li>
        <li
          className={filters.includes("APPOINTMENT") ? "active" : ""}
          onClick={() => updateFilters("APPOINTMENT")}
        >
          Appointment
        </li>
        <li
          className={filters.includes("FORM") ? "active" : ""}
          onClick={() => updateFilters("FORM")}
        >
          Form
        </li>
        <li
          className={filters.includes("PAYMENT") ? "active" : ""}
          onClick={() => updateFilters("PAYMENT")}
        >
          Payment
        </li>
        <li
          className={filters.includes("FEEDBACK") ? "active" : ""}
          onClick={() => updateFilters("FEEDBACK")}
        >
          Feedback
        </li>
        <li
          className={filters.includes("REVIEW") ? "active" : ""}
          onClick={() => updateFilters("REVIEW")}
        >
          Review
        </li>
      </ul>
    </div>
  );
};
