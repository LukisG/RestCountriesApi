import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
           <header className='header'>
              <div><Link to="/" className='title'><h1>Rest API App</h1></Link></div>
               <div><h1></h1></div>
           </header>
        </>
    )
}

export default Header
