import React from 'react'
import { connect } from 'react-redux';
import { getEvent, deleteEvent, searchEvents, getEvents } from '../../redux/actions/eventActions';
import { Button, Modal } from 'react-bootstrap';
import EventCard from './EventCard';

class EventDetail extends React.Component {

    state = {
        show: false
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getEvent(id);
        this.props.getEvents();
    }

    deleteEvent = (id) => {
        this.props.deleteEvent(id);
        this.props.history.push('/');
    }

    handleClose = () => this.setState({ show: false })
    handleShow = () => this.setState({ show: true })

    renderEvent = (e) => {
        if (e.city === this.props.event.city && e.id !== this.props.event.id) {
            return <EventCard key={e.id} event={e} />
        }
    }

    render() {
        const { event, events } = this.props;
        const { show } = this.state;
        return (
            <div>
                <div className="event-details">
                    <div className="event-image">
                        <img src={event.image} alt="event" />
                    </div>
                    <div className="event-data">
                        <h1>{event.title}</h1>
                        <p>{event.description}</p>
                        <p className="event-date">{event.date}</p>
                        <p className="event-date" style={{ marginTop: '-2px' }}>City: {event.city}</p>
                        <div className="event-btns">
                            <Button varient="primary" className="event-btn mr-2">Are you going?</Button>
                            <Button varient="danger" className="btn-danger my-2" onClick={this.handleShow}>Delete Event</Button>
                        </div>
                    </div>
                    <Modal show={show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Are you sure?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>You wanted to delete this Event.</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                No
                        </Button>
                            <Button variant="danger" onClick={() => this.deleteEvent(event.id)}>
                                Yes delete
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className="eventSug">
                    <h1>More <span className="highlight">events</span> in {event.city}....</h1>
                    <div className="sug-wrapper">
                        {events.map(e => this.renderEvent(e))}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    event: state.event.event,
    events: state.event.events
})

export default connect(mapStateToProps, { getEvent, getEvents, deleteEvent, searchEvents })(EventDetail);