import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import {
  HomePage
} 
from './View/index';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/home' element={[<HomePage></HomePage>]}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;