import React, { Component } from "react";
import axios from "./axios-bars";

import Layout from "./containers/Layout/Layout";
import AdminPane from "./containers/AdminPane/AdminPane";
import { BrowserRouter } from "react-router-dom";

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
  }

  render() {
    return (
      <BrowserRouter>
        <Layout locationDetails={this.state.locationDetails}>
          <AdminPane locationDetails={this.state.locationDetails} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
