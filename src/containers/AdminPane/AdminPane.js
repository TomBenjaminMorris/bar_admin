import React, { Component } from "react";
import axios from "axios";

import classes from "./AdminPane.css";
import LocationDetails from "../../components/LocationDetails/LocationDetails";

class AdminPane extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      saving: false,
      locationDetails: null,
    };
  }

  componentDidUpdate(prevProps) {
    prevProps.locationDetails !== this.props.locationDetails
      ? this.setState({ locationDetails: this.props.locationDetails })
      : null;
  }

  handleEditing = () => {
    this.setState({ editing: true });
  };

  handleInitialSave = () => {
    this.setState({ saving: true });
  };

  handleSave = (locationToSave) => {
    if (locationToSave !== this.state.locationDetails) {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      axios
        .put("/bar?place_id=" + locationToSave.place_id, locationToSave, config)
        .then((response) => {
          this.setState({
            editing: false,
            saving: false,
            locationDetails: locationToSave,
          });
        })
        .catch((error) => {
          this.setState({ editing: false, saving: false });
          console.log("PUT FAILED: " + error);
        });
    } else {
      this.setState({ editing: false, saving: false });
    }
  };

  savingCancelledHandler = () => {
    this.setState({ editing: false, saving: false });
  };

  render() {
    return (
      <div className={classes.AdminPane}>
        <LocationDetails
          locationDetails={this.state.locationDetails}
          edit={this.handleEditing}
          initialSave={this.handleInitialSave}
          save={this.handleSave}
          editing={this.state.editing}
          saving={this.state.saving}
          savingCancelled={this.savingCancelledHandler}
        />
      </div>
    );
  }
}

export default AdminPane;
