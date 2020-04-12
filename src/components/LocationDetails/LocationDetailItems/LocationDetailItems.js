import React from "react";

import classes from "./LocationDetailItems.css";
import LocationDetailItem from "./LocationDetailItem/LocationDetailItem";

const locationDetailItems = (props) => {
  let locationItems = [];

  const locationTemplate = {
    name: "Name",
    address: "Address",
    website: "Website",
  };
  const templateKeys = Object.keys(locationTemplate);

  if (props.locationDetails) {
    locationItems = templateKeys.map((title, i) => {
      return (
        <LocationDetailItem
          key={title + i}
          title={locationTemplate[title]}
          content={props.locationDetails[title]}
          editing={props.editing}
          changed={props.updateField}
        />
      );
    });
  }

  return <div className={classes.LocationDetailItems}>{locationItems}</div>;
};

export default locationDetailItems;
