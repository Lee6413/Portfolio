import { useEffect } from 'react'
import { skills } from '../../context/appendix'
import './skills.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <section data-aos='fade-up-left' className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill, index) => (
          <>
            <li key={index} className='skills__list-item btn btn--plain'>
              {skill.logo}{skill.type}
              <div className='percent' >
                <div className='percent-colored' style={{ width: `${skill.percent}%` }}></div>
              </div>
            </li>
          </>
        ))}
      </ul>
    </section>
  )
}

export default Skills
