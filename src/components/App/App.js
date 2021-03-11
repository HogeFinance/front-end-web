import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from 'components/pages/HomePage/HomePage';

import './App.css';

const App = () => (
    <BrowserRouter>
        <div className="App">
            {/* <div className="menu">
          <NavLink to="/uniswap-guide">
            <button>Uniswap Guide</button>
          </NavLink>
        </div> */}
            <Route exact path="/" component={HomePage} />
        </div>
    </BrowserRouter>
);

export default App;
