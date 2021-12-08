import React from 'react'
import { Link } from 'react-router-dom';


const AddPlaceLink = () => {

     return (

          <div className="add-link-container">
               <Link to="/new" className="add-link footer">+</Link>
          </div>

     )
}

export default AddPlaceLink;
