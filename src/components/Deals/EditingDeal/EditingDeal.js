import React, { Component } from "react";

import classes from "./EditingDeal.css";
import Button from "../../UI/Button/Button";
import WeekDays from "../Deal/WeekDays/WeekDays";

class EditingDeal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weekDays: this.props.deal.weekDays,
      description: this.props.deal.description,
      endTime: this.props.deal.endTime,
      startTime: this.props.deal.startTime,
    };
  }

  handleAddDeal = () => {
    const description = [...this.state.description];
    description.push("");
    this.setState({ description: description });
  };

  handleChangeText = (e) => {
    const value = e.target.value;
    const key = e.target.id;
    const description = [...this.state.description];
    description[key] = value;
    this.setState({ description: description });
  };

  handleRemoveDealItem = (e) => {
    const index = e.target.id
    let description = [...this.state.description];
    description.splice(index, 1);
    this.setState({ description: description });
  }

  render() {
    const { startTime, endTime, description, weekDays } = this.state;
    return (
      <div className={classes.EditingDeal}>
        <header>
          <h2>{this.props.title}</h2>
        </header>

        <WeekDays weekDays={weekDays}/>
        <div className={classes.Times}>
          <input type="time" defaultValue={startTime} />-
          <input type="time" defaultValue={endTime} /><br/>
        </div>

        Deals
        {description.map((item, i) => {
          return (
            <div className={classes.Deals}>
              <input
                id={i}
                type="text"
                value={item}
                onChange={this.handleChangeText}
              />
              <button id={i} onClick={this.handleRemoveDealItem}>x</button>
              <br/>
            </div>
          );
        })}
        <button onClick={this.handleAddDeal}>add deal</button>
        {/* {JSON.stringify(this.props.deal)} */}

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
