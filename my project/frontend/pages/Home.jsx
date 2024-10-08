import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:2699/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  const gradientStyle = {
    height: '100%',
    background: 'linear-gradient(135deg, #91B187, #4AAFD5, #E7A339)',
  
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '2rem',
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen" style={gradientStyle} >
      <div className="flex justify-center items-center gap-x-4 mb-6">
        <button
          className="bg-sky-300 hover:bg-sky-600 transition duration-300 ease-in-out px-6 py-2 rounded-lg shadow-lg transform hover:scale-105"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 transition duration-300 ease-in-out px-6 py-2 rounded-lg shadow-lg transform hover:scale-105"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-semibold text-gray-800 ml-5">
          Books List
        </h1>
        <Link
          to="/books/create"
          className="flex items-center space-x-2 p-2 bg-sky-300 hover:bg-sky-600 text-white rounded-lg transition duration-300 ease-in-out"
        >
          <div className="text-lg font-semibold">Add New Book</div>
          <MdOutlineAddBox className="text-sky-800 text-5xl hover:text-sky-600 transition duration-300 ease-in-out" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
