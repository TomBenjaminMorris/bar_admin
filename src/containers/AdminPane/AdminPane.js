import React, { Component } from "react";

import Aux from "../../hoc/Aux/Aux";
import classes from './AdminPane.css';

class AdminPane extends Component {

  render() {
    return (
      <Aux>
        <div className={classes.AdminPane}>
          AdminPane
        </div>
      </Aux>
    );
  }
}

export default AdminPane;
