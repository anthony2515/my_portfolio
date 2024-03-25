import { useEffect,useState } from "react"
import Projects from "./Projects"
const links = {
  linked_in:"https://www.linkedin.com/in/anthony-santiago-133a71bb/",
  github:"https://github.com/anthony2515"
}
function App() {
  const [photo,setPhoto] = useState("")
  const [aboutMe, setAboutMe] = useState("")
  const [role,setRole] = useState("")
  const [projects,setProjects] = useState([])
  
  useEffect(() => {
    (async() => {
      const response_Photo = await fetch("https://my-portfolio-server-eosin.vercel.app/api/v1/photo")
      const response_data = await fetch("https://my-portfolio-server-eosin.vercel.app/api/v1/about_me")
      // const response_data = await fetch("http://localhost:3000/api/v1/about_me")

      const data = await response_data.json()
      setProjects(data.projects)
      setRole(data.role)
      setAboutMe(data.about_me)
      setPhoto(response_Photo.url)
      
    })()
  },[])
  
  return (
    <>
      <section className = "about_me_section">
        <nav className = "nav_bar">
        <a href="#">Home</a>
        <a href="#projects">Projects</a>
        <a href="#">Skills</a>
        <a href="#">Education</a>
        <a href="#">Contact</a>
        </nav>
        <img height = "20%" src = {photo}/>
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
        <h1 className = "projects_header">Projects</h1>
        <Projects projects={projects} />
      </section>
      
    </>
  )
}

export default App
