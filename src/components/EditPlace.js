import React, { useState, useEffect } from 'react';

const EditPlace = ({ place, handleUpdate }) => {

     const [ editPlace, setEditPlace ] = useState(place)

     const handleChange = (event) => {
          setEditPlace({ ...editPlace, [event.target.name]: event.target.value })
     }

     const handleSubmit = (event) => {
          event.preventDefault()
          handleUpdate(editPlace)
     }

     useEffect(() => {
          setEditPlace(place);
     }, [place]); //dependency array,

     return(
          <div className="edit-form-container">
               <details>
                    <summary className="edit-summary">edit place</summary>
                    <form className="edit-form" onSubmit={handleSubmit}>
                         <label htmlFor="locationName">Place Name: </label>
                         <input className="edit-field" type="text" name="locationName" onChange={handleChange} value={editPlace.locationName} />
                         <label htmlFor="locationAddress">Address: </label>
                         <input className="edit-field" type="text" name="locationAddress" onChange={handleChange} value={editPlace.locationAddress} />
                         <label htmlFor="locationCity">City: </label>
                         <input className="edit-field" type="text" name="locationCity" onChange={handleChange} value={editPlace.locationCity} />
                         <label htmlFor="locationState">State: </label>
                         <input className="edit-field" type="text" name="locationState" onChange={handleChange} value={editPlace.locationState} />
                         <label htmlFor="tableSize">Table Size: </label>
                         <input className="edit-field" type="text" name="tableSize" onChange={handleChange} value={editPlace.tableSize} />
                         <label htmlFor="tableBrand">Table Brand: </label>
                         <input className="edit-field" type="text" name="tableBrand" onChange={handleChange} value={editPlace.tableBrand} />
                         <label htmlFor="tableCondition">Table Condition: </label>
                         <input className="edit-field" type="text" name="tableCondition" onChange={handleChange} value={editPlace.tableCondition} />
                         <label htmlFor="cueCondition">Cue Condition: </label>
                         <input className="edit-field" type="text" name="cueCondition" onChange={handleChange} value={editPlace.cueCondition} />
                         <label htmlFor="vibe">Vibe: </label>
                         <input className="edit-field" type="text" name="vibe" onChange={handleChange} value={editPlace.vibe} />
                         <label htmlFor="newFriends">New Friends: </label>
                         <input className="edit-field" type="text" name="newFriends" onChange={handleChange} value={editPlace.newFriends} />
                         <input type="submit" value="edit place" />
                    </form>
               </details>
          </div>
     )
}

export default EditPlace;
