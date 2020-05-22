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
    locationId: null,
  };

  componentDidMount() {
    // axios
    // .get("/bar", { params: { place_id: this.state.locationId } })
    // .then((response) => {
    //   this.setState({ locationDetails: response.data });
    // })
    // .catch((error) => {
    //   console.log("Index error: " + error);
    // });
    this.props.onTryAutoSignup();
  }
  
  componentDidUpdate(prevProps) {

    const userId = localStorage.getItem("userId");
    
    if(prevProps.token !== this.props.token && userId) {
      console.log('Fetching userID')
      this.props.onQueryPlaceId(this.props.token, userId);
    }

    if(prevProps.placeId !== this.props.placeId) {
      console.log('Fetching Location data')
      this.props.onFetchLocation(this.props.placeId);
    }

    if(prevProps.locationData !== this.props.locationData) {
      console.log('Updating location state')
      this.setState({locationDetails: this.props.locationData});
    }
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
          <Layout locationDetails={this.state.locationDetails} isAdmin={this.props.admin}>
            <AdminPane
              placeId={this.props.placeId}
              isAdmin={this.props.admin}
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
    token: state.auth.token,
    placeId: state.auth.placeId,
    admin: state.auth.admin,
    locationData: state.auth.locationData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
    onQueryPlaceId: (token, userId) => dispatch(actions.queryPlaceId(token, userId)),
    onFetchLocation: (placeId) => dispatch(actions.fetchLocation(placeId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
