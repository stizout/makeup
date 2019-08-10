import React, { useState } from 'react';
import './App.css'
import Home from './views/Home';

function App() {
  const [visible, setVisibility ] = useState(false);
  return (
    <div className="App">
      <header>
        {/* <div className="menu-container" onMouseLeave={() => setVisibility(false)}>
          <i class="fas fa-bars menu-font" onMouseEnter={() => setVisibility(true)}></i>
          <div className='navbar-container'>
          {visible ? <ul>
              <li>thing</li>
              <li>thing</li>
              <li>thing</li>
              <li>thing</li>
            </ul> : null}
          </div>
        </div> */}
        <div className="dropdown-container">
          <i className="fas fa-bars menu-font"></i>
            <ul className="dropdown-content">
              <li>About Us</li>
              <li>Contact</li>
              <li>Pricing</li>
              <li>Classes</li>
            </ul>
        </div>
      </header>
      <Home />
      <footer>
        <div className="footer-social-container">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin-in"></i>
        </div>
        <p>CopyRight Holly Stout</p>
      </footer>
    </div>
  );
}

export default App;
