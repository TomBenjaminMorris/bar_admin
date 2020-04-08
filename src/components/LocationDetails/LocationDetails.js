import React from "react";

import classes from "./LocationDetails.css";
import Line from "../UI/Line/Line";
import LocationDetailItems from "./LocationDetailItems/LocationDetailItems";
import Button from '../UI/Button/Button';

const locationDetails = (props) => {
  return (
    <div className={classes.LocationDetails}>
      <h1>Location Details</h1>
      <div className={classes.DetailsButton}>
        {props.editing ? (
          <Button btnType={"Save"} clicked={props.save}>
            Save
          </Button>
        ) : (
          <Button btnType={"Edit"} clicked={props.edit}>
            Edit
          </Button>
        )}
      </div>
      <Line classOverride="MainBody" />
      <LocationDetailItems
        locationDetails={props.locationDetails}
        editing={props.editing}
      />
    </div>
  );
};

export default locationDetails;
