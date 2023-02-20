import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../../contact/contact.css";

const ContactDE = () => {
    const form = useRef();
    const [submitted, setSubmitted] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_arvfwvn", "template_k7qfd84x", form.current, "TkdceoCwkSVemG6s6").then(
            (result) => {
                console.log(result.text);
                e.target.reset();
                setSubmitted(true);
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

    return (
        <section id='contact'>
            <h2>Kontakt</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <a href='mailto:roxana.bita@gmail.com' target='_blank' rel='noopener noreferrer'>
                            {" "}
                            <i className='fa fa-envelope fa-3x' aria-hidden='true'></i>
                            <br />
                            <strong><h3>Email </h3></strong>
                            <h4>roxana.bita@gmail.com</h4>
                        </a>
                    </article>

                    <article className='contact__option'>
                        <a href='https://www.linkedin.com/in/roxana-bita/' target='_blank' rel='noopener noreferrer'>
                            {" "}
                            <i className='fa fa-linkedin-square fa-3x' aria-hidden='true'></i> <br /> <strong><h3>Verlinken </h3></strong>
                            <h4>linkedin.com/roxana-bita</h4>
                        </a>
                    </article>
                </div>

                <form action='' ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type='text' name='user_name' placeholder='Name' required />
                    <label>E-mail</label>
                    <input type='email' name='user_email' placeholder='Email' required />
                    <label>Nachricht</label>

                    <textarea name='message' rows='7' placeholder='Nachricht'></textarea>

                    <input type='submit' className='btn btn-primary' value='Send'></input>
                    {submitted && <p>Danke sehr für die Nachricht! Ich melde mich so schnell wie möglich zurück. </p>}
                    <br/>
                </form>
            </div>
        </section>
    );
};

export default ContactDE;
