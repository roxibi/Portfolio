import React from "react";
import "./portfolio.css";
import BB from "../../assets/mockup-bb.png";

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            image: BB,
            title: "Bookbandits",
            description:
                "A book-sharing platform made easy: use your webcam to scan your books and add them to your public profile. Then browse and borrow books from other people's bookshelves!",
            github: "https://github.com/Tiefengnom/BBFront",
            demo: "https://bbookbandits.netlify.app/",
        },
        {
            id: 2,
            image: BB,
            title: "Bookbandits",
            description:
                "A book-sharing platform made easy: use your webcam to scan your books and add them to your public profile. Then browse and borrow books from other people's bookshelves!",
            github: "https://github.com/Tiefengnom/BBFront",
            demo: "https://bbookbandits.netlify.app/",
        },
        {
            id: 3,
            image: BB,
            title: "Bookbandits",
            description:
                "A book-sharing platform made easy: use your webcam to scan your books and add them to your public profile. Then browse and borrow books from other people's bookshelves!",
            github: "https://github.com/Tiefengnom/BBFront",
            demo: "https://bbookbandits.netlify.app/",
        },
        {
            id: 4,
            image: BB,
            title: "Bookbandits",
            description:
                "A book-sharing platform made easy: use your webcam to scan your books and add them to your public profile. Then browse and borrow books from other people's bookshelves!",
            github: "https://github.com/Tiefengnom/BBFront",
            demo: "https://bbookbandits.netlify.app/",
        },
    ];

    return (
        <section id='portfolio'>
            <p>Have a look</p>
            <h2>My Projects</h2>

            <div className='container portfolio__container'>
                {projects &&
                    projects.map((p) => ( 
                        <article className='portfolio-item'>
                            <div className='portfolio__item-image'>
                                <img src={p.image} alt='mockup website' />
                            </div>
                            <h3>{p.title}</h3>
                            <p>{p.description}</p>
                            <div className='buttons'>
                                <a href={p.github} rel='noreferrer' target='_blank' className='btn cta'>
                                    Github
                                </a>
                                <a href={p.demo} rel='noreferrer' target='_blank' className='btn btn-primary cta'>
                                    Live Demo
                                </a>{" "}
                            </div>
                        </article>
                    ))}
            </div>
        </section>
    );
};

export default Portfolio;
