import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./comman/pagination";
import { paginate } from "../utilities/paginate";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./comman/listGroup";
import { filterGenre } from "../utilities/filter";
import MovieTable from "./movieTable";
import _ from "lodash";

class Movie extends Component {
  state = {
    movie: getMovies(),
    genre: getGenres(),
    pageSize: 4,
    currentPage: 1,
    currentGenre: "All Genres",
    sortColumn: { path: "title", order: "asc" },
  };

  handleDelete = (id) => {
    // we use arrow function to bind "this" keyword
    // we don't use splice method because it is creating a bug
    const movie = this.state.movie.filter((c) => c._id !== id);
    this.setState({ movie });
  };
  handleLike = (currentMovie) => {
    currentMovie.liked = !currentMovie.liked;
    this.setState({ movie: this.state.movie });
  };
  // it's a better practice to use arrow function.

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  onPageChange = (page) => {
    this.setState({ currentPage: page });
  };

  onGenreChange = (genre) => {
    this.setState({ currentGenre: genre });
    this.setState({ currentPage: 1 });
  };

  render() {
    const { pageSize, currentPage, currentGenre, sortColumn } = this.state;
    const filterdMovie = filterGenre(this.state.movie, currentGenre);

    const sorted = _.orderBy(
      filterdMovie,
      [sortColumn.path],
      [sortColumn.order]
    );

    const paginateMovie = paginate(sorted, currentPage, pageSize);

    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <ListGroup
              genre={this.state.genre}
              currentGenre={currentGenre}
              onGenreChange={this.onGenreChange}
            />
          </div>

          <div className="col-9">
            <h3>There are {this.state.movie.length} Movies in Database</h3>

            <MovieTable
              paginateMovie={paginateMovie}
              onDelete={this.handleDelete}
              onLike={this.handleLike}
              onSort={this.handleSort}
              sortColumn={sortColumn}
            />
            <Pagination
              totalItems={filterdMovie.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.onPageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
