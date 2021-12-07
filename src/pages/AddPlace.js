import React from 'react'
import { Link } from 'react-router-dom';

const AddPlace = () => {

     return (
          <div>
               <h2>Create a Todo</h2>
                    <form>
                         Description: <input type="text"/><br/>
                         Is Complete: <input type="checkbox"/><br/>
                         <input type="submit" value="Create To Do"/>
                    </form>
          </div>

     )
}

export default AddPlace;
