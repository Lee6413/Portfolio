import { useEffect } from 'react'
import { projects } from '../../context/appendix'
import ProjectContainer from '../ProjectContainer/projectcontainer'
import './projects.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <section data-aos='fade-up-right' id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project, index) => (
          <ProjectContainer key={index} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
