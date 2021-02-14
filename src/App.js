import {BrowserRouter, Route } from 'react-router-dom';

import Main from './Main';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      {/* <div className="menu">
        <NavLink to="/uniswap-guide">
          <button>Uniswap Guide</button>
        </NavLink>
      </div> */}
        <Route exact path="/" component={Main} />
      </div>
    </BrowserRouter>
  );
}

export default App;
