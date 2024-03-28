/* eslint-disable react/prop-types */
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
const Projects = ({ projects }) => {
  
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      className="swiper_container"
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {projects.map((data, index) => {
        return (
          <SwiperSlide key={index} className="swiper_slide">
           
            <h2 className = "project_name">{data.project_name}</h2>
           
            <img className="project_image" src={`https://my-portfolio-server-eosin.vercel.app/images/${data.image}`} alt="project image" />
            {/* <img className="project_image" src={`http://localhost:3000/images/${data.image}`} alt="project image" /> */}

            <div className='project_techUsed_container'>
            {data.tech_used.map((tech,index)=>{
              return <p className = "p-techUsed"key = {index}>{`\u2022${tech}\u00A0`}</p>
            })}
            </div>
            <p className = "project_description">{data.description}</p>
            
            
            <a className = "github_repo_link" href={data.github_url}>Check Github Repository</a>
           
            
          </SwiperSlide>
        )
      })}
      ...
    </Swiper>
  )
}
export default Projects
