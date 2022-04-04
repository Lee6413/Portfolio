import { useState } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './projectcontainer.css'

const ProjectContainer = ({ project }) => {
  const [showPhoto, setShowPhoto] = useState(true)

  return (
    <>
      <div className='project'>
        <h3>{project.name}</h3>

        <p className='project__description'>{project.description}</p>
        {project.stack && (
          <ul className='project__stack'>
            {project.stack.map((item, index) => (
              <li key={index} className='project__stack-item'>
                {item}
              </li>
            ))}
          </ul>
        )}

        {project.sourceCode && (
          <a
            href={project.sourceCode}
            aria-label='source code'
            className='link link--icon'
            target='_blank' rel='noreferrer'
          >
            <GitHubIcon />
          </a>
        )}

        {project.livePreview && (
          <a
            href={project.livePreview}
            aria-label='live preview'
            className='link link--icon'
            target='_blank' rel='noreferrer'
          >
            <LaunchIcon />
          </a>
        )}
      </div>

      <div onClick={() => setShowPhoto(!showPhoto)} className={`${showPhoto ? 'active-photo' : 'unactive-photo'} project__photo`} style={{ backgroundImage: showPhoto ? `url(${project.photo})` : '' }}>
        {!showPhoto && <p className='click-me-photo'>Click for photo</p>}
      </div>
      <div onClick={() => setShowPhoto(!showPhoto)} className={`${!showPhoto ? 'active-bullets' : 'unactive-bullets'} bullet-points`}>
        {showPhoto ? <p className='click-me-details'>Click for details</p> :
          <>
            {project.points && project.points.map(point => (
              <>
                <p className='p__smaller'> <span className='point'>•</span>{point}</p>
              </>
            ))}
          </>
        }
      </div>
    </>
  )
}
export default ProjectContainer
