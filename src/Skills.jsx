import { Autoplay } from "swiper/modules"

/* eslint-disable react/prop-types */
const Skills = ({techSkills, tools, softSkills}) =>{
  return (
    <div className = "skills_container">
      <h1>Technical skills</h1>
      <table>
        <thead>
        <tr>
          <th>Proficiency</th>
          <th>Skills</th>
          <th>Description</th>
        </tr>
        </thead>
        <tbody>
          {techSkills.map((data,index)=>{
            return (
            <tr key = {index}>
              <td className = "font_proficiency">{data.proficiency}</td>
              <td className = "font_skill">{data.skill}</td>
              <td className = "font_description">{data.description}</td>
              </tr>
             )        
         })}
        </tbody>
        
      </table>
      <h1 style = {{padding:"20px"}}>Tools</h1>
      <table style={{marginInline:"auto"}}>
        <thead>
          <th>Tool</th>
          <th>Description</th>
        </thead>
        <tbody>
          {tools.map((data,index) => {
            return (
              <tr key = {index}>
                <td className = "font_skill">{data.tool}</td>
                <td className = "font_description">{data.description}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <h1 style = {{paddingTop:"20px"}}>Soft Skills</h1>
      <div className = "softSkill_container">
        
        <ul className = "ul_softSkill">
          {softSkills.map((data,index) => {
            return(
              <li key = {index}>
                {data}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Skills