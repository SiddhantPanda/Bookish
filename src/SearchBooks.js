import React, { Component } from "react";
import { Link } from "react-router-dom";
import Shelf from "./Bookshelves";

// Component to render Search page
class SearchBooks extends Component {
  render() {
    const { filteredBooks, searchBooks, updateOption } = this.props;

    return (
      <div>
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              className="search-books-results"
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => searchBooks(event.target.value)}
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {filteredBooks.map((book) => (
              <Shelf book={book} key={book.id} updateOption={updateOption} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
