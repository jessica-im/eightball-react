import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios'

const PlacePage = () => {

     const {id} = useParams()
     let [ place, setPlace ] = useState(null)

     const getPlace = () => {
          axios.get(`https://pocket-eightball.herokuapp.com/api/places/${id}`)
          .then(
               (response) => setPlace(response.data),
               (error) => console.log(error),
               console.log(place)
          )
          .catch((error) => console.log(error))
     }

     useEffect(() => {
          getPlace()
     }, [])

     return(
          <div>
               <p>{place?.locationName}</p>
          </div>
     )
}

export default PlacePage;
