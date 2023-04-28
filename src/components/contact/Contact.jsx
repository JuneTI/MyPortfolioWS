import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_abmpjgc', 'template_3q6p4kh', form.current, 'JInlzEJksxQPqr0-_');
    
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail} id='form__container'>
          <div id="inputLeft">
            <input type="text" name='name' placeholder='Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required/>
            <input type="phone" name='phone' placeholder='Your Phone Number' required/>
          </div>
          <div id="inputRight">
            <textarea name='message' rows='7' placeholder='Type Here...' required></textarea>
            <button type='submit'className='btn btn-primary'>Send Message</button>
          </div>
        </form>
      </div>



    </section>
  )
}

export default Contact