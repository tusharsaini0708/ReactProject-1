import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };

    if (path === sortColumn.path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  sortIcon = (column) => {
    if (column.path !== this.props.sortColumn.path || column.content) return null;

    if (this.props.sortColumn.order === "asc" ) {
      return <i className="fa fa-sort-asc ml-2"></i>;
    }
    return <i className="fa fa-sort-desc ml-2"></i>;
  };

  render() {
    return (
      <thead className="Title">
        <tr>
          {this.props.columns.map((column) => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label}
              {this.sortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
