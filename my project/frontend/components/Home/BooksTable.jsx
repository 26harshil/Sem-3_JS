import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
<div className="container mt-4">
  <table className="table table-striped table-bordered">
    <thead style={{ backgroundColor: '#0077BE' }}> {/* Ocean Blue */}
      <tr>
        <th className="text-center text-white">No</th>
        <th className="text-center text-white">Image</th>
        <th className="text-center text-white">Title</th>
        <th className="text-center text-white">Author</th>
        <th className="text-center text-white">Publish Year</th>
        <th className="text-center text-white">Operations</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book, index) => (
        <tr 
          key={book._id} 
          style={{ 
            background: index % 2 === 0 
              ? 'linear-gradient(135deg, #EEBD89 0%, #ffffff 100%)' 
              : 'linear-gradient(135deg, #D13ABD 0%, #ffffff 100%)'
          }}
        >
          <td className="text-center">{index + 1}</td>
          <td className="text-center">
            <img
              src={book.imgpath}
              alt={book.title}
              width="50"
              height="50"
              className="rounded"
            />
          </td>
          <td className="text-center">{book.title}</td>
          <td className="text-center">{book.author}</td>
          <td className="text-center">{book.publishYear}</td>
          <td className="text-center">
            <div className="d-flex justify-content-center gap-3">
              <Link to={`/books/details/${book._id}`}>
                <BsInfoCircle className="text-success" />
              </Link>
              <Link to={`/books/edit/${book._id}`}>
                <AiOutlineEdit className="text-warning" />
              </Link>
              <Link to={`/books/delete/${book._id}`}>
                <MdOutlineDelete className="text-danger" />
              </Link>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default BooksTable;
