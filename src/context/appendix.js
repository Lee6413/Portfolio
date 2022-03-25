import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiSequelize,
  SiExpress,
  SiPython,
  SiFlask,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiGit,
  SiDocker,
  SiAmazonaws,
  SiHeroku,
}
  from 'react-icons/si'

const header = {
  homepage: 'https://github.com/Lee6413?tab=repositories',
  title: 'LC.',
}

const info = {
  name: "Lee Carr",
  title: "Full-Stack Engineer",
  description: "I am a creative problem solver, debugging fan, team player, and effective communicator.",
  resume: 'https://example.com',
  city: "Riverside, CA",
  contact: {
    email: "jarumlcarr@gmail.com",
    phone: "+1 951 956 9623",
    linkedin: "https://www.linkedin.com/in/lee-carr/",
    github: "https://github.com/Lee6413"
  },
}

const skills = [
  { type: 'JavaScript', logo: <SiJavascript className='skills__icon' />, percent: 100 },
  { type: 'React.js', logo: <SiReact className='skills__icon' />, percent: 100 },
  { type: 'Redux', logo: <SiRedux className='skills__icon' />, percent: 100 },
  { type: 'Node.js', logo: <SiNodedotjs className='skills__icon' />, percent: 100 },
  { type: 'Sequelize', logo: <SiSequelize className='skills__icon' />, percent: 80 },
  { type: 'Express', logo: <SiExpress className='skills__icon' />, percent: 85 },
  { type: 'Python', logo: <SiPython className='skills__icon' />, percent: 85 },
  { type: 'Flask', logo: <SiFlask className='skills__icon' />, percent: 75 },
  { type: 'PostgreSQL', logo: <SiPostgresql className='skills__icon' />, percent: 80 },
  { type: 'HTML5', logo: <SiHtml5 className='skills__icon' />, percent: 90 },
  { type: 'CSS3', logo: <SiCss3 className='skills__icon' />, percent: 90 },
  { type: 'Git', logo: <SiGit className='skills__icon' />, percent: 80 },
  { type: 'Docker', logo: <SiDocker className='skills__icon' />, percent: 70 },
  { type: 'AWS', logo: <SiAmazonaws className='skills__icon' />, percent: 50 },
  { type: 'Heroku', logo: <SiHeroku className='skills__icon' />, percent: 60 }
]



export { header, info, skills }
