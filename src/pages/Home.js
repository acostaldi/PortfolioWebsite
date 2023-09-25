import React from 'react'
import "../styles/Home.css"
import { useTypingEffect } from "../hooks/typing-effect"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

  

function Home() {
  const intro = useTypingEffect(` Welcome and salutations! I'm Amadeo Costaldi, a senior Computer Science Major at the University of Arkansas.
  My primary interests are Full Stack and Back-End development with sub-interests in: \n1. Mobile Development \n2. Videogame Development\n3. Artificial Intelligence
  4. Cybersecurity`, 25);
  const edu_intro = useTypingEffect('Bachelor of Science: Computer Science\n University of Arkansas\n August 2020 through May 2024', 50)
  const titleFront = useTypingEffect('Front End', 50)
  const titleBack = useTypingEffect('Back End', 50)
  const titleSpecial = useTypingEffect('Project Management Skills', 50)
  const contentFront = useTypingEffect(`
  HTML5 - Proficient in creating structured and appealing structured web pages using HTML5.
  CSS - Skilled in designing responsive and visually appealing web layouts with CSS.
  JavaScript - Experienced in building interactive web applications and enhancing user experiences with JavaScript.
  React - Familiar in developing modern, component-based websites and web appss using React.`, 30);

const contentBack = useTypingEffect(`
  Node.js - Experienced in server-side JavaScript development with Node.js.
  Express.js - Familair with building web applications using Express.js.
  Java Spring - Proficient in developing Java applications with the Spring framework.
  Java - Experienced for three years in creating robust and efficient Java applications.
  Python = Experienced with developing a wide variety of applications in Python from encrypted messaging apps to artificial intelligence models.
  C/C++ - Familiar in low-level programming with C/C++ for operating system design, algorithm implementations, and application development.
  C# - Familiar with utilizing C# for scripting purposes especially within the Unity engine.
  Kotlin - Experienced in Android app development with Kotlin ranging from Calculator to Social Media applications.
  SQL - Proficient in database design, querying, and management using SQL.`, 30);

  const contentSpecial = useTypingEffect(`Software Development Management - Possesses experience leading teams of software engineers, 
  organizing workflows, delegating responsibility, and faciliating cooperation between different teams\nSoftware Engineering Practices - Familiar with Agile methodologies and Paired Programming enviroments\n`, 50)
  return (
    <div className="home">
      <div className="about">
        <h2> Amadeo Costaldi </h2>
        <h4> Software Engineer</h4>
      </div>
      <div><h3>Amadeo@acostaldi.com:~/Greetings</h3></div> 
      <div className = "typing-container">
      {intro}
      </div>
       <div><h3>Amadeo@acostaldi.com:~/Contacts </h3></div> 
       <div className = "typing-container">
        <p><LinkedInIcon style ={{verticalAlign: "bottom" }}/>LinkedIn: <a href="https://www.linkedin.com/in/amadeoc" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/amadeoc</a> </p>
        <p><GitHubIcon style ={{verticalAlign: "bottom" }}/>Github: <a href="https://github.com/acostaldi" target="_blank" rel="noopener noreferrer">https://github.com/acostaldi</a> </p>
        <p><EmailIcon style ={{verticalAlign: "bottom" }}/>Email: <a href="mailto:amadeom.costaldi@gmail.com" target="_blank" rel="noopener noreferrer">amadeom.costaldi@gmail.com</a> </p>
       </div>
       <div><h3>Amadeo@acostaldi.com:~/Education</h3></div> 
       <div className = "title-type">
      {edu_intro}
      </div>
       <div>
       </div>
       <div><h3>Amadeo@acostaldi.com:~/Skills</h3></div> 
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