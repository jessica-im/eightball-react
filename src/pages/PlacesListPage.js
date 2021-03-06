import React, { useState, useEffect } from 'react'
import Place from '../components/Place'
import axios from 'axios'

import AddPlaceLink from '../components/AddPlaceLink'

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

     useEffect(() => {
          getPlaces()
     }, [])

     return (
          <div className="content-container">
               <div className="search-container">
                    <div className="eightball-container">
                         <img className="eightball" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/pool-8-ball_1f3b1.png" alt="eightball" />
                    </div>
                    <input className="search" type="text" placeholder="search places..." onChange={ (event) => {setSearchTerm(event.target.value)}}/>
                    <div>
                         <img className="eightball" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/pool-8-ball_1f3b1.png" alt="eightball" />
                    </div>
               </div>
               <h2 className="place-list-header">places</h2>
               <div className="place-list-container">
                    <div className="place-list">
                         {places.filter((place) => {
                              if (searchTerm === "") {
                                   return place
                              } else if (place.locationName.toLowerCase().includes(searchTerm.toLowerCase())) {
                                   return place
                              } else if (place.locationCity.toLowerCase().includes(searchTerm.toLowerCase())) {
                                   return place
                              }
                         }).map((place) => (
                              <div className="place-card" key={place.id}>
                                   <Place key={place.id} place={place} />
                              </div>
                         ))}
                    </div>
               </div>
               <div>
                    <AddPlaceLink getPlaces={getPlaces} />
               </div>
          </div>
     )
}

export default PlacesListPage;
