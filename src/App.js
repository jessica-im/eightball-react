import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import PlacesListPage from './pages/PlacesListPage'
import PlacePage from './pages/PlacePage'


const App = () => {


     return (
          <Router>
          <div>
               <Header />
               <Routes>
                    <Route path="/" exact element={<PlacesListPage />} />
                    <Route path="/place/:id" element={<PlacePage />} />
               </Routes>
          </div>

          </Router>
     );
}

export default App;
