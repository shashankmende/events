import {Component} from 'react'
import EventItem from '../EventItem'
import './index.css'

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png',
    name: 'Colonial Fest',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
]

const registrationConstants = {
  initial: 'INITIAL',
  registered: 'REGISTERED',
  closed: 'REGISTRATIONS_CLOSED',
  yetTo: 'YET_TO_REGISTER',
}

// Write your code here
class Events extends Component {
  state = {
    eventItemId: eventsList[0].id,
    regStatus: registrationConstants.initial,
  }

  returnLeftContainer = () => {
    const {eventItemId} = this.state

    return (
      <div className="event-items-container">
        <h1 className="event-heading">Events</h1>
        <ul className="unordered-list-items-container">
          {eventsList.map(each => (
            <EventItem
              event={each}
              key={each.id}
              isClicked={each.id === eventItemId}
              onClickItem={this.onClickItem}
            />
          ))}
        </ul>
      </div>
    )
  }

  returnInitialStatus = () => (
    <p>Click on an event, to view its registration Details</p>
  )

  returnRegistered = () => {
    const {regStatus} = this.state
    return (
      <>
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
        />
        <h1>You have already registered for the event</h1>
      </>
    )
  }

  returnClosed = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        alt="registrations closed"
        className="closed-img"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registration soon!</p>
    </>
  )

  returnYetToRegister = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-img"
      />
      <p>A live performance brings so much to your relationship with dance</p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </>
  )

  updateResult = () => {
    const {regStatus} = this.state
    switch (regStatus) {
      case registrationConstants.registered:
        return this.returnRegistered()
      case registrationConstants.closed:
        return this.returnClosed()
      case registrationConstants.initial:
        return this.returnInitialStatus()

      case registrationConstants.yetTo:
        return this.returnYetToRegister()
      default:
        return null
    }
  }

  onClickItem = (id, status) => {
    this.setState(
      {
        eventItemId: id,
        regStatus: status,
      },
      this.updateResult,
    )
  }

  render() {
    const {regStatus} = this.state
    return (
      <div className="events-container">
        {this.returnLeftContainer()}
        <div className="right-container">{this.updateResult()}</div>
      </div>
    )
  }
}

export default Events
