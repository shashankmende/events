// Write your code here
import './index.css'

const EventItem = props => {
  const {event, isClicked, onClickItem} = props
  const {id, imageUrl, name, location, registrationStatus} = event
  console.log('event item id', isClicked)
  const clickClassName = isClicked ? 'eventClass' : ''

  const onclickListItem = () => {
    onClickItem(id, registrationStatus)
  }

  return (
    <li className="list-item" onClick={onclickListItem}>
      <button type="button">
        <img
          src={imageUrl}
          alt="event"
          className={`event-img ${clickClassName}`}
        />
        <p className="event-heading">{name}</p>
        <p className="event-heading">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
