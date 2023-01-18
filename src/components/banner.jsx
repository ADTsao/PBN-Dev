import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { getBannerData } from "../utility";
import banner from "../assets/images/banner-img.png";

export const Banner = () => {
  const [start, setStart] = useState(new Date("09/01/2022"));
  const [end, setEnd] = useState(new Date("09/01/2022"));
  const data = getBannerData(start, end);

  const setDate = (date, key) => {
    if (key === "start") {
      if (date > end) setStart(end);
      else setStart(date);
    } else {
      if (date < start) setEnd(start);
      else setEnd(date);
    }
  };

  return (
    <div className="dashboard-banner row">
      <div className="banner-content col-sm-6">
        <h1>Welcome back, Chris.</h1>
        <div className="datepickers">
          <span>Start Date:</span>{" "}
          <DatePicker
            minDate={new Date("09/01/2022")}
            maxDate={new Date("09/30/2022")}
            selected={start}
            onChange={(d) => setDate(d, "start")}
          />
          <span>End Date:</span>{" "}
          <DatePicker
            minDate={new Date("09/01/2022")}
            maxDate={new Date("09/30/2022")}
            selected={end}
            onChange={(d) => setDate(d, "end")}
          />
        </div>
        <p>
          Let's take a look at your schedule! You have{" "}
          <strong>{data.patients_scheduled} patients</strong> scheduled and{" "}
          <strong>{data.new_patients_scheduled} new patients.</strong> You are
          scheduled to produce <strong>${data.scheduled}</strong> during this
          time frame. You need to produce{" "}
          <strong>${data.production_daily_goal}</strong> stay on track.
        </p>
      </div>
      <div className="home-img-container col-sm-6">
        <img src={banner} alt="Home Screen" />
      </div>
    </div>
  );
};
