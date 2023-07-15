import React,{useState} from 'react'
import './Navbar.css'
import { Link,useNavigate } from 'react-router-dom';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

function Navbar() {
  const [togglemenu,setTogglemenu]=useState(false);
  const navigate=useNavigate();
  
  const handleClick = ()=>{
    navigate('/result')
  }

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
      <h1>AirData</h1>
      </div>

      <ul className='app__navbar-links'>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/work'>work</a></li>
        <li><a href='/careers'>careers</a></li>
        <li><a href='/contact'>contact</a></li>
      </ul>
      
      <div className='app__navbar-btn'>
      <button onClick={handleClick}>
        Get User
      </button>
      </div>

      <div className='app__navbar-smallscreen'>
     <MoreVertSharpIcon className='three-dots' color="#fff" onClick={()=>setTogglemenu(true)} />
      
      {togglemenu && (
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
      <CloseSharpIcon className="overlay__close" onClick={()=> setTogglemenu(false)} />
      <ul className='app__navbar-smallscreen-links'>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/menu">Menu</a></li>
      <li><a href="/awards">Awards</a></li>
      <li><a href="/contact">Contact</a></li>
      </ul> 
      </div>
      )} 
      </div>

    </nav>
  )
}

export default Navbar