import React, { Component } from "react";

import classes from "./LocationDetails.css";
import Line from "../UI/Line/Line";
import LocationDetailItems from "./LocationDetailItems/LocationDetailItems";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import Aux from "../../hoc/Aux/Aux";

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
              <Button btnType={"Save"} clicked={this.props.initialSave}>
                Save
              </Button>
              <Button btnType={"Edit"} clicked={this.props.savingCancelled}>
                Cancel
              </Button>
            </Aux>
          ) : (
            <Button btnType={"Edit"} clicked={this.props.edit}>
              Edit
            </Button>
          )}
        </div>

        <Modal
          show={this.props.saving}
          modalClosed={this.props.savingCancelled}
        >
          <header>
            <h2>Do you want to save?</h2>
          </header>
          <article className="content">
            <p>Performing this action will update the database permanently if you chose to save.</p>
          </article>
          <footer>
            <a
              className={[classes.Button, classes.Success].join(" ")}
              onClick={() => this.props.save(this.state.locationDetails)}
            >
              Save
            </a>
            <a
              className={[classes.Button, classes.Danger].join(" ")}
              onClick={this.props.savingCancelled}
            >
              Cancel
            </a>
          </footer>
          {/* <Button
            btnType={"Save"}
            clicked={() => this.props.save(this.state.locationDetails)}
          >
            Yes
          </Button>
          <Button btnType={"Edit"} clicked={this.props.savingCancelled}>
            Cancel
          </Button> */}
        </Modal>

        <Line classOverride="MainBody" />

        <LocationDetailItems
          locationDetails={this.props.locationDetails}
          editing={this.props.editing}
          updateField={this.handleFieldUpdate}
        />
      </div>
    );
  }
}

export default LocationDetails;
