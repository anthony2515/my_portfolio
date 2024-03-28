import { useEffect,useState } from "react"
import Projects from "./Projects"
import Skills from "./Skills"
import Education from "./Education"
const links = {
  linked_in:"https://www.linkedin.com/in/anthony-santiago-133a71bb/",
  github:"https://github.com/anthony2515"
}
function App() {
  const [photo,setPhoto] = useState("")
  const [aboutMe, setAboutMe] = useState("")
  const [role,setRole] = useState("")
  const [projects,setProjects] = useState([])
  const [techSkills,setTechSkills] = useState([])
  const [tools,setTools] = useState([])
  const [softSkills,setSoftSkills] = useState([])
  const [education, setEducation] = useState([])
  useEffect(() => {
    (async() => {
      const response_Photo = await fetch("https://my-portfolio-server-eosin.vercel.app/api/v1/photo")
      // const response_Photo = await fetch("http://localhost:3000/api/v1/photo")

      const response_data = await fetch("https://my-portfolio-server-eosin.vercel.app/api/v1/about_me")
      // const response_data = await fetch("http://localhost:3000/api/v1/about_me")

      const data = await response_data.json()
      setProjects(data.projects)
      setRole(data.role)
      setAboutMe(data.about_me)
      setPhoto(response_Photo.url)
      setTechSkills(data.skills[0].technical_skills)
      setTools(data.skills[0].tools)
      setSoftSkills(data.skills[0].soft_skills)
      setEducation(data.education)
    })()
  },[])
  
  return (
    <>
      <section className = "about_me_section">
        <nav className = "nav_bar">
        <a href="#">Home</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        {/* <a href="#">Contact</a> */}
        </nav>
        <img className = "display_photo"height = "20%" src = {photo}/>
        <h1>{role}</h1>
        
        <p className = "aboutMe_description">{aboutMe}</p>
        <div className = "links">
            <a className = "link cv" href="https://docs.google.com/document/d/193PYB4ySlPG8ypkVAsbbVFHaNMYgOkulClXtRjQxsLM/export?format=pdf"><img src="cv.jpg" alt="Curriculum Vitae" /></a>

            <a  className = "link"  href={links.linked_in}>
              <img src="linkedIn_icon.png" alt="linked in" />
            </a>
  
            <a className = "link"  href={links.github}>
              <img src = "github_icon.png" alt = "github link"/>
            </a>
        </div> 
      </section>
      <section className = "projects_section">
        <h1 id = "projects" className = "section_header">Projects</h1>
        <Projects projects={projects} />
      </section>
      <section className = "skills_section">
      <h1 id = "skills" className = "section_header">Skills</h1>
        <Skills techSkills={techSkills} tools = {tools} softSkills = {softSkills}/>
      </section>
      <section className = "education_section">
      <h1 id = "education" className = "section_header">Education</h1>
      <Education education = {education}/>
      </section>
    </>
  )
}

export default App
