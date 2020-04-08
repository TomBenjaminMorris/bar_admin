import React from "react";

import classes from "./LocationDetailItems.css";
import LocationDetailItem from "./LocationDetailItem/LocationDetailItem";

const locationDetailItems = (props) => {
  const locationItems = [
    <LocationDetailItem title="Name" content={props.locationDetails.name} editing={props.editing}/>,
    <LocationDetailItem title="Website" content={props.locationDetails.website} editing={props.editing}/>,
    <LocationDetailItem title="Address" content={props.locationDetails.address} editing={props.editing}/>,
    // <LocationDetailItem title="Description" content={props.locationDetails.description} editing={props.editing}/>,
  ];

  return <div className={classes.LocationDetailItems}>{locationItems}</div>;
};

export default locationDetailItems;
