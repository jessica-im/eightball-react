import './App.css';

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import PlacesListPage from './pages/PlacesListPage'

const App = () => {


     return (
        <div>
               <Header />
               <PlacesListPage />
        </div>
     );
}

export default App;
