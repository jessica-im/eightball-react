import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const AddPlace = () => {

     const emptyPlace = {
          locationName: "",
          locationAddress: "",
          locationCity: "",
          locationState: "",
          tableSize: "",
          tableBrand: "",
          tableCondition: "",
          cueCondition: "",
          vibe: "",
          newFriends: "",
     }

     const [ newPlace, setNewPlace ] = useState(emptyPlace)

     const handleNewChange = (event) => {
          setNewPlace({ ...newPlace, [event.target.name]: event.target.value })
     }

     const handleCreate = (addPlace) => {
          axios.post('https://pocket-eightball.herokuapp.com/api/places', addPlace)
          .then((response) => {
               console.log(response)
          })
     }

     const handleNewPlaceSubmit = (event) => {
          event.preventDefault()
          handleCreate(newPlace)
          setNewPlace(emptyPlace)
          window.location.href = "/"
     }

     return (
          <div>
               <div className="back-link-container">
                    <Link to="/" className="back-link">
                         <h3>&#x2B05;</h3>
                    </Link>
               </div>
               <h2>Add New Place</h2>
               <form onSubmit={handleNewPlaceSubmit}>
                    <label htmlFor="locationName">Place Name: </label>
                    <input type="text" name="locationName" onChange={handleNewChange} value={newPlace?.locationName} />
                    <label htmlFor="locationAddress">Address: </label>
                    <input type="text" name="locationAddress" onChange={handleNewChange} value={newPlace?.locationAddress} />
                    <label htmlFor="locationCity">City: </label>
                    <input type="text" name="locationCity" onChange={handleNewChange} value={newPlace?.locationCity} />
                    <label htmlFor="locationState">State: </label>
                    <input type="text" name="locationState" onChange={handleNewChange} value={newPlace?.locationState} />
                    <label htmlFor="tableSize">Table Size: </label>
                    <input type="text" name="tableSize" onChange={handleNewChange} value={newPlace?.tableSize} />
                    <label htmlFor="tableBrand">Table Brand: </label>
                    <input type="text" name="tableBrand" onChange={handleNewChange} value={newPlace?.tableBrand} />
                    <label htmlFor="tableCondition">Table Condition: </label>
                    <input type="text" name="tableCondition" onChange={handleNewChange} value={newPlace?.tableCondition} />
                    <label htmlFor="cueCondition">Cue Condition: </label>
                    <input type="text" name="cueCondition" onChange={handleNewChange} value={newPlace?.cueCondition} />
                    <label htmlFor="vibe">Vibe: </label>
                    <input type="text" name="vibe" onChange={handleNewChange} value={newPlace?.vibe} />
                    <label htmlFor="newFriends">New Friends: </label>
                    <input type="text" name="newFriends" onChange={handleNewChange} value={newPlace?.newFriends} />
                    <input type="submit" value="add place" />
               </form>
          </div>

     )
}

export default AddPlace;
