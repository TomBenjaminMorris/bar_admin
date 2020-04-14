import React from "react";

import classes from './Checkbox.css';

const checkbox = (props) => (
  <label className={classes.ValidatedContainer}>
    <input
      type="checkbox"
      name="isValidated"
      disabled={!props.editing}
      checked={props.validated}
      onChange={props.checkboxToggle}
    />
    <span className={classes.Checkmark}></span>
  </label>
);

export default checkbox;
