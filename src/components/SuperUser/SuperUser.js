
import React, { Component } from "react";

import classes from "./SuperUser.css";
import Line from "../UI/Line/Line";
import Button from "../UI/Button/Button";

class SuperUser extends Component {

  state = {
    locationID: null,
  }

  handleSubmit = () => {
   this.props.locationIdUpdate(this.state.locationID);
  }

  render() {
    return (
      <div className={classes.SuperUser}>
        <h1>Super User</h1>
        <input type="text" onChange={(e) => this.setState({locationID: e.target.value})}/>
        <div className={classes.AddDealButton}>
          <Button btnType={"Add"} clicked={this.handleSubmit}>
            Update
          </Button>
        </div>
      </div>
    );
  }
}

export default SuperUser;
