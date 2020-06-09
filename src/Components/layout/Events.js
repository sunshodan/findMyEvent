import React, { Component } from 'react'
import EventCard from './EventCard';
import { connect } from 'react-redux'
import { getEvents } from '../../redux/actions/eventActions';

import Anime from 'react-anime';

class RecentEvents extends Component {

    componentDidMount() {
        this.props.getEvents();
    }
    render() {
        const { events, searches } = this.props;
        return (
            <div className="recent-events">
                {searches ? (
                    <h1 className="txt">Search <span className="highlight">results</span> ....</h1>
                ) : (
                        <h1 className="txt">Recent <span className="highlight">events</span> around you....</h1>
                    )}
                <div className="events">
                    {events.length === 0 ? (
                        <h1 className="notfound">Can't find anything related to your query..</h1>
                    ) : (
                        events.map((event,i) => (
                            <Anime delay={100*i+200}
                                scale={[.1, .9]}
                                opacity={[.1, 1]}
                                key={i}
                            >
                        <EventCard event={event} />
                        </Anime>
                        ))
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    events: state.event.events,
    searches: state.event.searches
})
export default connect(mapStateToProps, { getEvents })(RecentEvents);