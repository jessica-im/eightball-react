import React, { useState, useEffect } from 'react'
import Place from '../components/Place'
import axios from 'axios'

const PlacesListPage = () => {

     let [ places, setPlaces ] = useState([])

     const getPlaces = () => {
          axios.get('https://pocket-eightball.herokuapp.com/api/places')
          .then(
               (response) => setPlaces(response.data),
               (error) => console.log(error),
               console.log(places)
          )
          .catch((error) => console.log(error))
     }

     const handleDelete = (event) => {
          axios.delete(`https://pocket-eightball.herokuapp.com/api/places/` + event.target.value)
          .then((response) => {
               getPlaces()
          })
     }

     useEffect(() => {
          getPlaces()
     }, [])

     return (
               <div>
                    <div className="placeList">
                         {places.map((place) => (
                              <Place key={place.id} place={place} />
                         ))}
                    </div>
               </div>
     )
}

export default PlacesListPage;
