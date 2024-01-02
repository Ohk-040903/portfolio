import React from 'react';
import './skill.css';
import fronted from '../../assets/fronted.jpg';
import backend from '../../assets/backend.jpg'
import programmer from '../../assets/programmer.jpg'
import webdesign from '../../assets/web designing.jpg'

const Skills = () => {
  return (
   <section className='skills' id='skills'>
    <span className='skilltitle'>What I do</span>
    <span className='skilldescription'>I'm a versatile developer skilled in front-end technologies—HTML, CSS, JavaScript, and React.js. On the back end, I excel in Node.js, along with proficiency in MySQL and MongoDB. Additionally, my programming expertise extends to C++, enabling me to tackle complex problem-solving. I bring a holistic approach to software development, emphasizing design and backend precision.</span>
    <div className='skillbars'>

        <div className='skillbar'>
            <img src={fronted} alt='fronted' className='skillbarimg'/>
            <div className='skillbartext'>
                <h2>Frontend</h2>
                <p>Proficient in HTML, CSS, JavaScript and Reactjs with a strong foundation in front-end</p>
            </div>
        </div>

        <div className='skillbar'>
            <img src={backend} alt='backend' className='skillbarimg'/>
            <div className='skillbartext'>
                <h2>Backend</h2>
                <p>Proficient in Nodejs, MySQL, MongoDB, with a strong foundation in back-end</p>
            </div>
        </div>
        
        <div className='skillbar'>
            <img src={programmer} alt='programmer' className='skillbarimg'/>
            <div className='skillbartext'>
                <h2>Programmer</h2>
                <p>Expertise in C++, with a focus on writing clean, efficient, and maintainable code.</p>
            </div>
        </div>
        
        <div className='skillbar'>
            <img src={webdesign} alt='webdesign' className='skillbarimg'/>
            <div className='skillbartext'>
                <h2>Webdesign</h2>
                <p>Experienced in building responsive and user-friendly websites, ensuring optimal functionality across various devices</p>
            </div>
        </div>

    </div>
   </section>
  )
}

export default Skills