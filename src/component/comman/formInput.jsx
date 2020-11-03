import React, { Component } from "react";

class Input extends Component {
  render() {
    const { value, name, label, error, onChange } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        {/* Now input have their own state but we don't want that we want to maintain single source of truth,
        so we add value atr to input  */}
        <input
          value={value}
          onChange={onChange}
          className="form-control"
          type="text"
          name={name}
          id={name}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}

export default Input;
