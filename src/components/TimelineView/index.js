// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const renderTimelineViewCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.duration} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.duration} courseDetails={item} />
  }

  return (
    <div className="ccbp-timeline-app-container">
      <div className="ccbp-timeline-container">
        <div className="ccbp-timeline-header-container">
          <h1 className="ccbp-timeline-heading">
            MY JOURNEY OF <br />
            <span className="ccbp-text">CCBP 4.0</span>
          </h1>
        </div>
        <Chrono
          items={timelineItemsList}
          theme={{secondary: 'white'}}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachTimelineItem =>
            renderTimelineViewCard(eachTimelineItem),
          )}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
