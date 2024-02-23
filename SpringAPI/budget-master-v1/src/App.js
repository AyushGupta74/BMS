import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Navigation/Home';
import Navigation from './Navigation/Navigation';
import Signup from './Navigation/Signup';
import Signin from './Navigation/Signin';
import Contactus from './Navigation/Contactus';
import Aboutus from './Navigation/Aboutus';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route exact index element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 