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
from 'react-icons/si';

const header = {
  homepage: 'https://github.com/Lee6413?tab=repositories',
  title: 'LC.',
}

const info = {
  name: "Lee Carr",
  title: "Full-Stack Engineer",
  description: "I am a creative problem solver, debugging fan, team player, and effective communicator.",
  resume: "https://docs.google.com/document/d/1vVORx14wYfx51pOyjc42MZWMHlScZIiBiF80FCs6Ayo/edit?usp=sharing",
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

const projects = [
  {
    name: 'TinyBnB',
    description:
      'A full stack Airbnb clone where users can book and host places, and give review to places they have stayed.',
    points: [
      'Integrated Google Maps API to dynamically present spot locations based on user parameters.',
      'Harnessed the unidirectional state management of Redux to simplify React components and directly manage data for form inputs and form submissions.',
      'Incorporated React-Redux container and Redux selector patterns to architect highly scalable and uni-directional front-end state management.'
    ],
    stack: ['React/Redux', 'JavaScript', 'Python', 'Flask', 'HTML', 'CSS', 'PostgresSQL', 'Google Map API'],
    sourceCode: 'https://github.com/wylin94/AAw19d1-Tinybnb-Clone',
    livePreview: 'https://wyl-tinybnb.herokuapp.com/',
    photo: 'https://i.ibb.co/gj1GWdb/Screenshot-2022-03-24-143514.png'
  },
  {
    name: 'Aniflix',
    description:
      'A full stack Netflix clone where users can browse anime content.',
    points: [
      'Integrated React Player with Redux to playback video content by dispatching actions to retrieve the appropriate data for the info requested, allowing users to view clips of desired shows.',
      'Implemented custom search by frontloading all available show names into Redux to be filtered in the front end.',
      'Simplified persisting a user’s profile state by utilizing local storage in order to allow multiple profiles under one user to retain their own watchlists.'
    ],
    stack: ['React/Redux', 'JavaScript', 'Python', 'Flask', 'PostgresSQL', 'SQLAlchemy', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/Lee6413/Aniflix',
    livePreview: 'https://aniflix-aa.herokuapp.com/',
    photo: 'https://i.ibb.co/fY6qF0L/Screenshot-2022-03-24-143916.png'
  },
  {
    name: 'Snapr',
    description:
      'Social photography website focused on photographs. Adaptation of Flickr',
    points: [
      'Achieved 50% faster individual React component load times by restructuring API queries to prevent images above a designated resolution/restructuring a complex database query into many single responsibility querie',
      'Ensured user privacy through front and backend authentication by employing React Router and password encryption via Bcrypt, allowing users to only edit their information when logged in',
    ],
    stack: ['React/Redux', 'Express', 'Sequelize', 'postgreSQL', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/Lee6413/Snapr',
    livePreview: 'https://snapr-lee.herokuapp.com/',
    photo: 'https://i.ibb.co/X5FSDmM/Screenshot-2022-03-24-143802.png'
  },
]

export { header, info, skills, projects }
