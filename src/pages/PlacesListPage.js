import React, { useState, useEffect } from 'react'
import Place from '../components/Place'
import axios from 'axios'

import AddPlaceLink from '../components/AddPlaceLink'
import Search from '../components/Search'

const PlacesListPage = () => {

     let [ places, setPlaces ] = useState([])
     const [ searchTerm, setSearchTerm ] = useState('')

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
               <div>
                    <input type="text" placeholder="search..." onChange={ (event) => {setSearchTerm(event.target.value)}}/>
                    <AddPlaceLink getPlaces={getPlaces} />
               </div>
               <div className="place-list-container">
                    <div className="place-list">
                         <h2 className="place-list-header">places</h2>
                         {places.filter((place) => {
                              if (searchTerm == "") {
                                   return place
                              } else if (place.locationName.toLowerCase().includes(searchTerm.toLowerCase())) {
                                   return place
                              } else if (place.locationCity.toLowerCase().includes(searchTerm.toLowerCase())) {
                                   return place
                              }
                         }).map((place) => (
                              <div className="place-card">
                                   <Place key={place.id} place={place} />
                                   <button className="delete-button" onClick={handleDelete} value={place.id}>delete</button>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     )
}

export default PlacesListPage;
