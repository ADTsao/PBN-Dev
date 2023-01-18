import React, { useState, useEffect } from "react";
import { Banner } from "./banner";
import { Controls } from "./controls";
import { Actions } from "./actions";
import { Table } from "./table";
import { getActionsData } from "../utility";

import "./styles.scss";

export const Home = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [status, setStatus] = useState("all");
  const [cursor, setCursor] = useState(0);

  useEffect(() => {
    const { data: d, cursor: c } = getActionsData(20, filters, status, 0);
    setCursor(c);
    setData(d);
  }, [filters, status]);

  const updateStatus = (s) => {
    setStatus(s);
  };

  const updateFilters = (f) => {
    if (f === "") {
      setFilters([]);
    } else if (filters.includes(f)) {
      const index = filters.indexOf(f);
      const nf = [...filters];
      nf.splice(index, 1);
      setFilters(nf);
    } else {
      setFilters([...filters, f]);
    }
  };

  const requestData = () => {
    console.log(20, filters, status, cursor);
    const { data: d, cursor: c } = getActionsData(20, filters, status, cursor);
    setCursor(c);
    setData([...data, ...d]);
  };

  return (
    <div className="wrapper">
      <Banner></Banner>
      <h2>Activity</h2>
      <div className="content row">
        <Controls filters={filters} updateFilters={updateFilters}></Controls>
        <Actions
          status={status}
          updateStatus={updateStatus}
          data={data}
          requestData={requestData}
        ></Actions>
      </div>
      <h2>Data Table</h2>
      <Table></Table>
    </div>
  );
};
