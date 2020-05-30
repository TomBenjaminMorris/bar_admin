import React from "react";
import classes from "./OpeningTimes.css";
const daysAndTimes = [
  {
    mon: {
      open: "07:00",
      close: "19:00",
    },
    tue: {
      open: "07:00",
      close: "19:00",
    },
    wed: {
      open: "07:00",
      close: "19:00",
    },
    thu: {
      open: "07:00",
      close: "19:00",
    },
    fri: {
      open: "07:00",
      close: "19:00",
    },
    sat: {
      open: "07:00",
      close: "19:00",
    },
    sun: {
      open: "07:00",
      close: "19:00",
    },
  },
];
const daysAndTimesKeys = Object.keys(daysAndTimes[0]);

const openingTimes = (props) => {
  
  return (
    <div className={classes.OpeningTimes}>
      {/* <div className={classes.Title}>OPENING TIMES</div> */}
      <div className={classes.DaysAndTimes}>
        {daysAndTimesKeys.map((day) => {
          return (
            <div key={day} className={classes.SingleDayAndTime}>
              <div className={classes.Day}>
                <div>{day}</div>
              </div>
              {props.editing ? (
                <input title={day + "-open"} className={classes.Time} type="time" defaultValue={daysAndTimes[0][day].open} onChange={(event) => props.changed(event)} />
              ) : (
                <div className={classes.Time}>{daysAndTimes[0][day].open}</div>
              )}
              <div className={classes.Time}>{" - "}</div>
              {props.editing ? (
                <input title={day + "-close"} className={classes.Time} type="time" defaultValue={daysAndTimes[0][day].close} onChange={(event) => props.changed(event)} />
              ) : (
                <div className={classes.Time}>{daysAndTimes[0][day].close}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default openingTimes;
