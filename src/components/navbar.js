import React from 'react';
import '../styles/navbar.css';
export default function NavBar({inputName,setInputName,search}) {
  const findMovie = () => {
    search();
  }
  return (
    <div className='navbar'>
        <h1>MovieSuggestion</h1>
        <div className='searchDiv'>
          <input 
              className='searchBar' 
              onKeyDown={search}
              onChange={(e)=>setInputName(e.target.value)}
              type="text" 
              placeholder='Search...' 
          />
          {/* <button onClick={findMovie}>Search</button> */}
        </div>
    </div>
  )
}
