import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../Pages/Menu'
import Pic from '../assets/Home-pic.png'
import Banner from '../assets/Home.jpg'
import '../Styles/Home.css'

const Home = () => {
  return (
    
    <div className='home'>
     <div className='headerContainer'>
     <h1>Amin's Ford</h1>
       <p>Ford Shelby is amazing</p>
          <Link to="/Menu">
         <button>ORDER CAR</button>
         </Link>
     </div>
    </div>
  )
}

export default Home
