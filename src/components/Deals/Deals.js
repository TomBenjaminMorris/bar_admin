import React, { Component } from "react";

import classes from "./Deals.css";
import Line from "../UI/Line/Line";
import Deal from "./Deal/Deal";
import Modal from "../UI/Modal/Modal";
import EditingDeal from "./EditingDeal/EditingDeal";
import Spinner from "../UI/Spinner/Spinner";

class Deals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationDetails: this.props.locationDetails,
      editingDeal: null,
      dealIndex: null,
      newDeal: false,
    };
  }

  componentDidUpdate(prevProps) {
    prevProps !== this.props
      ? this.setState({ locationDetails: this.props.locationDetails })
      : null;
  }

  handleEditDeal = (index) => {
    const deal = {...this.state.locationDetails}.deals[index]
    this.setState({ editingDeal: deal, dealIndex: index, newDeal: false });
    this.props.edit();
  };

  handleSaveDeal = (deal) => {
    // console.log('saving deal: ', deal);
    this.setState({editingDeal: deal});
    const finalLocation = {...this.state.locationDetails};
    // console.log('finalLocation: ', finalLocation);
    finalLocation.deals[this.state.dealIndex] = deal;
    // console.log('finalLocation: ', finalLocation);
    this.props.savingCancelled();
    this.props.save(finalLocation)
  };

  handleSaveCancel = () => {
    this.setState({ editingDeal: null, newDeal: false });
    this.props.savingCancelled();
  }

  handleNewDeal = () => {
    this.setState({newDeal: true});
    this.props.edit();
  }

  render() {
    const dealsArray = this.state.locationDetails.deals;
    const editingDeal = ( (this.state.editingDeal || this.state.newDeal) &&
      <EditingDeal
        title={this.state.newDeal ? "Add New Deal" : "Edit Deal " + this.state.dealIndex}
        deal={this.state.editingDeal}
        confirm={this.handleSaveDeal}
        cancel={this.props.savingCancelled}
        newDeal={this.state.newDeal}
      />
    );
    return (
      <div className={classes.Deals}>
        <h1>Deals</h1>
        <Line classOverride="MainBody" />
        {dealsArray.map((deal, i) => {
          return (
            <div>
              <h3>Deal {i}</h3>
              <Deal deal={deal} editDeal={() => this.handleEditDeal(i)} />
            </div>
          );
        })}

        <button onClick={this.handleNewDeal}>Add New Deal</button>

        <Modal
          show={this.props.editing}
          modalClosed={this.handleSaveCancel}
        >
          {this.props.loading ? <Spinner/> : editingDeal}
        </Modal>
      </div>
    );
  }
}

export default Deals;
