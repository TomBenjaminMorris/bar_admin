import React, { Component } from "react";
import axios from "../../axios-bars";

import classes from "./AdminPane.css";
import LocationDetails from "../../components/LocationDetails/LocationDetails";
import Spinner from "../../components/UI/Spinner/Spinner";
import { Switch, Route } from "react-router-dom";
import Deals from "../../components/Deals/Deals";
import SuperUser from "../../components/SuperUser/SuperUser";

class AdminPane extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      saving: false,
      locationDetails: null,
      loading: false,
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
    this.setState({ loading: true });

    if (locationToSave !== this.state.locationDetails) {
      axios
        .put("/bar?place_id=" + locationToSave.place_id, locationToSave)
        .then((response) => {
          this.setState({
            editing: false,
            saving: false,
            locationDetails: locationToSave,
            loading: false,
          });
        })
        .catch((error) => {
          this.setState({ editing: false, saving: false, loading: false });
          console.log("PUT FAILED: " + error);
        });
    } else {
      this.setState({ editing: false, saving: false, loading: false });
    }
  };

  savingCancelledHandler = () => {
    this.setState({ editing: false, saving: false });
  };

  render() {
    const LocationDetailsBlock = (
      <LocationDetails
        locationDetails={this.state.locationDetails}
        edit={this.handleEditing}
        initialSave={this.handleInitialSave}
        save={this.handleSave}
        editing={this.state.editing}
        saving={this.state.saving}
        savingCancelled={this.savingCancelledHandler}
        loading={this.state.loading}
      />
    );

    const DealsDetailsBlock = (
      <Deals
        locationDetails={this.state.locationDetails}
        edit={this.handleEditing}
        save={this.handleSave}
        editing={this.state.editing}
        savingCancelled={this.savingCancelledHandler}
        loading={this.state.loading}
      />
    );

    const SuperUserBlock = (
      <SuperUser locationIdUpdate={this.props.locationIdUpdate} />
    );

    const PhotosDetailsBlock = <div>Photos functionality coming soon...</div>;

    const StatsDetailsBlock = <div>Statistics interface coming soon...</div>;

    const HelpDetailsBlock = <div>HELP</div>;

    const mainContent = !this.state.locationDetails ? (
      <Spinner />
    ) : (
      <Switch>
        <Route path="/admin" render={() => SuperUserBlock} />
        <Route path="/details" render={() => LocationDetailsBlock} />
        <Route path="/deals" render={() => DealsDetailsBlock} />
        <Route path="/photos" render={() => PhotosDetailsBlock} />
        <Route path="/stats" render={() => StatsDetailsBlock} />
        <Route path="/help" render={() => HelpDetailsBlock} />
        <Route render={() => <h1>Welcome, {this.state.locationDetails.name}</h1>} />
      </Switch>
    );
    return <div className={classes.AdminPane}>{mainContent}</div>;
  }
}

export default AdminPane;
