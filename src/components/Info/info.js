import { useEffect } from "react";
// import GitHubIcon from '@material-ui/icons/GitHub'
// import LinkedInIcon from '@material-ui/icons/LinkedIn'
// import { HiOutlineMail } from 'react-icons/fa'
// import { FaAngellist } from 'react-icons/fa'
import { info } from '../../context/appendix'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './info.css'

const Info = () => {
  const { name, title, email, phone, city, description, linkedin, github } = info

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <div data-aos='fade-up' className='info center'>
      {name && (
        <h1>
          Hi, I am <span className='info-name'>{name}.</span>
        </h1>
      )}
    </div>
  )
}

export default Info
