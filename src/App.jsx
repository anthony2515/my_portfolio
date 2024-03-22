import { useEffect,useState } from "react"


function App() {
  const [photo,setPhoto] = useState("")
  useEffect(() => {
    (async() => {
      const response = await fetch("http://localhost:3000/api/v1/photo")
      
      setPhoto(response.url)
      console.log(response.headers.get())
    })()
  },[])
 
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
        <div className = "photo">
          {/* <img src = {photo}/> */}
        </div>
      </section>
      
    </>
  )
}

export default App
