import React from "react";
import "./about.css";
import bw from "../../assets/bw.png";

const About = () => {
    return (
        <section id='about'>
            <p>Get to know</p>
            <h2>About me</h2>
            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={bw} alt='portrait' />
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <i className='fa fa-trophy' aria-hidden='true'></i>
                            <h3>Experienced</h3>

                            <small> 7+ years professional experience in communication. </small>
                        </article>

                        <article className='about__card'>
                            {" "}
                            <i className='fa fa-trophy' aria-hidden='true'></i>
                            <h3>Dedicated</h3>
                            <small>
                                Passionate about providing cutting edge web solutions.
                            </small>
                        </article>

                        <article className='about__card'>
                            <i className='fa fa-trophy' aria-hidden='true'></i> <h3>Competent</h3>
                            <small>Always curious, always improving my skills. </small>
                        </article>
                    </div>

                    <p>
                        As a web developer with a
                        background in social sciences and communication, I  make
                        use of my transdisciplinary knowledge to build sustainable, well-designed web solutions. I like creating digital products that
                        actually have an impact, designing them with the needs of the target audience (including
                        accessibility) and the strategic interests of the company in mind. <br/> <br/>With React, JavaScript, HTML,
                        CSS, ExpressJS and SQL/MongoDB I strive to create an elegant choreography of high performance
                        and aesthetic appeal.
                        
                        <br/> <br/> I bring warmth and great communication skills to a team, and strive
                        to innovate and to improve processes. I work very results-oriented and mindful of my target audience. 
                        Colleagues appreciate my creativity, my talent for always finding new tools to make life easier,
                        and they see me as helpful, reliable and adaptable. I thrive in collaborative environments where
                        teamwork, life long learning and real world impact are valued. 
                        
                        <br/> <br/>In my spare time I love making
                        collage art and I manage communication and recruitment for Leihbar Bonn, Bonn's first library of
                        things. #borrowdontbuy
                    </p>
                    <a href='#contact' className='btn btn-primary'>
                        Let's talk!
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
