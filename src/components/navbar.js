import React from 'react'
import '../styles/navbar.css'
export default function NavBar() {
  return (
    <div className='navbar'>
        <h1>MovieApp</h1>
        <input className='searchBar' type="text" placeholder='search...' />
    </div>
  )
}
