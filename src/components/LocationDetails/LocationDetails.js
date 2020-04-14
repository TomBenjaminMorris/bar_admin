import React, { Component } from "react";

import classes from "./LocationDetails.css";
import Line from "../UI/Line/Line";
import LocationDetailItems from "./LocationDetailItems/LocationDetailItems";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import Aux from "../../hoc/Aux/Aux";
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

  render() {
    let modalContent = <Spinner />;

    if (!this.props.loading) {
      modalContent = (
        <Dialogue
          title="Do you want to save?"
          confirm={() => this.props.save(this.state.locationDetails)}
          cancel={this.props.savingCancelled}
        >
          Performing this action will update the database permanently if you
          chose to save.
        </Dialogue>
      );
    }

    return (
      <div className={classes.LocationDetails}>
        <h1>Location Details</h1>

        <div className={classes.DetailsButton}>
          {this.props.editing ? (
            <Aux>
              {this.state.showSave && (
                <Button btnType={"Success"} clicked={this.props.initialSave}>
                  Save
                </Button>
              )}
              <Button btnType={"Danger"} clicked={this.props.savingCancelled}>
                Cancel
              </Button>
            </Aux>
          ) : (
            <img
              src={edit_icon}
              className={classes.Edit}
              onClick={this.props.edit}
            />
          )}
        </div>

        <Line classOverride="MainBody" />

        <LocationDetailItems
          locationDetails={this.props.locationDetails}
          editing={this.props.editing}
          updateField={this.handleFieldUpdate}
          validated={
            this.props.editing
              ? this.state.locationValidated
              : this.props.locationDetails.validated
          }
          checkboxToggle={this.handleCheckboxToggle}
        />

        <Modal
          show={this.props.saving}
          modalClosed={this.state.savingCancelled}
        >
          {modalContent}
        </Modal>
      </div>
    );
  }
}

export default LocationDetails;
