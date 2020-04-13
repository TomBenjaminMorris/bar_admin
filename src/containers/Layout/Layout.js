import React, { Component } from "react";

import Aux from "../../hoc/Aux/Aux";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SiderDrawer";
import SideToolbar from "../../components/Navigation/SideToolbar/SideToolbar";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
    console.log("closed");
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar drawToggleClicked={this.sideDrawerToggleHandler} />
        {this.props.locationDetails && (
          <SideToolbar
            locationDetails={this.props.locationDetails}
            userName={this.props.locationDetails.name}
          />
        )}
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
