import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li ><Link to="/home">Home</Link></li>
          <li ><Link to="/about">About</Link></li>
          <li ><Link to="/service">Service</Link></li>
          <li><a href="/home">My Home</a></li>
        </ul>

      </nav>
    </div>
  )
}
