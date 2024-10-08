import { Link } from "react-router-dom";
import { BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import BookModal from "./BookModal";

const BookSingleCard = ({ book, gradient }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="card mb-4 book-card gradient-card fixed-card-size">
    <div className="position-absolute top-0 end-0 bg-danger text-white px-3 py-1 rounded-bottom-left">
      {book.publishYear}
    </div>
    <img src={book.imgpath} className="card-img-top fixed-img-size" alt={book.title} />
    <div className="card-body">
      <h5 className="card-title text-dark">{book.title}</h5>
      <p className="card-text text-muted">{book.author}</p>
      <div className="d-flex justify-content-around mt-3">
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="fs-1 text-success" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="fs-1 text-warning" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="fs-1 text-danger" />
        </Link>
      </div>
    </div>
  
    {showModal && (
      <BookModal book={book} onClose={() => setShowModal(false)} />
    )}
  </div>
  
  );
};

export default BookSingleCard;




