import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {

    const form = useRef();
    const [submitted, setSubmitted]=useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_arvfwvn', 'template_k7qfd84x', form.current, 'TkdceoCwkSVemG6s6')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            setSubmitted(true);
        }, (error) => {
            console.log(error.text);
        });
    };


    return (
        <section id='contact'>
            <p>Get in Touch</p>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <a href='mailto:roxana.bita@gmail.com' target='_blank' rel="noopener noreferrer">
                            {" "}
                            <i className='fa fa-envelope fa-3x' aria-hidden='true'></i>
                            <br /> <h4>roxana.bita@gmail.com</h4> <p>Email me </p>
                        </a>
                    </article>

                    <article className='contact__option'>
                        <a href='https://www.linkedin.com/in/roxana-bita/' target='_blank' rel="noopener noreferrer">
                            {" "}
                            <i className='fa fa-linkedin-square fa-3x' aria-hidden='true'></i> <br />{" "}
                            <h4>linkedin.com/roxana-bita</h4> <p>Message me </p>
                        </a>
                    </article>
                </div>

                <form action='' ref={form} onSubmit={sendEmail}>
                <label>Name</label>
      <input type="text" name="user_name" placeholder='Your Full Name' required/>
      <label>Email</label>
      <input type="email" name="user_email" placeholder='Your Email' required/>
      <label>Message</label>
                    
                    <textarea name='message' rows='7' placeholder='Your Message'></textarea>
                 
                    <input type='submit' className='btn btn-primary' value="Send" >
                      
                        
                    </input>
                    {submitted && <p>Thank you for contacting me! I will get back to you as soon as possible.</p>}
                </form>
               
            </div>
        </section>
    );
};

export default Contact;
