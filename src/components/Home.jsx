import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        {/* these are ancher tag */}
        <Link to="/userDetails" className="nav">UserDetails</Link>
        <Link to="/button" className="nav">Button</Link>
        <Link to="/form" className="nav">Form</Link>
        <Link to="/localstorage" className="nav">Local Storage</Link>
        <Link to="/apicalling" className="nav">API</Link>
        <Link to="/extra" className="nav">Extra</Link>

    </div>
  )
}

export default Home