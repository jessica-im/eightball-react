import React from 'react'
import { Link } from 'react-router-dom';

const AddPlaceLink = () => {

     return (
          <div>
               <Link to="/place/new">Add New Place</Link>
          </div>

     )
}

export default AddPlaceLink;
