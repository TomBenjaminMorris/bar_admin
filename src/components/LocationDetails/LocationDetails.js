import React, { Component } from "react";

import classes from "./LocationDetails.css";
import Line from "../UI/Line/Line";
import LocationDetailItems from "./LocationDetailItems/LocationDetailItems";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import Dialogue from "../UI/Dialogue/Dialogue";
import Spinner from "../UI/Spinner/Spinner";
import edit_icon from "../../assets/icons/edit.png";

class LocationDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationDetails: this.props.locationDetails,
      showSave: false,
      locationValidated: this.props.locationDetails.validated,
    };
  }

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
    this.setState({ locationDetails: tmpLocation, showSave: true });
  };

  handleCheckboxToggle = (e) => {
    let tmpLocation = { ...this.state.locationDetails };
    tmpLocation.validated = e.target.checked;
    this.setState({
      locationDetails: tmpLocation,
      showSave: true,
      locationValidated: e.target.checked,
    });
  };

  handleCancel = () => {
    this.setState({
      locationDetails: this.props.locationDetails,
      locationValidated: this.props.locationDetails.validated,
    });
    this.props.savingCancelled();
  };

  render() {
    let modalContent = <Spinner />;

    if (!this.props.loading) {
      modalContent = (
        <Dialogue
          title="Do you want to save?"
          confirm={() => this.props.save(this.state.locationDetails)}
          cancel={this.handleCancel}
        >
          Performing this action will update the database permanently if you
          chose to save.
        </Dialogue>
      );
    }

    return (
      <div className={classes.LocationDetails}>
        <h1>Location Details</h1>

        {!this.props.editing ? (
          <div className={classes.EditButton}>
            <img
              src={edit_icon}
              className={classes.Edit}
              onClick={this.props.edit}
            />
          </div>
        ) : null}

        <Line classOverride="MainBody" />

        <LocationDetailItems
          locationDetails={this.state.locationDetails}
          editing={this.props.editing}
          updateField={this.handleFieldUpdate}
          validated={
            this.props.editing
              ? this.state.locationValidated
              : this.props.locationDetails.validated
          }
          checkboxToggle={this.handleCheckboxToggle}
        />

        {this.props.editing ? (
          <div className={classes.SaveCancelButtons}>
            {this.state.showSave && (
              <Button btnType={"Success"} clicked={this.props.initialSave}>
                Save
              </Button>
            )}
            <Button btnType={"Danger"} clicked={this.handleCancel}>
              Cancel
            </Button>
          </div>
        ) : null}

        <Modal show={this.props.saving} modalClosed={this.handleCancel}>
          {modalContent}
        </Modal>
      </div>
    );
  }
}

export default LocationDetails;
