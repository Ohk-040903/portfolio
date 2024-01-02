import React,{ useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab, faCheckSquare, faCoffee)

 const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u0wcqao', 'template_t8vodqq', form.current, 'lAQwOeNXZM2kkHH1i')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Thank you!! Your message has been sent. we will get back to you soon')
      }, (error) => {
          console.log(error.text);
          alert('Oops! Something went wrong. Please try again later.');
      });
  };
  return (
    <div id='contact' className='contact'>
        <h1 className='contactpagetitle'>Contact Me</h1>
        <span className='contactdescription'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactform' method='post' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your name' name='your_name' />
            <input type='email' className='email' placeholder='Your Email ID' name='your_email' />
            <input type='text' className='phone'placeholder='Your Contact Number' name='your_contact'/>
            <textarea name='message' className='msg' rows='5' placeholder='Any Message for me'></textarea>
            <button className='submitbtn' type='submit' value='send'>Submit</button>
            </form>
        <div className='links'>
            <a href='https://www.instagram.com/ohk_040903/?hl=en' className='desktopmenulistitem'>
                 <FontAwesomeIcon icon={['fab', 'instagram']} />
                 </a>
            <a href='https://www.linkedin.com/in/ohm-kumar-b6b722251/' className='desktopmenulistitem'>
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </a>
            <a href='https://github.com/Ohk-040903' className='desktopmenulistitem'>
                <FontAwesomeIcon icon={['fab', 'github']} />
                </a>
            </div>
    </div>
  )
}

export default Contact