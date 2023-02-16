import React from "react";
import "./contact.css";

const Contact = () => {
    return (
        <section id='contact'>
            <p>Get in Touch</p>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <a href='mailto:roxana.bita@gmail.com' target='_blank' rel="noopener noreferrer">
                            {" "}
                            <i class='fa fa-envelope fa-3x' aria-hidden='true'></i>
                            <br /> <h4>roxana.bita@gmail.com</h4> <p>Email me </p>
                        </a>
                    </article>

                    <article className='contact__option'>
                        <a href='https://www.linkedin.com/in/roxana-bita/' target='_blank' rel="noopener noreferrer">
                            {" "}
                            <i class='fa fa-linkedin-square fa-3x' aria-hidden='true'></i> <br />{" "}
                            <h4>linkedin.com/roxana-bita</h4> <p>Message me </p>
                        </a>
                    </article>
                </div>

                <form action='' method='POST' data-netlify='true'>
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='7' placeholder='Your Message'></textarea>
                    <button type='submit' className='btn btn-primary'>
                        {" "}
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
