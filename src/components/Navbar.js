import React, {useState, useEffect} from 'react';
import './Navbar.css';
import { useLocation } from 'react-router-dom';

function Navbar() {
  
  let location = useLocation();
  const [pageName, setPageName] = useState('');

  useEffect(() => {
    let page = location.pathname.slice(1)
    console.log(location)
    setPageName(page)
  }, [pageName]);


  return (
   <>
      <nav  className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex justify-content-start align-items-center ">
          <a className="navbar-brand navbar-heading" href="/">ASD</a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto custom-navbar-list">
              <li className="nav-item">
                <a className={pageName === ''? 'nav-link active' : 'nav-link'} aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item custom-margin">
                <a className={pageName === 'About'? 'nav-link active' : 'nav-link'} href="/About">About</a>
              </li>
              <li className="nav-item custom-margin">
                <a className={pageName === 'Contact'? 'nav-link active' : 'nav-link'} href="/Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
   </>
  );
}

export default Navbar;