import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import './about.css'

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <div data-aos='fade-up-left' className='about-me center' id='about'>
      <h2>About Me</h2>
      <div className='about-me__content'>
        <div className='bio'>
          <div className=''>
            <p>
              <span className='span-color'>Software Engineer</span>  based in Southern California. I have a found passion and dedicated enthusiasm for all things programming and learning. Simply put, I love coding. The constant stream of  <span className='span-color'>innovative technologies and information</span>. The reward of finding the source of that pesky error you've been staring at <span className='span-color'>for just the right amount of time</span>. The creativity and balance of refactoring unpolished code to something informative, readable, and clever.
            </p>
            <p>
              I've always had a love for puzzles and for me, programming has been the biggest one so far. To me, there's no greater thrill than resolving a pesky bug and seeing the culmination of a fully-functioning project.
            </p>
            <p>
              I pride myself on being prompt, organized, asking high quality questions, and working well with a team. I have pronounced experience with <span className='span-color'>Javascript, React, Redux, Node.js, Python, and Flask</span>.
            </p>
          </div>
        </div>
        <img className='avatar' src="https://i.ibb.co/P5BtjBv/10156156-655310797856247-3082783434787948748-n.jpg" alt="" />
      </div>
    </div>
  );
};

export default About
