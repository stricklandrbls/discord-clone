import React from 'react';
import { BrowserRouter as Router, Switch, Routes, Route, Redirect } from 'react-router-dom';

import RegisterPage from "./authPages/registerPage/registerPage"
import LoginPage from "./authPages/loginPage/loginPage"
import './App.css';
import Dashboard from './dashboard/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
