import { info } from '../../context/appendix'
import './contact.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Contact = () => {
  const { contact } = info

  useEffect(() => {
    Aos.init({ duration: 1500, once: true })
  }, [])

  return (
    <section data-aos='fade-up' className='section contact center' id='contact'>
      <h2 className='section__title'>Get in touch</h2>
      <p className='say-hello'>I am currently looking for any new opportunities, my inbox is always open. Whether you have a question, want to say hi, or have an interesting opportunity. I’ll get back to you promptly!</p>
      <a target='_blank' rel='noreferrer' href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Say Hello
        </span>
      </a>
    </section>
  )
}

export default Contact
