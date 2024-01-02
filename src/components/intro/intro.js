import React from 'react';
import './intro.css';
import bg from '../../assets/profileimg.png';
import Btnimg from '../../assets/btnimg.jpg';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-scroll';
const Intro = () => {
  return (
    <section id='intro' className='intro'>
        <div className='introcontent'>
            <span className='hello'>Hello,</span>
            <span className='introtext'>I am <span className='introname'>Ohm</span>
            <br/>Website Designer</span> 
            <p className='intropara'>I am a skilled web designer with experience in Frontend and Backend development.</p>
            <Link to="" className='' smooth={true} duration={500}>
                <button className='btn' onClick={()=>{
                        document.getElementById('contact').scrollIntoView({behavior:'smooth',block: "end", inline: "nearest"})
                               }}>
            <img src={Btnimg} alt='Hire'className='btnimg'/>Hire me</button>
                </Link>
        </div>
        <img src={bg} alt='bg' className='bg'/>
    </section>
  )
}

export default Intro