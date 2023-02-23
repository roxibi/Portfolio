import React from "react";
import "../../about/about.css";
import bw from "../../../assets/bw.png";

const AboutDE = () => {
    return (
        <section id='about'>
            <p>Mehr herausfinden</p>
            <h2>Über mich</h2>
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
                            <h3>Erfahren</h3>

                            <small> 7+ berufserfahrung in der Kommunikation. </small>
                        </article>

                        <article className='about__card'>
                            {" "}
                            <i className='fa fa-trophy' aria-hidden='true'></i>
                            <h3>Motiviert</h3>
                            <small>
                                Ich brenne für die Entwicklung modernster Web-Lösungen.
                            </small>
                        </article>

                        <article className='about__card'>
                            <i className='fa fa-trophy' aria-hidden='true'></i> <h3>Kompetent</h3>
                            <small>Immer neugierig, immer lernbegeistert.  </small>
                        </article>
                    </div>

                    <p className="about-me__text">
                    Als Webentwicklerin mit sozialwissenschaftlichem und kommunikativem Hintergrund sehe ich das transformative Potenzial der Digitalisierung für unsere Gesellschaft und liebe es, diese endlosen Möglichkeiten zu erforschen. Ich nutze mein transdisziplinäres Wissen, um nachhaltige, gut durchdachte Web-Lösungen zu entwickeln. <br/> <br/>Meine Erfahrung in der Wissenschaftskommunikation und im Verlagswesen hilft mir dabei, digitale Produkte zu schaffen, die tatsächlich etwas bewirken, und sie mit Blick auf die Bedürfnisse des Zielpublikums zu gestalten (einschließlich Barrierefreiheit). 
                        
                        <br/> <br/>Ich bringe Wärme und ausgeprägte Kommunikationsfähigkeiten in ein Team ein, ebenso wie ein Auge für Innovation und Ästhetik. Ich arbeite sehr ergebnisorientiert und lege viel Wert auf gutes Projektmanagement. Meine Kolleg*innen schätzen meine Kreativität und mein Talent, immer neue Tools zu finden, und sie sehen mich als hilfsbereit, zuverlässig und anpassungsfähig. Ich fühle mich in einem kollaborativen Umfeld wohl, in dem Teamarbeit, lebenslanges Lernen und Nachhaltigkeit hohen Stellenwert haben.

                        
                        <br/> <br/>In meiner Freizeit mache ich gerne Collage-Kunst und manage die Kommunikation und Rekrutierung für die Leihbar Bonn, Bonns erste Bibliothek der Dinge. #borrowdontbuy
                    </p>
                    <a href='#contact' className='btn btn-primary'>
                        Jetzt Kontakt aufnehmen
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutDE;
