import { useEffect,useState } from "react"

const links = {
  linked_in:"https://www.linkedin.com/in/anthony-santiago-133a71bb/",
  github:"https://github.com/anthony2515"
}
function App() {
  const [photo,setPhoto] = useState("")
  const [aboutMe, setAboutMe] = useState("")
  const [role,setRole] = useState("")
  useEffect(() => {
    (async() => {
      const response_Photo = await fetch("http://localhost:3000/api/v1/photo")
      const response_data = await fetch("http://localhost:3000/api/v1/about_me")
      const data = await response_data.json()
      setRole(data.role)
      setAboutMe(data.about_me)
      setPhoto(response_Photo.url)
      console.log(response_Photo.headers.get())
    })()
  },[])
  console.log(aboutMe)
  return (
    <>
      <section className = "about_me_section">
        <nav className = "nav_bar">
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Skills</a>
        <a href="#">Education</a>
        <a href="#">Contact</a>
        </nav>
        <img height = "20%" src = {photo}/>
        <h1>{role}</h1>
        <p>{aboutMe}</p>
      </section>
      
    </>
  )
}

export default App
