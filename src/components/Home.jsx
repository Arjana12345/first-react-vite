import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="topnav">
        {/* these are ancher tag */}
        <Link to="/userDetails">UserDetails</Link>
        <Link to="/button">Button</Link>
        <Link to="/form">Form</Link>
        <Link to="/localstorage">Local Storage</Link>
        <Link to="/apicalling">API</Link>
        <Link to="/extra">Extra</Link>
        <Link to="/cart">MyCart</Link>
        <Link to="/item">AddItem</Link>

    </div>
  )
}

export default Home