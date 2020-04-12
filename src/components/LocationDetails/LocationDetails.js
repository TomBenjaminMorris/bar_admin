import React, { Component } from "react";

import classes from "./LocationDetails.css";
import Line from "../UI/Line/Line";
import LocationDetailItems from "./LocationDetailItems/LocationDetailItems";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import Aux from "../../hoc/Aux/Aux";
import Dialogue from "../UI/Dialogue/Dialogue";

class LocationDetails extends Component {
  state = {
    locationDetails: null,
  };

  componentDidUpdate(prevProps) {
    prevProps.locationDetails !== this.props.locationDetails
      ? this.setState({ locationDetails: this.props.locationDetails })
      : null;
  }

  handleFieldUpdate = (e) => {
    let tmpLocation = { ...this.state.locationDetails };
    const fieldVal = e.target.value;
    const fieldTitle = e.target.title.toLowerCase();
    tmpLocation[fieldTitle] = fieldVal;
    this.setState({ locationDetails: tmpLocation });
  };

  render() {
    return (
      <div className={classes.LocationDetails}>
        <h1>Location Details</h1>

        <div className={classes.DetailsButton}>
          {this.props.editing ? (
            <Aux>
              <Button btnType={"Success"} clicked={this.props.initialSave}>
                Save
              </Button>
              <Button btnType={"Danger"} clicked={this.props.savingCancelled}>
                Cancel
              </Button>
            </Aux>
          ) : (
            <Button btnType={"Danger"} clicked={this.props.edit}>
              Edit
            </Button>
          )}
        </div>

        <Line classOverride="MainBody" />
        <LocationDetailItems
          locationDetails={this.props.locationDetails}
          editing={this.props.editing}
          updateField={this.handleFieldUpdate}
        />

        <Modal
          show={this.props.saving}
          modalClosed={this.props.savingCancelled}
        >
          <Dialogue
            title="Do you want to save?"
            confirm={() => this.props.save(this.state.locationDetails)}
            cancel={this.props.savingCancelled}
          >
            Performing this action will update the database permanently if you
            chose to save.
          </Dialogue>
        </Modal>
      </div>
    );
  }
}

export default LocationDetails;
