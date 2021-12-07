import React, {useState, useEffect} from 'react'
import axios from 'axios';

const AddPlace = () => {

     // let [ newPlace, setNewPlace ] = useState('')
     const [ emptyPlace, setEmptyPlace ] = useState({
          locationName: ""
          })
     const [ newPlace, setNewPlace ] = useState(emptyPlace)

     const handleCreate = (addPlace) => {
          axios.post('https://pocket-eightball.herokuapp.com/api/places', addPlace)
          .then((response) => {
               getPlaces()
          })
     }

     const handleNewChange = (event) => {
          setNewPlace({ ...newPlace, [event.target.name]: event.target.value })
     }

     const handleNewPlaceSubmit = (event) => {
          event.preventDefault()
          handleCreate(newPlace)
     }

     useEffect(() => {
          setNewPlace();
     }, []); //dependency array,


     return (
          <div>
               <h2>Create a Todo</h2>
               <form onSubmit={handleNewPlaceSubmit}>
                    <label htmlFor="locationName">Place Name: </label>
                    <input type="text" name="locationName" onChange={handleNewChange} value={newPlace.locationName} />
                    <label htmlFor="locationAddress">Address: </label>
                    <input type="text" name="locationAddress" onChange={handleNewChange} value={newPlace.locationAddress} />
                    <label htmlFor="locationCity">City: </label>
                    <input type="text" name="locationCity" onChange={handleNewChange} value={newPlace.locationCity} />
                    <label htmlFor="locationState">State: </label>
                    <input type="text" name="locationState" onChange={handleNewChange} value={newPlace.locationState} />
                    <label htmlFor="tableSize">Table Size: </label>
                    <input type="text" name="tableSize" onChange={handleNewChange} value={newPlace.tableSize} />
                    <label htmlFor="tableBrand">Table Brand: </label>
                    <input type="text" name="tableBrand" onChange={handleNewChange} value={newPlace.tableBrand} />
                    <label htmlFor="tableCondition">Table Condition: </label>
                    <input type="text" name="tableCondition" onChange={handleNewChange} value={newPlace.tableCondition} />
                    <label htmlFor="cueCondition">Cue Condition: </label>
                    <input type="text" name="cueCondition" onChange={handleNewChange} value={newPlace.cueCondition} />
                    <label htmlFor="hasChalk">Has Chalk: </label>
                    <input type="checkbox" name="hasChalk" onChange={handleNewChange} value={newPlace.locationName} />
                    <label htmlFor="vibe">Vibe: </label>
                    <input type="text" name="vibe" onChange={handleNewChange} value={newPlace.vibe} />
                    <label htmlFor="newFriends">New Friends: </label>
                    <input type="text" name="newFriends" onChange={handleNewChange} value={newPlace.newFriends} />
                    <input type="submit" value="edit place" />
               </form>
          </div>

     )
}

export default AddPlace;
