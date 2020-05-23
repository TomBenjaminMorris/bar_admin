import React, { Component } from "react";

import classes from "./SuperUser.css";
import Button from "../UI/Button/Button";
import axios_bars from "../../axios-bars";

class SuperUser extends Component {
  state = {
    locationID: null,
    searchName: null,
    searchResult: null,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios_bars
      .get("/find", { params: { name: this.state.searchName } })
      .then((response) => {
        this.setState({ searchResult: response.data });
      })
      .catch((error) => {
        console.log("Index error: " + error);
      });
  };

  handleClickLocation = (location) => {
    this.props.locationIdUpdate(location.place_id);
    this.setState({searchResult: null, searchName: location.name})
  };

  render() {
    const results = (
      <div className={classes.ResultWrapper}>
        {this.state.searchResult && this.state.searchResult.map((location, i) => {
          return (
            <div
              key={i}
              className={classes.Result}
              onClick={() => this.handleClickLocation(location)}
            >
              {location.name}
            </div>
          );
        })}
      </div>
    );
    return (
      <div className={classes.SuperUser}>
        <h1>Switch Location</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.searchName}
            onChange={(e) => this.setState({ searchName: e.target.value })}
          />
          {results}
          <div className={classes.AddDealButton}>
            <Button btnType={"Add"} clicked={this.handleSubmit}>
              Search
            </Button>
          </div>
        </form>
        {/* id<input type="text" onChange={(e) => this.setState({locationID: e.target.value})}/> */}
      </div>
    );
  }
}

export default SuperUser;
