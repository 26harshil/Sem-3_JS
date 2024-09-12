import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { UseState } from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Outlet, Route, Routes, Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const student = [{
  id: 1,
  name: 'John Doe',
  age: 20,
  course: 'React',
  imgpath: "https://wp.en.aleteia.org/wp-content/uploads/sites/2/2017/05/web3-planet-earth-space-nasa-space-stars-sun-shutterstock_526255060-shutterstock.jpg"
}, {
  id: 2,
  name: 'Jane Doe',
  age: 22,
  course: 'Python',
  imgpath: "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp"
}, {
  id: 3,
  name: 'Michael Doe',
  age: 21,
  course: 'JavaScript',
  imgpath: "https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg"
}
]



function Layout() {
  return (
    <div className="layout-container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="main-content">
        <div className="sidebar">
          Sidebar
        </div>
        <div className="content border border-2">
          <Outlet />
        </div>
      </div>

      <footer className="footer card text-center">
        <div className="card-header">
          MyFirst
        </div>
        <div className="card-body">
          <h5 className="card-title">Copyright</h5>
          <p className="card-text">if you want to copy this templete give  <strong>500$ per second</strong> as per you use for once opne only  and want to save give me  <strong>654654654664545654$ WORTH BITCOIN</strong> </p>
        </div>
        <div className="card-footer text-body-secondary">
          @COPYRIGHT
        </div>
      </footer>
    </div>
  );
}



function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const incrementIndex = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % student.length);
  };

  const { id, name, age, course, imgpath } = student[currentIndex];

  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={imgpath} className="img-fluid rounded-start" alt="Student" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">ID: {id}</h1>
            <p className="card-text">
              Name: {name}<br />
              Age: {age}<br />
              Course: {course}
            </p>
            <p className="card-text">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </p>
            <button onClick={incrementIndex} className="btn btn-primary">
              Next Student
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
