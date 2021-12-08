import './App.css';
import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header'
import PlacesListPage from './pages/PlacesListPage'
import PlacePage from './pages/PlacePage'
import AddPlace from './components/AddPlace'


const App = () => {

     return (
          <Router>
          <div>
               <div>
                    <Header />
               </div>
               <div>
                    <Routes>
                         <Route path="/" exact element={<PlacesListPage />} />
                         <Route path="/place/:id" exact element={<PlacePage />} />
                         <Route path="/new" exact element={<AddPlace />} />
                    </Routes>
               </div>
          </div>
          </Router>
     );
}

export default App;
