import React from "react";
import "./experience.css";

const Experience = () => {
    const blocks = {
        Frontend: ["Vanilla JavaScript", "React", "Tailwind", "HTML", "CSS", "Bootstrap"],
        Backend: ["Node JS", "Express JS", "MongoDB", "PostgreSQL"],
        Methodologies: ["Git", "Scrum", "Kanban", "UI/UX Design", "Pair Programming", "Project management"],
        Tools: ["Adobe CC", "Wordpress", "Typo3", "Figma", "Github"],
    };

    const getSkills = (obj) => Object.keys(obj);
    console.log(getSkills(blocks));
    return (
        <section id='experience'>
           
            <h2>My Experience</h2>

            <div className='container experience__container'>
                {getSkills(blocks).map((skill) => (
                    <div className='experience__skillset'>
                        <h3>{skill}</h3>
                        <ul className='experience__list'>
                            {blocks[skill].map((s) => (
                                <li key={skill} className='experience__li'>
                                    <i className='fa fa-check-circle' aria-hidden='true'></i>
                                    <span>{s}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

            
            </div>
        </section>
    );
};

export default Experience;
