import React, { Component } from "react";

import classes from "./EditingDeal.css";
import Button from "../../UI/Button/Button";

class EditingDeal extends Component {

  state = {
    weekDays: null,
    description: null,
    endTime: null,
    startTime: null,
  };

  render() {
    return (
      <div className={classes.EditingDeal}>
        <header>
          <h2>{this.props.title}</h2>
        </header>
        <input type="text" defaultValue={this.props.deal.weekDays} />
        <br />
        <input type="text" defaultValue={this.props.deal.description} />
        <br />
        <input type="text" defaultValue={this.props.deal.endTime} />
        <br />
        <input type="text" defaultValue={this.props.deal.startTime} />
        <br />
        <footer>
          <Button btnType={"Success"} clicked={this.props.confirm}>
            Save
          </Button>
          <Button btnType={"Danger"} clicked={this.props.cancel}>
            Cancel
          </Button>
        </footer>
      </div>
    );
  }
}

export default EditingDeal;
