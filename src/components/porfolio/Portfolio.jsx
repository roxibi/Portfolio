import React from "react";
import "./portfolio.css";
import BB from "../../assets/mockup-bb.png";
import News from "../../assets/mockup-news.png";

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            image: BB,
            stack:["React" , "Tailwind" , "NodeJS" , "ExpressJS" , "MongoDB","xzing library" , "Google Books API" , "Netlify" , "Cyclic"],
            title: "Bookbandits",
            description:
                "A book-sharing platform made easy: use your webcam to scan your books and add them to your public profile. Then browse and borrow books from other people's bookshelves! A collaboration with Michel W., aka Tiefengnom.",
            github: "https://github.com/Tiefengnom/BBFront",
            demo: "https://bbookbandits.netlify.app/",
        },
        {
            id: 2,
            image: News,
            stack:["React" , "CSS" , "NodeJS" , "ExpressJS" , "NewsAPI" , "Netlify" , "Cyclic"],
            title: "My Daily News",
            description:
                "A simple news app which draws the most important news from an API according to the categories I have set as my interests. Live Demo coming soon! See my backend code, which is running on Cyclic, here: https://github.com/roxibi/backend-daily-news.",
            github: "https://github.com/roxibi/my-daily-news.github.io",
            demo: "https://my-daily-news.netlify.app/",
        },
        // {
        //     id: 3,
        //     image: BB,
        //     title: "Bookbandits",
        //     description:
        //         "A book-sharing platform made easy: use your webcam to scan your books and add them to your public profile. Then browse and borrow books from other people's bookshelves!",
        //     github: "https://github.com/Tiefengnom/BBFront",
        //     demo: "https://bbookbandits.netlify.app/",
        // },
        // {
        //     id: 4,
        //     image: BB,
        //     title: "Bookbandits",
        //     description:
        //         "A book-sharing platform made easy: use your webcam to scan your books and add them to your public profile. Then browse and borrow books from other people's bookshelves!",
        //     github: "https://github.com/Tiefengnom/BBFront",
        //     demo: "https://bbookbandits.netlify.app/",
        // },
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
                            <ul className="stack">{p.stack.map((s)=>{return <li><i class="fa fa-wrench" aria-hidden="true"></i>{s}</li>})}</ul>
                            <h3>{p.title}</h3>
                            <p>{p.description}</p>
                            <div className='buttons'>
                                <a href={p.github}target='_blank' rel="noopener noreferrer"  className='btn cta'>
                                    Github
                                </a>
                                <a href={p.demo}  target='_blank' rel="noopener noreferrer"  className='btn btn-primary cta'>
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
