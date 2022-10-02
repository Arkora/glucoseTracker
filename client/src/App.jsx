import React from 'react';
import Home from './pages/Home'
import Admin from './pages/Admin'
import User from './pages/User'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home/>} />      
      <Route path='/user' element={<User />} />
      <Route path='/admin' element={<Admin />} />
      
    </Routes>
  </Router>
  );
}

export default App;
