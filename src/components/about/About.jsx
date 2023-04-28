import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {GiOpenBook} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'> 
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about_content">
          <div className="about__cards">
{/*
            <article className='about__card'>
              <GiOpenBook className='about__icon'/>
              <h5>Skills</h5>
              <small>C++...</small>
            </article>
*/}

            <article className='about__card'>
              <GiOpenBook className='about__icon'/>
              <h5>Education</h5>
              <small>Bachelor's</small><br></br>
              <small>Computer Science</small><br></br>
              <small>MTSU</small>
            </article>

            <article className='about__card'>
              <GiOpenBook className='about__icon'/>
              <h5>Interests</h5>
              <small>Web Dev</small><br></br>
              <small>Software Engineering</small><br></br>
              <small>Machine Learning/A.I.</small>
            </article>
          </div>

          <p>Hi I'm Lance Tero a graduate of MTSU's Class of 2023. I am planning to get my masters in the future but that is uncertain. I have a passion for coding and love learning new skills in the industry. I have big a big interest in robotics, machine learning and A.I. </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About