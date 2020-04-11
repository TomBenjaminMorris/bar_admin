import React from "react";

import classes from "./LocationDetails.css";
import Line from "../UI/Line/Line";
import LocationDetailItems from "./LocationDetailItems/LocationDetailItems";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";

const locationDetails = (props) => {
  return (
    <div className={classes.LocationDetails}>
      <h1>Location Details</h1>
      <div className={classes.DetailsButton}>
        {props.editing ? (
          <Button btnType={"Save"} clicked={props.initialSave}>
            Save
          </Button>
        ) : (
          <Button btnType={"Edit"} clicked={props.edit}>
            Edit
          </Button>
        )}
      </div>
      <Modal show={props.saving} modalClosed={props.savingCancelled}>
        <p style={{textAlign: 'center'}}>Are you sure?</p>
        <Button btnType={"Save"} clicked={props.save}>Yes</Button>
        <Button btnType={"Edit"} clicked={props.savingCancelled}>Cancel</Button>
      </Modal>
      <Line classOverride="MainBody" />
      <LocationDetailItems
        locationDetails={props.locationDetails}
        editing={props.editing}
      />
    </div>
  );
};

export default locationDetails;
