import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import BookSingleCard from './BookSingleCard';

const BooksCard = ({ books }) => {

  return (
    <div className="container">
      <div className="row mt-5 pt-5 ">
        {books.map((item) => (
          <div className="col-6 col-lg-4 mb-4 mt-5 " key={item._id}> {/* Bootstrap classes for responsive layout */}
            <BookSingleCard book={item}  />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksCard;
