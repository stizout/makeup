import React, { useState } from 'react';
import './App.css'
import Home from './views/Home';

function App() {
  const [visible, setVisibility ] = useState(false);
  return (
    <div className="App">
      <header>
        <div className="menu-container" onMouseLeave={() => setVisibility(false)}>
          <i class="fas fa-bars menu-font" onMouseEnter={() => setVisibility(true)}></i>
          <div className={visible ? 'navbar-container' : ''}>
          {visible ? <ul>
              <li>thing</li>
              <li>thing</li>
              <li>thing</li>
              <li>thing</li>
            </ul> : null}
          </div>
        </div>
      </header>
      <Home />
      <footer>
        this is a giant footer
      </footer>
    </div>
  );
}

export default App;
