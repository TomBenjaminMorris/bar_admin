import React, { Component } from "react";
import axios from "./axios-bars";
import { connect } from "react-redux";

import Layout from "./containers/Layout/Layout";
import AdminPane from "./containers/AdminPane/AdminPane";
import Auth from "./containers/Auth/Auth";
import { BrowserRouter } from "react-router-dom";
import * as actions from "./store/actions/index";

class App extends Component {
  state = {
    locationDetails: null,
    locationId: "ChIJR0dtzx1ceUgRRPpsmczf8SI",
  };

  componentDidMount() {
    axios
    .get("/bar", { params: { place_id: this.state.locationId } })
    .then((response) => {
      this.setState({ locationDetails: response.data });
    })
    .catch((error) => {
      console.log("Index error: " + error);
    });
    this.props.onTryAutoSignup();
    this.props.onQueryPlaceId('tom');
  }

  handleLocationIDUpdate = (id) => {
    this.setState({ locationId: id });
    axios
      .get("/bar", { params: { place_id: id } })
      .then((response) => {
        this.setState({ locationDetails: response.data });
      })
      .catch((error) => {
        console.log("Index error: " + error);
      });
  };

  render() {
    return (
      <BrowserRouter>
        {!this.props.isAuthenticated ? (
          <Auth />
        ) : (
          <Layout locationDetails={this.state.locationDetails}>
            <AdminPane
              placeId={this.props.placeId}
              locationDetails={this.state.locationDetails}
              locationIdUpdate={this.handleLocationIDUpdate}
            />
          </Layout>
        )}
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    placeId: state.auth.placeId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
    onQueryPlaceId: (placeId) => dispatch(actions.queryPlaceId(placeId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
