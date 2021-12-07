import React, { useState } from 'react';

const Search = ( {places} ) => {

     const [ searchTerm, setSearchTerm ] = useState('')

     return (
          <div className="search">
               <div className="search-input">
                    <input type="text" placeholder="search..." onChange={event => {setSearchTerm(event.target.value)}}/>
               </div>
          </div>

     )
}

export default Search;
