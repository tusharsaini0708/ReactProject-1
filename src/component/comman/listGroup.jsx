import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <ul className="list-group mt-5">
        {this.props.genre.map((c) => (
          <li
            key={c._id}
            className={
              c.name === this.props.currentGenre
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => this.props.onGenreChange(c.name)}
          >
            {c.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default Filter;
