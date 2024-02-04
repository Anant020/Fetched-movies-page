import { useState, useEffect } from 'react';
import './App.css';
import DetailsPage from './Detailspage'
import Card from './assets/Components/Card';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Landing from './Landing';

function App() {
 
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/details/:id" element={<DetailsPage />} />
    </Routes>
  </Router>
   
  )
}

export default App;
