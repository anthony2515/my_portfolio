
/* eslint-disable react/prop-types */
const Education = ({education}) => {
  return (
    <div className = "education_container">
      {education.map((data,index) => {
        const linesArray = data.description.split('\n');
        
        return (
          <>
          <img className = "education_image" key = {index} src={`https://my-portfolio-server-eosin.vercel.app/images/${data.school_image}`} alt="school_image" />
          <h2 style={{color:"#08f5d5"}}>{data.school_year}</h2>
          <h3 style = {{color:"#08aef5"}}>{data.qualification}</h3>
          <ul>
            {linesArray.map((line,index) => <li style = {{color:"white"}} key = {index}>{line}</li>)}
          </ul>
          </>
          
        )
      })}
    </div>
  )
}
export default Education