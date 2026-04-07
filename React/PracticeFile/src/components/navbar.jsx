import React from 'react'
import {Link} from 'react-router-dom'
const navbar = () => {

  return (
    <div>
        <nav>
        <Link to="/home"><li>home</li></Link>
        <Link to="/about"><li>about</li></Link>
        <Link to="/contact"><li>contact</li></Link>
        </nav>

    </div>

  )
}

export default navbar