import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';


class EventCard extends React.Component {
    render() {
        const { event } = this.props;
        const { description } = event;
        const len = description.length > 100 ? 100 : description.length;
        const trimmedDesc = description.substr(0, len);
        return (
            <div className="eventcard">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={event.image} />
                    <Card.Body>
                        <Card.Title>{event.title} <span className="eventcity">{event.city}</span></Card.Title>
                        <Card.Text>
                            {trimmedDesc}...
                        </Card.Text>
                        <p className="event-date">{event.date} - {event.city}</p>
                        <Button variant="primary">
                            <Link to={`/events/${event.id}`} className="link">Know more</Link>
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default EventCard;