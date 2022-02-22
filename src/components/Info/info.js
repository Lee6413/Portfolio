import { useEffect } from "react";
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email';
// import LinkedInIcon from '@material-ui/icons/LinkedIn'
// import { HiOutlineMail } from 'react-icons/fa'
// import { FaAngellist } from 'react-icons/fa'
import { info } from '../../context/appendix'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './info.css'

const Info = () => {
  const { name, title, description, resume, contact } = info

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

      {title && <h2 className='info_title'>A {title}.</h2>}

      {description && <p className='info_desc'>{description}</p>}

      <div classNmae='info_contact center'>

        {resume && (
          <a href='/Test-Resume.PDF' target='_blank'>
            <span type='button' className='btn btn-outline'>
              Resume
            </span>
          </a>
        )}

        {contact && (
          <>
            {contact.github && (
              <a
                href={contact.github}
                target='_blank'
                rel='noreferrer'
                aria-label='github'
                className='link link--icon first--link'
              >
                <GitHubIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Info
