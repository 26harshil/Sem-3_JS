import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [imgpath, setImgPath] = useState(''); // State for image path
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:2699/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        setImgPath(response.data.imgpath); // Set the image path from the response
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check the console');
        console.log(error);
      });
  }, [id]); // Add id as a dependency

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
      imgpath, // Include the image path in the data
    };
    setLoading(true);
    axios
      .put(`http://localhost:2699/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className="p-6 bg-gradient-to-r from-[#91B187] to-[#4AAFD5] min-h-screen flex flex-col items-center">
  <BackButton />
  <h1 className="text-4xl font-bold text-white my-6">Edit Book</h1>
  {loading ? <Spinner /> : null}
  <div className="flex flex-col border-2 border-sky-400 rounded-2xl shadow-lg w-full max-w-lg p-6 bg-white">
    {/* Title Input */}
    <div className="my-4">
      <label className="text-xl mr-4 text-gray-700 font-semibold">Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border-2 border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-sky-400 transition duration-300"
        placeholder="Enter book title"
      />
    </div>

    {/* Author Input */}
    <div className="my-4">
      <label className="text-xl mr-4 text-gray-700 font-semibold">Author</label>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="border-2 border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-sky-400 transition duration-300"
        placeholder="Enter author's name"
      />
    </div>

    {/* Publish Year Input */}
    <div className="my-4">
      <label className="text-xl mr-4 text-gray-700 font-semibold">Publish Year</label>
      <input
        type="number"
        value={publishYear}
        onChange={(e) => setPublishYear(e.target.value)}
        className="border-2 border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-sky-400 transition duration-300"
        placeholder="Enter publish year"
      />
    </div>

    {/* Image Path Input */}
    <div className="my-4">
      <label className="text-xl mr-4 text-gray-700 font-semibold">Image Path</label>
      <input
        type="text"
        value={imgpath}
        onChange={(e) => setImgPath(e.target.value)}
        className="border-2 border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-sky-400 transition duration-300"
        placeholder="Enter image URL"
      />
    </div>

    {/* Save Button */}
    <button
      className="mt-6 py-2 px-4 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition duration-300"
      onClick={handleEditBook}
    >
      Save
    </button>
  </div>
</div>
  )
}

export default EditBook;
