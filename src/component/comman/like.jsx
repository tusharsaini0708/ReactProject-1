import React, { Component } from "react";

class Like extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";

    return (
      <i
        onClick={this.props.onClick}
        className={classes}
        aria-hidden="true"
      ></i>
    );

    // this app is using font-awesome v 4.7.0 don't know why so we have to use that version icons
  }
}

export default Like;
