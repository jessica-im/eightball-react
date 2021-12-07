import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'
import EditPlace from '../components/EditPlace'

const PlacePage = () => {

     const {id} = useParams()
     const [ place, setPlace ] = useState('')

     const getPlace = () => {
          axios.get(`https://pocket-eightball.herokuapp.com/api/places/${id}`)
          .then(
               (response) => setPlace(response.data),
               (error) => console.log(error),
               console.log(place)
          )
          .catch((error) => console.log(error))
     }

     const handleUpdate = (editPlace) => {
          axios.put(`https://pocket-eightball.herokuapp.com/api/places/${id}`, editPlace)
          .then((response) => {
               getPlace()
          })
     }


     useEffect(() => {
          getPlace()
     }, [])

     return(
          <div>
               <Link to="/">
                    <h3>Back</h3>
               </Link>
               <p>{place.locationName}</p>
               <p>{place.locationAddress}</p>
               <p>{place.locationCity}</p>
               <p>{place.locationState}</p>
               <p>{place.tableSize}</p>
               <p>{place.tableBrand}</p>
               <p>{place.tableCondition}</p>
               <p>{place.cueCondition}</p>
               <p>{place.hasChalk}</p>
               <p>{place.vibe}</p>
               <p>{place.newFriends}</p>
               <EditPlace place={place} handleUpdate={handleUpdate} />
          </div>
     )
}

export default PlacePage;
