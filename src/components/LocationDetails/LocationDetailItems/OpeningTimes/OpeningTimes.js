import React from "react";
import classes from "./OpeningTimes.css";

const openingTimes = (props) => {
  const daysAndTimes = [
    {
      day: "Mon",
      open: "07:00",
      close: "19:00",
    },
    {
      day: "Tue",
      open: "07:00",
      close: "19:00",
    },
    {
      day: "Wed",
      open: "07:00",
      close: "19:00",
    },
    {
      day: "Thu",
      open: "07:00",
      close: "19:00",
    },
    {
      day: "Fri",
      open: "07:00",
      close: "19:00",
    },
    {
      day: "Sat",
      open: "07:00",
      close: "19:00",
    },
    {
      day: "Sun",
      open: "07:00",
      close: "19:00",
    },
  ];
  return (
    <div className={classes.OpeningTimes}>
      <div className={classes.Title}>OPENING TIMES</div>
      <div className={classes.DaysAndTimes}>
        {daysAndTimes.map((dayAndTime) => {
          return (
            <div className={classes.SingleDayAndTime}>
              <div className={classes.Day}>
                <div>{dayAndTime.day}</div>
              </div>
              {/* <input type="time" value={dayAndTime.open}/> */}
              <div className={classes.Time}>{dayAndTime.open}</div>
              <div className={classes.Time}>{" - "}</div>
              <div className={classes.Time}>{dayAndTime.close}</div>
              {/* <input type="time" value={dayAndTime.close}/> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default openingTimes;
