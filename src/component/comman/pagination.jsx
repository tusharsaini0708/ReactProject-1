import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

class Pagination extends Component {
  render() {
    const { totalItems, pageSize, currentPage, onPageChange } = this.props;
    const pageCount = Math.ceil(totalItems / pageSize);

    if (pageCount === 1) return null;
    const pageArray = _.range(1, pageCount + 1); // It's a array with number [1,2.....pageCount]
    return (
      <nav>
        <ul className="pagination">
          {pageArray.map((page) => (
            <li
              key={page}
              className={
                currentPage === page ? "page-item active" : "page-item"
              }
            >
              <a onClick={() => onPageChange(page)} className="page-link">
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
// we use this thing to avoid bug .If type doesn't match it will throw a warning in console
Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
