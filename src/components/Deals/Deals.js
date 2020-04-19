import React, { Component } from "react";

import classes from './Deals.css';
import Line from '../UI/Line/Line';
import Deal from './Deal/Deal';

class Deals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationDetails: this.props.locationDetails,
    };
  }

  componentDidUpdate(prevProps) {
    prevProps.locationDetails !== this.props.locationDetails
      ? this.setState({ locationDetails: this.props.locationDetails })
      : null;
  }

  render() {
    const dealsArray = this.state.locationDetails.deals;
    return (
      <div className={classes.Deals}>
        <h1>Deals</h1>
        <Line classOverride="MainBody" />
        {dealsArray.map((deal, i) => {
          return (
            <div>
              <h2>Deal {i}</h2>
              <button>EDIT</button>
              <Deal deal={deal} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Deals;
