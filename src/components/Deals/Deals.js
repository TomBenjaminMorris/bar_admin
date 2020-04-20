import React, { Component } from "react";

import classes from "./Deals.css";
import Line from "../UI/Line/Line";
import Deal from "./Deal/Deal";
import Modal from "../UI/Modal/Modal";
import EditingDeal from "./EditingDeal/EditingDeal";

class Deals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationDetails: this.props.locationDetails,
      editingDeal: null,
    };
  }

  componentDidUpdate(prevProps) {
    prevProps !== this.props
      ? this.setState({ locationDetails: this.props.locationDetails })
      : null;
  }

  handleEditDeal = (index) => {
    const deal = {...this.state.locationDetails}.deals[index]
    this.setState({ editingDeal: deal });
    this.props.edit();
  };

  handleSaveDeal = (deal) => {
    console.log('saving deal');
    this.props.savingCancelled();
    // this.props.save(this.state.locationDetails)
  };

  handleSaveCancel = () => {
    this.setState({ editingDeal: null });
    this.props.savingCancelled();
  }

  render() {
    const dealsArray = this.state.locationDetails.deals;
    const editingDeal = ( this.state.editingDeal &&
      <EditingDeal
        title="Edit Deal"
        deal={this.state.editingDeal}
        confirm={this.handleSaveDeal}
        cancel={this.props.savingCancelled}
      />
    );
    return (
      <div className={classes.Deals}>
        <h1>Deals</h1>
        <Line classOverride="MainBody" />
        {dealsArray.map((deal, i) => {
          return (
            <div>
              <h2>Deal {i}</h2>
              <Deal deal={deal} editDeal={() => this.handleEditDeal(i)} />
            </div>
          );
        })}

        <Modal
          show={this.props.editing}
          modalClosed={this.handleSaveCancel}
        >
          {editingDeal}
        </Modal>
      </div>
    );
  }
}

export default Deals;
