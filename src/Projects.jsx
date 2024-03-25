/* eslint-disable react/prop-types */
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
const Projects = ({ projects }) => {
  console.log('tang', projects)
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      className="swiper_container"
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {/* "video":"video1",
    "project_name":"project_name1",
    "description":"-adf;klj\n -asdf;lkj",
    "tech_used":["nodejs","c++"],
    "github_url":"url1" */}
      {projects.map((data, index) => {
        return (
          <SwiperSlide key={index} className="swiper_slide">
           
            <h2 id = "projects"className = "project_name">{data.project_name}</h2>
            {/* <div className="project_video">{data.video}</div> */}
            <video className="project_video" controls width="100%">
            <source src={`https://my-portfolio-server-eosin.vercel.app/videos/${data.video}`} type="video/mp4" />
            {/* <source src={`http://localhost:3000/videos/${data.video}`} type="video/mp4" /> */}

            Your browser does not support the video tag.
          </video>
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
