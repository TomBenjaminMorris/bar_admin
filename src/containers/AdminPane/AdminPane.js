import React, { Component } from "react";
import axios from "axios";

import classes from "./AdminPane.css";
import LocationDetails from "../../components/LocationDetails/LocationDetails";

class AdminPane extends Component {
  state = {
    editing: false,
    saving: false,
  };

  handleEditing = () => {
    // this.setState( prevState => {
    //   return { editing: !prevState.editing };
    // });
    this.setState({ editing: true });
  };

  handleInitialSave = () => {
    this.setState({ saving: true });
  };

  handleSave = () => {
    this.setState({ editing: false, saving: false });
  };

  savingCancelledHandler = () => {
    this.setState({ editing: false, saving: false });
  };

  render() {
    return (
      <div className={classes.AdminPane}>
        <LocationDetails
          locationDetails={this.props.locationDetails}
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
