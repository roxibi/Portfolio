import React from "react";
import "./portfolio.css";
import BB from '../../assets/mockup-bb.png'

const Portfolio = () => {
    return (
      <section id='portfolio'>

<p>Have a look</p>
            <h2>My Projects</h2>

        <div className='container portfolio__container'>
            <article className='portfolio-item'>
                <div className='portfolio__item-image'>
                    <img src={BB} alt='mockup website' />
                </div>
                <h3>Bookbandits</h3>
                <p>
                    A book-sharing platform made easy: use your webcam to easily scan your books. Then browse and borrow
                    books in your native language!
                </p>
               <div className="buttons">
                <a href='https://github.com/Tiefengnom/BBFront' rel="noreferrer" target='_blank' className='btn cta'>
                    Github
                </a>
                <a href='https://bbookbandits.netlify.app/' rel="noreferrer" target='_blank' className='btn btn-primary cta'>
                    Live Demo
                </a> </div>
            </article>

            <article className='portfolio-item'>
                <div className='portfolio__item-image'>
                    <img src={BB} alt='mockup website' />
                </div>
                <h3>Bookbandits</h3>
                <p>
                    A book-sharing platform made easy: use your webcam to easily scan your books. Then browse and borrow
                    books in your native language!
                </p>
                <div className="buttons">
                <a href='https://github.com/Tiefengnom/BBFront' rel="noreferrer" target='_blank' className='btn cta'>
                    Github
                </a>
                <a href='https://bbookbandits.netlify.app/' rel="noreferrer" target='_blank' className=' btn btn-primary cta'>
                    Live Demo
                </a> </div>
            </article>
        </div>
        </section>
    );
};

export default Portfolio;
