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

<div className="about__content">
  <div className="about__cards">
    <article className="about__card">
      <h3>Experience</h3>
      <i className="fa fa-trophy" aria-hidden="true"></i>
      <small>7+ years working</small>
    </article>

    <article className="about__card">
      <h3>Experience</h3>
      <i className="fa fa-trophy" aria-hidden="true"></i>
      <small>7+ years working</small>
    </article>

    <article className="about__card">
      <h3>Experience</h3>
      <i className="fa fa-trophy" aria-hidden="true"></i>
      <small>7+ years working</small>
    </article>
  </div>

<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nihil maiores optio consequuntur libero ex rerum natus est aperiam aut repudiandae sit, eum hic accusantium ratione, cupiditate ea quia velit nostrum. Omnis id consequuntur odit laborum provident, officiis asperiores maxime delectus fugiat ex unde officia numquam perferendis molestias quaerat tenetur!</p>
<a href='#contact' className="btn btn-primary">Let's talk!</a>

</div>

            </div>
        </section>
    );
};

export default About;
