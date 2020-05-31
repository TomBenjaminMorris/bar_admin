import React from "react";
import classes from "./OpeningTimes.css";
const defaultTemplate = [
  {
    mon: {
      open: "00:00",
      close: "00:00",
    },
    tue: {
      open: "00:00",
      close: "00:00",
    },
    wed: {
      open: "00:00",
      close: "00:00",
    },
    thu: {
      open: "00:00",
      close: "00:00",
    },
    fri: {
      open: "00:00",
      close: "00:00",
    },
    sat: {
      open: "00:00",
      close: "00:00",
    },
    sun: {
      open: "00:00",
      close: "00:00",
    },
  },
];


const openingTimes = (props) => {
  
  let daysAndTimes = props.openingTimes[0];
  daysAndTimes === undefined ? daysAndTimes = defaultTemplate[0] : delete daysAndTimes['_id'];
  console.log(daysAndTimes);
  
  const daysAndTimesKeys = Object.keys(daysAndTimes);
  
  return (
    <div className={classes.OpeningTimes}>
      {/* <div className={classes.Title}>OPENING TIMES</div> */}
      <div className={classes.DaysAndTimes}>
        {daysAndTimesKeys.map((day) => {
          const openTime = daysAndTimes[day].open === "" ? "00:00" : daysAndTimes[day].open;
          const closeTime = daysAndTimes[day].close === "" ? "00:00" : daysAndTimes[day].close;;
          return (
            daysAndTimes[day] && (
              <div key={day} className={classes.SingleDayAndTime}>
                <div className={classes.Day}>
                  <div>{day}</div>
                </div>
                {props.editing ? (
                  <input title={day + "-open"} className={classes.Time} type="time" defaultValue={openTime} onChange={(event) => props.changed(event)} />
                ) : (
                  <div className={classes.Time}>{openTime}</div>
                )}
                <div className={classes.Time}>{" - "}</div>
                {props.editing ? (
                  <input title={day + "-close"} className={classes.Time} type="time" defaultValue={closeTime} onChange={(event) => props.changed(event)} />
                ) : (
                  <div className={classes.Time}>{closeTime}</div>
                )}
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default openingTimes;
