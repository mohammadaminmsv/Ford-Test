import React, {useState} from 'react'
import Logo from '../assets/ford-logo.png'
import { Link } from 'react-router-dom'
import Contact from '../Pages/Contact'
import About from '../Pages/Contact'
import Menu from '../Pages/Contact'
import Home from '../Pages/Home'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../Styles/Navbar.css'


const Navbar = () => {
    
  const [OpenLinks, setOpenLinks] = useState(false)


  const toggleNavbar = () => {
    setOpenLinks(!OpenLinks)
  }

  
  return (
    <div className='navbar'>
    <div className='leftSide' id={OpenLinks ? "open" : "close"}>
        <img src={Logo} />
           <div className='hiddenLinks'>
            <Link to="/Home">Home</Link><br />
            <Link to="/Menu">Menu</Link><br />
            <Link to="/About">About</Link><br />
            <Link to="/Contact">Contact</Link>
           </div>
     </div>
    <div className='rightSide'>
    <Link to="/Home">Home</Link><br />
    <Link to="/Menu">Menu</Link><br />
    <Link to="/About">About</Link><br />
    <Link to="/Contact">Contact</Link>
    <button onClick={toggleNavbar}>
    <ReorderIcon />
    </button>
    </div>
    </div>
  )
}

export default Navbar
