import React from "react";
import classes from "./Deal.css";

import edit_icon from '../../../assets/icons/edit.png';

const deal = (props) => {
  const { endTime, startTime, description, weekDays } = props.deal;
  let abbrevDays = require("abbrev-weekday-range");
  let weekDayFinal = abbrevDays(weekDays);
  weekDayFinal == "Sun-Sat" ? (weekDayFinal = "Everyday") : null;

  return (
    <div className={classes.Deal}>
      <img src={edit_icon} className={classes.Edit} onClick={props.editDeal} />
      <div className={classes.Days}>{weekDayFinal}</div>
      <div className={classes.Time}>
        {startTime} - {endTime}
      </div>
      {description.map((data) => {
        return <div className={classes.DealItem}>{`• ${data}`}</div>;
      })}
    </div>
  );
};

export default deal;
