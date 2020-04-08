import React from "react";

import classes from "./LocationDetailItem.css";

const locationDetailItem = (props) => (
  <div className={classes.LocationDetailItem}>
    <div className={classes.Pill}>{props.title}</div>
    <br />
    {props.editing ? (
      <input type="text" defaultValue={props.content}/>
    ) : (
      <h2>{props.content}</h2>
    )}
  </div>
);

export default locationDetailItem;
