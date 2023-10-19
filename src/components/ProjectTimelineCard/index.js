// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    duration,
    description,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-timeline-card-container">
      <img
        src={imageUrl}
        className="project-timeline-card-image"
        alt="project"
      />
      <div className="project-title-and-duration-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="project-timeline-description">{description}</p>
      <a href={projectUrl} className="project-timeline-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
