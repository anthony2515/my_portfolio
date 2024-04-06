# My Portfolio
<p>Hello everyone! This is my main portfolio website. In this documentation I will show you how I made this project.</p>

# What came up to my mind
When I was planning on making this portfolio I thought that I could make this dynamic as I will be making more projects and learning new tools to add on my portfolio
<br />
 so instead of adding for example a project on html markup everytime like this:
```html
<img src= "blah">
<ul>
<li>Nodejs</li>
<li>Reactjs</li>
<li>Sqlite3</li>
</ul>
<p>the description of the project</p>
<a href="link">github url</a>
```
Im just going to pull up my portfolio manager and just click a button to add project and I will be able to upload image and make all my inputs then submit it to the server
![alt text](image-1.png)
# Project Architecture
![alt text](image.png)
<ul>
<li>The image above shows the architecture of this project where the portfolio gets the data from the server and the server gives the data back to the client(Portfolio)</li>
<li>and the Portfolio manager makes an HTTP requests to Add, Edit or Delete data</li>
</ul>

# Project Repositories
please go to these links for <a href="#">Server docs</a> and <a href='#'>Portfolio manager docs</a>
<br />
as I will only discuss about the portfolio itself on this documentation

# File Structure
![alt text](image-2.png)
<h3>public/</h3>
I store all my static images for the links like my cv, github profile and linkedIn
<h3>src/</h3>
All the react components and styles are stored here

# Root Layout
On src/main.jsx I set my Root layout to App.jsx

![alt text](image-3.png)

# Using useState and useEffect hook
```javascript
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
      const apiUrl = import.meta.env.VITE_API_URL;
      const response_Photo = await fetch(`${apiUrl}/api/v1/photo`)
      // const response_Photo = await fetch("http://localhost:3000/api/v1/photo")

      const response_data = await fetch(`${apiUrl}/api/v1/data`)
      // const response_data = await fetch("http://localhost:3000/api/v1/data")

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
  ```
  Here in this code I used useEffect hook to get the display photo and the JSON data from the server and store the data that I need using useState hook

  <strong>Take Note: </strong>
  Those commented out code are used for development purposes

  # Child Components
  I assign each 

