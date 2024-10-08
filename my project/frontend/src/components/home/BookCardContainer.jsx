import React from "react";
import BookSingleCard from "./BookSingleCard";

const BookCardContainer = ({ books }) => {
  const gradients = [
    "linear-gradient(to right, #ffafbd, #ffc3a0)", // Romance
    "linear-gradient(to right, #00c6ff, #0072ff)", // Science Fiction
    "linear-gradient(to right, #ff6a00, #ee0979)", // Fantasy
  ];

  return (
    <div className="row">
      {books.slice(0, 3).map((book, index) => (
        <div className="col-md-4" key={book._id}>
          <BookSingleCard book={book} gradient={gradients[index]} />
        </div>
      ))}
    </div>
  );
};

export default BookCardContainer;
