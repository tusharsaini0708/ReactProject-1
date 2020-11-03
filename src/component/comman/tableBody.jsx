import React, { Component } from "react";
import _ from "lodash";
import {Link} from "react-router-dom";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };
  render() {
    const { data, columns } = this.props;
    // data is for each movie and columns is for each column in movie
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => {
              if (column.path === "title") {
                return (
                  <td key={this.createKey(item,column)}>
                  <Link
                    to={`/movieDetails/${item._id}`} // Most Important line . Note that their is back tick(`) not (')
                    key={this.createKey(item, column)}
                  >
                    {this.renderCell(item, column)}
                  </Link>
                  </td>
                );
                } else {
                return (
                  <td key={this.createKey(item, column)}>
                    {this.renderCell(item, column)}
                  </td>
                );
              }
            })}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
