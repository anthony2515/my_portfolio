import { useEffect,useState } from "react"


function App() {
  const [photo,setPhoto] = useState("")
  const [width,setWidth] = useState(window.innerWidth)
  useEffect(() => {
    // Function to update the width
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array means this effect runs only on mount and unmount

   console.log(width)
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
