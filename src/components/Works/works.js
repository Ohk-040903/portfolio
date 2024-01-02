import './works.css';
import html from '../../assets/htmllogo.png';
import css from '../../assets/csslogo.png';
import javascript from '../../assets/javascript.jpg';
import react from '../../assets/reactjs.jpg';
import nodejs from '../../assets/nodejs.png';
import mysql from '../../assets/mysqlogo.png';
import mongodb from '../../assets/mongodb.jpg';
import cplus from '../../assets/c++logo.png';


const Works = () => {
  return (
    <div id='works' className='works'>
        <h2 className='workstitle'>What I know</h2>
        <span className='worksdescription'>With a versatile tech stack, I excel in front-end development using HTML, CSS, and JavaScript, including React.js and Bootstrap. On the back end, I leverage Node.js, MySQL, and MongoDB. My programming skills in C++ enhance problem-solving. This comprehensive toolkit enables me to craft seamless and visually stunning web solutions.</span>
        <div className='worksimgs'>
          <div className='worksimg'>
            <img src={html} alt='html' className='worksimg'/>
            </div>
          <div className='worksimg'>
            <img src={css} alt='css' className='worksimg'/>
            </div>
          <div className='worksimg'>
            <img src={javascript} alt='javascript' className='worksimg'/>
            </div>
          <div className='worksimg'> 
            <img src={react} alt='react' className='worksimg'/>
            </div>
          <div className='worksimg'>
            <img src={nodejs} alt='nodejs' className='worksimg'/>
            </div>
          <div className='worksimg'>
            <img src={mysql} alt='mysql' className='worksimg'/>
            </div>
          <div className='worksimg'>
            <img src={mongodb} alt='mongodb' className='worksimg'/>
            </div>
          <div className='worksimg'>  
            <img src={cplus} alt='c++' className='worksimg'/>
            </div>
        </div>
    </div>
  )
}

export default Works