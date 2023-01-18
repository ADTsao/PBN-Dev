import React from "react";
import { colours } from "../constants";
import { getLabelForRequiredAction } from "../helpers";

export const Actions = ({ status, updateStatus, data, requestData }) => {
  return (
    <div className="actions col-sm-9">
      <h5>Actions Needed</h5>
      <div className="visibility-controls">
        <button
          className={status === "pending" ? "active" : ""}
          onClick={() => updateStatus("pending")}
        >
          Pending
        </button>
        <button
          className={status === "ignored" ? "active" : ""}
          onClick={() => updateStatus("ignored")}
        >
          Ignored
        </button>
        <button
          className={status === "completed" ? "active" : ""}
          onClick={() => updateStatus("completed")}
        >
          Completed
        </button>
        <button
          className={status === "all" ? "active" : ""}
          onClick={() => updateStatus("all")}
        >
          All
        </button>
      </div>
      <div
        onScroll={(e) => {
          if (
            e.target.scrollTop ===
            e.target.scrollHeight - e.target.offsetHeight
          ) {
            requestData();
          }
        }}
        className="actions-items"
      >
        {data.map((d) => {
          const category = getLabelForRequiredAction(d);
          return (
            <div className="item" key={d.id}>
              <div
                style={{
                  backgroundColor: colours[Math.floor(Math.random() * 21)]
                }}
                className="patient-tag"
              >{`${d.patient_first_name.charAt(0)}${d.patient_last_name.charAt(
                0
              )}`}</div>
              <div className="item-content">
                <label className={category.class}>{category.label}</label>
                <p>
                  <strong>{`${d.patient_first_name} ${d.patient_last_name}`}</strong>{" "}
                  requested a call back.
                </p>
              </div>
              <div className="item-controls">
                <span>a day ago</span>
                <div>
                  <button className="success">✓</button>
                  <button className="fail">X</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
