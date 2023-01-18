import React, { useState } from "react";
import { getTableData } from "../utility";

export const Table = () => {
  const [view, setView] = useState({ key: "paytype_id", name: "Paytype ID" });
  const { values, categories } = getTableData(view.key);

  return (
    <div className="table-container">
      <div className="table-controls">
        <button
          className={view.key === "paytype_id" ? "active" : ""}
          onClick={() => setView({ key: "paytype_id", name: "Paytype ID" })}
        >
          Paytype ID
        </button>
        <button
          className={view.key === "provider_id" ? "active" : ""}
          onClick={() => setView({ key: "provider_id", name: "Provider ID" })}
        >
          Provider ID
        </button>
        <button
          className={view.key === "employee_type_id" ? "active" : ""}
          onClick={() =>
            setView({ key: "employee_type_id", name: "Employee Type ID" })
          }
        >
          Employee Type ID
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>{view.name}</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(values).map((d) =>
            Object.keys(values[d]).map((id) => (
              <tr key={`${d}-${id}`}>
                <td>{d}</td>
                <td className="value">{categories[id]}</td>
                <td className="value">{values[d][id]}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
