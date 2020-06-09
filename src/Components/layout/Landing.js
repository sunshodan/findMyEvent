import React, { Component } from 'react'
import RecentEvents from './Events';
import { connect } from 'react-redux';
import { searchEvents } from '../../redux/actions/eventActions';

class Landing extends Component {
    state = {
        place: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchEvents(this.state.place);
        this.setState(
            { place: '' }
        )
        window.scrollTo(0, 600);
    }

    render() {
        return (
            <>
                <div className="landing">
                    <div className="landing-content">
                        <h1>Want to Search for <span className="highlight">Events</span> near you?</h1>
                        <p>Search below and get the complete information about the events in any city or state.</p>
                    </div>
                    <div className="landing-form">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="Enter place to search.." name="place" value={this.state.place} onChange={this.handleChange} id="place" autoComplete="off" />
                            <button type="submit" id="search"><i className="far fa-search"></i></button>
                        </form>
                    </div>
                </div>
                <RecentEvents />
            </>
        )
    }
}

export default connect(null, { searchEvents })(Landing);