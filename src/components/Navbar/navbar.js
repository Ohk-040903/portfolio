import React, {useState} from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.jpg';
import contactme from '../../assets/contactimg.jpg';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-scroll';
const Navbar = () => {
  const [showMenu, setShowMenu]= useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
    <div className='desktopmenu'>
    <Link activeClass='active' to="intro" className='desktopmenulistitem' spy={true} smooth={true} duration={500} offset={-100}>
          Home
        </Link>
        <Link activeClass='active' to="skills" className='desktopmenulistitem' spy={true} smooth={true} duration={500} offset={-50}>
          About
        </Link>
        <Link activeClass='active' to="works" className='desktopmenulistitem' spy={true} smooth={true} duration={500} offset={-50}>
          Skills
        </Link>
        <Link activeClass='active' to="experience" className='desktopmenulistitem' spy={true} smooth={true} duration={500} offset={-50}>
          Experience
        </Link>
    </div>
    <button className='desktopmenubtn' onClick={()=>{
      document.getElementById('contact').scrollIntoView({behavior:'smooth',block: "end", inline: "nearest"})
    }}>
        <img src={contactme} alt='contact' className='desktopmenuimg'/>Contact Me</button>

        <img src={menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
    <div className='navMenu'style={{display: showMenu?'flex':'none'}}>
    <Link activeClass='active' to="intro" className='listitem' spy={true} smooth={true} duration={500} offset={-100} onClick={()=>setShowMenu(false)}>
          Home
        </Link>
        <Link activeClass='active' to="skills" className='listitem' spy={true} smooth={true} duration={500} offset={-50} onClick={()=>setShowMenu(false)}>
          About
        </Link>
        <Link activeClass='active' to="works" className='listitem' spy={true} smooth={true} duration={500} offset={-50} onClick={()=>setShowMenu(false)}>
          Skills
        </Link>
        <Link activeClass='active' to="experience" className='listitem' spy={true} smooth={true} duration={500} offset={-50} onClick={()=>setShowMenu(false)}>
          Experience
        </Link>
        <Link activeClass='active' to="contact" className='listitem' spy={true} smooth={true} duration={500} offset={-100} onClick={()=>setShowMenu(false)}>
          Contact
        </Link>
    </div>
    </nav>

  )
}

export default Navbar