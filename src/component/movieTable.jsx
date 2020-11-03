import React, { Component } from "react";
import Like from "./comman/like";
import TableBody from "./comman/tableBody";
import TableHeader from "./comman/tableHeader";

class MovieTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rating" },
    {
      key: "like",
      label: "Like",
      content: (currentMovie) => (
        <Like
          liked={currentMovie.liked}
          onClick={() => this.props.onLike(currentMovie)}
        />
      ),
    },
    {
      key: "delete",
      content: (currentMovie) => (
        <button
          onClick={() => {
            this.props.onDelete(currentMovie._id); // can't call function in onclick , so we have to pass a reference
          }} // we are passing argument here, so we use this technique to pass argument
          // if we don't pass argument , we have to pass the reference .
          className="btn btn-sm btn-danger text-light"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { paginateMovie, onSort, sortColumn } = this.props;

    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody columns={this.columns} data={paginateMovie} />
      </table>
    );
  }
}

export default MovieTable;
