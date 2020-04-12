import React from "react";

import classes from "./LocationDetailItem.css";

const locationDetailItem = (props) => (
  <div className={classes.LocationDetailItem}>
    <div className={classes.Pill}>{props.title}</div>
    <br />
    {props.editing ? (
      <input title={props.title} type="text" defaultValue={props.content} onChange={event => props.changed(event)} />
    ) : (
      <h2>{props.content}</h2>
    )}
  </div>
);

export default locationDetailItem;
