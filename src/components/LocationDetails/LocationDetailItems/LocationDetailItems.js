import React from "react";

import classes from "./LocationDetailItems.css";
import LocationDetailItem from "./LocationDetailItem/LocationDetailItem";

const locationDetailItems = (props) => {
  
  const locationTemplate = {
    name: {
      name: "Name",
      type: "text",
    },
    address: {
      name: "Address",
      type: "text",
    },
    website: {
      name: "Website",
      type: "text",
    },
    validated: {
      name: "Validated",
      type: "checkbox",
    },
  };
  
  let locationItems = [];
  const templateKeys = Object.keys(locationTemplate);
  
  if (props.locationDetails) {
    locationItems = templateKeys.map(key => {
      return (
        <LocationDetailItem
          key={key}
          title={locationTemplate[key].name}
          content={props.locationDetails[key]}
          editing={props.editing}
          changed={props.updateField}
          type={locationTemplate[key].type}
          validated={props.validated}
          checkboxToggle={props.checkboxToggle}
        />
      );
    });
  }

  return (
    <div className={classes.LocationDetailItems}>
      {locationItems}
    </div>
  );
};

export default locationDetailItems;
