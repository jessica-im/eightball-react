import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'

const EditPlace = ({ place, handleUpdate, handleChange, handleSubmit }) => {

     const [ editplace, setEditPlace ] = useState(place)

     return(
          <>
               <details>
                    <summary>edit place</summary>
                    <form onSubmit={handleSubmit}>
                         <label htmlFor="locationName">Place Name: </label>
                         <input type="text" name="locationName" onChange={handleChange} value={place.locationName} />
                         <label htmlFor="locationAddress">Address: </label>
                         <input type="text" name="locationAddress" onChange={handleChange} value={place.locationAddress} />
                         <label htmlFor="locationCity">City: </label>
                         <input type="text" name="locationCity" onChange={handleChange} value={place.locationCity} />
                         <label htmlFor="locationState">State: </label>
                         <input type="text" name="locationState" onChange={handleChange} value={place.locationState} />
                         <label htmlFor="tableSize">Table Size: </label>
                         <input type="text" name="tableSize" onChange={handleChange} value={place.tableSize} />
                         <label htmlFor="tableBrand">Table Brand: </label>
                         <input type="text" name="tableBrand" onChange={handleChange} value={place.tableBrand} />
                         <label htmlFor="tableCondition">Table Condition: </label>
                         <input type="text" name="tableCondition" onChange={handleChange} value={place.tableCondition} />
                         <label htmlFor="cueCondition">Cue Condition: </label>
                         <input type="text" name="cueCondition" onChange={handleChange} value={place.cueCondition} />
                         <label htmlFor="hasChalk">Has Chalk: </label>
                         <input type="checkbox" name="hasChalk" onChange={handleChange} value={place.locationName} />
                         <label htmlFor="vibe">Vibe: </label>
                         <input type="text" name="vibe" onChange={handleChange} value={place.vibe} />
                         <label htmlFor="newFriends">New Friends: </label>
                         <input type="text" name="newFriends" onChange={handleChange} value={place.newFriends} />
                         <input type="submit" value="edit place" />
                    </form>
               </details>
          </>
     )
}

export default EditPlace;
