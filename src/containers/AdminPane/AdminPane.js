import React, { Component } from "react";

import classes from "./AdminPane.css";
import LocationDetails from "../../components/LocationDetails/LocationDetails";

const locationDetails = {
  _id: { $oid: "5e5ff1d42dfb9500110821dc" },
  location: {
    coordinates: [
      { $numberDouble: "53.79886549999999" },
      { $numberDouble: "-1.5408728" },
    ],
    type: "Point",
  },
  imgUrls: [],
  name: "Headrow House",
  address: "19a The Headrow, Leeds LS1 6PU, UK",
  city: "Leeds",
  place_id: "ChIJSatihRtceUgRBykIV3V1uuU",
  validated: true,
  website: "http://headrowhouse.com/",
  description:
    "This is a cool bar with lots of good drinks deals that you can enjoy. Please come on down and enjoy our drinks",
  imgUrl:
    "https://lh5.googleusercontent.com/p/AF1QipP6vyXYj9tP6GSsgmCFu1JlPT721nttU4RSyBAp=w408-h272-k-no",
  deals: [
    {
      weekDays: [
        { $numberInt: "0" },
        { $numberInt: "1" },
        { $numberInt: "2" },
        { $numberInt: "3" },
        { $numberInt: "4" },
        { $numberInt: "5" },
        { $numberInt: "6" },
      ],
      description: [
        "Buy one gin goblet and get another for £1",
        "Buy one cocktail and get another for £1",
      ],
      _id: { $oid: "5e5ff2bc6e89830011d795b0" },
      endTime: "23:59",
      fullDescription: "placeholder description",
      startTime: "00:00",
    },
  ],
  __v: { $numberInt: "0" },
};

class AdminPane extends Component {
  state = {
    editing: false,
    saving: true,
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
  }

  render() {
    return (
      <div className={classes.AdminPane}>
        <LocationDetails
          locationDetails={locationDetails}
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
