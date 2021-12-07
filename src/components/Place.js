import React from 'react'
import { Link } from 'react-router-dom';

const Place = ( { place, handleDelete } ) => {

     return (
          <div>
               <Link to={`/place/${place.id}`} className="place-link">
                    <h3>{place.locationName}</h3>
               </Link>
               <h4>{place.locationCity}</h4>
          </div>

     )
}

export default Place;
