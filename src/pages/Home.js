import React from 'react'
import "../styles/Home.css"
import { useTypingEffect } from "../hooks/typing-effect"

  

function Home() {
  const intro = useTypingEffect(` Welcome and salutations! I'm Amadeo Costaldi, a senior Computer Science Major at the University of Arkansas.
  My primary interests are Full Stack and Back-End development with sub-interests in: \n Mobile Development \n Videogame Development\n Artificial Intelligence
  Cybersecurity`, 50);
  const edu_intro = useTypingEffect('Bachelor of Science: Computer Sience\n University of Arkansas\n August 2020 through May 2024', 50)
  const titleFront = useTypingEffect('Front End', 50)
  const titleBack = useTypingEffect('Back End', 50)
  const titleSpecial = useTypingEffect('Project Management Skills', 50)
  const contentFront = useTypingEffect(`HTML5\nCSS\nJavaScript\nReact`, 50)
  const contentBack = useTypingEffect(`Node.js\nExpress.js\nJava Springt\nJava\nC/C++\nKotlin\nSQL`, 50)
  const contentSpecial = useTypingEffect(`Software Development Management - Possesses experience leading teams of software engineers, 
  organizing workflows, delegating responsibility, and faciliating cooperation between different teams\nSoftware Engineering Practices - Familiar with Agile methodologiess and Paired Programming enviroments\n`, 50)
  return (
    <div className="home">
      <div className="about">
        <h2> Amadeo Costaldi </h2>
        <h4> Software Engineer</h4>
      </div>
      <div><h3> About Me</h3></div> 
      <div className = "typing-container">
      {intro}
      </div>
       <div><h3>Contact Me</h3></div> 
       <div><h3>Education</h3></div> 
       <div className = "title-type">
      {edu_intro}
      </div>
       <div>
       </div>
       <div><h3>Skills</h3></div> 
       <div className = "title-type">
      {titleFront}
      </div>
        <div className = "typing-container">
      {contentFront}
      </div>
      <div className = "title-type">
      {titleBack}
      </div>
        <div className = "typing-container">
      {contentBack}
      </div>
      <div className = "title-type">
      {titleSpecial}
      </div>
        <div className = "typing-container">
      {contentSpecial}
      </div>
    </div>
  )
}

export default Home