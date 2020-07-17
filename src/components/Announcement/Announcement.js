import React, { Component } from "react";

import edit_icon from "../../assets/icons/edit.png";
import delete_icon from "../../assets/icons/trash.png";

import classes from "./Announcement.css";
import Line from "../UI/Line/Line";
import Button from "../UI/Button/Button";
import Spinner from "../UI/Spinner/Spinner";

class Announcement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationDetails: this.props.locationDetails,
      editingAnnouncement: false,
      newPost:
        this.props.locationDetails.announcement &&
        this.props.locationDetails.announcement.post,
    };
  }

  setCaretPosition = (ctrl, pos) => {
    // Modern browsers
    if (ctrl.setSelectionRange) {
      ctrl.focus();
      ctrl.setSelectionRange(pos, pos);

      // IE8 and below
    } else if (ctrl.createTextRange) {
      var range = ctrl.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.editingAnnouncement && this.state.editingAnnouncement) {
      this.setCaretPosition(this.postInput, this.postInput.value.length);
    }
  }

  onSave = () => {
    const now = new Date();
    const announcement = {
      post: this.state.newPost,
      time: now.toISOString(),
    };
    const finalLocation = { ...this.state.locationDetails, announcement };
    this.props.save(finalLocation);
    this.setState({
      editingAnnouncement: false,
      locationDetails: finalLocation,
    });
  };

  editPost = () => {
    const { newPost } = this.state;
    return (
      <div>
        <input
          type="text"
          value={newPost}
          className={classes.postInput}
          onChange={(e) => this.setState({ newPost: e.target.value })}
          ref={(node) => (this.postInput = node)}
        />
        <div className={classes.buttons}>
          <Button btnType={"Success"} clicked={this.onSave}>
            Save
          </Button>
          <Button
            btnType={"Danger"}
            clicked={() =>
              this.setState({
                editingAnnouncement: false,
                newPost:
                  this.props.locationDetails.announcement &&
                  this.props.locationDetails.announcement.post,
              })
            }
          >
            Cancel
          </Button>
        </div>
      </div>
    );
  };

  displayPost = () => {
    const { locationDetails, newPost } = this.state;
    const { announcement } = locationDetails;
    const { post, time } = announcement || {};
    return (
      <div>
        <div>{post}</div>
        <img
          src={edit_icon}
          className={classes.Edit}
          onClick={() => {
            this.setState({ editingAnnouncement: true });
          }}
          alt="edit"
        />
        <img
          src={delete_icon}
          className={classes.Delete}
          onClick={() => {}}
          alt="delete"
        />
      </div>
    );
  };

  render() {
    return (
      <div>
        <h1>Status</h1>
        <Line classOverride="MainBody" />
        <div className={classes.Announcment}>
          <div className={classes.AnnouncementPost}>
            {this.props.loading && <Spinner className={classes.spinner} />}
            {!this.props.loading && this.state.editingAnnouncement
              ? this.editPost()
              : this.displayPost()}
          </div>
        </div>
      </div>
    );
  }
}

export default Announcement;
