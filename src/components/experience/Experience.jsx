import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'> 
      <h5>Skills</h5>
      <h2>Experiences</h2>
      
      <div className='container experience__container'>
        <div className="experience__skills">
          <h3>Techincal Skills</h3>
          <div className="skills__content">
            <article className="skills_details">
              <h4>C, C++, C#</h4>
              <small className='text-light'>Proficient</small>
            </article>
            <article className="skills_details">
              <h4>HTML/CSS</h4>
              <small className='text-light'>Competent</small>
            </article>
            <article className="skills_details">
              <h4>Javascript</h4>
              <small className='text-light'>Competent</small>
            </article>
            <article className="skills_details">
              <h4>HTML</h4>
              <small className='text-light'>Competent</small>
            </article>
            <article className="skills_details">
              <h4>MySQL</h4>
              <small className='text-light'>Competent</small>
            </article>
            <article className="skills_details">
              <h4>Java/Python</h4>
              <small className='text-light'>Novice</small>
            </article>
            <article className="skills_details">
              <h4>Unix, Git</h4>
              <small className='text-light'>Competent</small>
            </article>
            <article className="skills_details">
              <h4>PHP</h4>
              <small className='text-light'>Novice</small>
            </article>
          </div>
        </div>

        
        <div className="experience__work">
        <h3>Work Experience</h3>
          <div className="skills__content">
            <article className="skills_details">
              <h4>Software Engineering - Vanderbilt</h4>
              <p className='text-light'>Worked with a graduate student from Vanderbilt University with 4 other members to develop a game in Unity that would collect data on players to help find problem areas in their social skills.</p>
            </article>
          </div>
        </div>
      </div>

      
    </section>
  )
}

export default Experience