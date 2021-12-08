import React, { useState, useEffect } from 'react';
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
               // console.log(place)
          )
          .catch((error) => console.log(error))
     }

     const handleUpdate = (editPlace) => {
          axios.put(`https://pocket-eightball.herokuapp.com/api/places/${id}`, editPlace)
          .then((response) => {
               getPlace()
          })
     }

     const handleDelete = (event) => {
          axios.delete(`https://pocket-eightball.herokuapp.com/api/places/` + event.target.value)
          .then((response) => {
               // getPlaces()
               window.location.href = "/";
          })
     }

     useEffect(() => {
          getPlace()
     }, [])

     return(
          <div className="place-page">
               <div className="back-link-container">
                    <Link to="/" className="back-link">
                         <h3>&#x2B05;</h3>
                    </Link>
                    <button className="delete-button" onClick={handleDelete} value={place.id}>delete</button>
               </div>
               <div className="place-details-container">
                    <table className="place-detail-table">
                         <tr>
                              <td className="place-title">where:</td>
                              <td>{place.locationName}</td>
                         </tr>
                         <tr>
                              <td className="place-title">address:</td>
                              <td className="place-detail">{place.locationAddress}</td>
                         </tr>
                         <tr>
                              <td className="place-title">city / state:</td>
                              <td className="place-detail">{place.locationCity} / {place.locationState}</td>
                         </tr>
                         <tr>
                              <td className="place-title">table size:</td>
                              <td className="place-detail">{place.tableSize}</td>
                         </tr>
                         <tr>
                              <td className="place-title">table brand:</td>
                              <td className="place-detail">{place.tableBrand}</td>
                         </tr>
                         <tr>
                              <td className="place-title">table condition:</td>
                              <td className="place-detail">{place.tableCondition}</td>
                         </tr>
                         <tr>
                              <td className="place-title">cue condition:</td>
                              <td className="place-detail">{place.cueCondition}</td>
                         </tr>
                         <tr>
                              <td className="place-title">vibe:</td>
                              <td className="place-detail">{place.vibe}</td>
                         </tr>
                         <tr>
                              <td className="place-title">new friends:</td>
                              <td className="place-detail">{place.newFriends}</td>
                         </tr>
                    </table>
               </div>
               <EditPlace place={place} handleUpdate={handleUpdate} />
          </div>
     )
}

export default PlacePage;
