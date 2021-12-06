import React from 'react'
import { Link } from 'react-router-dom';

const Place = ( {place} ) => {

     return (
          <Link to={`/place/${place.id}`}>
               <h3>{place.locationName}</h3>
          </Link>
     )
}

export default Place;
