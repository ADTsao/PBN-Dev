import moment from "moment";
import { requiredActionFilterTypes } from "./constants";

const bannerData = require("./data/banner.json");
const actionsData = require("./data/actions.json");
const tableData = require("./data/table.json");

export const getBannerData = (start, end) => {
  const values = {
    patients_scheduled: 0,
    new_patients_scheduled: 0,
    scheduled: 0,
    production_daily_goal: 0
  };

  let cursor = new Date(start);
  while (cursor <= end) {
    const key = moment(cursor).format("MM/DD/YYYY");

    if (bannerData[key]) {
      values.patients_scheduled += bannerData[key].patients_scheduled;
      values.new_patients_scheduled += bannerData[key].new_patients_scheduled;
      values.scheduled += bannerData[key].scheduled;
      values.production_daily_goal += bannerData[key].production_daily_goal;
    }

    cursor.setDate(cursor.getDate() + 1);
  }

  return values;
};

export function getActionsData(limit, filters, status, cursor = 0) {
  const data = [];
  const allFilters = [].concat.apply(
    [],
    filters.map((f) => requiredActionFilterTypes[f].filters)
  );
  let c = cursor;

  while (data.length < limit) {
    if (
      actionsData[c] &&
      (status === "all" || actionsData[c].status === status)
    ) {
      if (filters.length === 0) data.push(actionsData[c]);
      else if (allFilters.includes(actionsData[c].event_type))
        data.push(actionsData[c]);
    }

    if (!actionsData[c + 1]) break;

    c += 1;
  }

  return { data, cursor: c };
}

export const getTableData = (key = "paytype_id") => {
  const values = {};
  tableData.values.forEach((v) => {
    values[v.date] = {
      ...values[v.date],
      [v[key]]: ((values[v.date] && values[v.date][v[key]]) || 0) + v.amount
    };
  });

  return { categories: tableData.categories[`${key}s`], values };
};
