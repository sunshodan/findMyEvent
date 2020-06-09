import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'
import { addEvent } from '../../redux/actions/eventActions';
import { connect } from 'react-redux'

class AddEvent extends Component {

    state = {
        title: "",
        description: "",
        date: "",
        image: "",
        city: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const id = uuid();
        const data = { id, ...this.state }

        this.props.addEvent(data);
        this.props.history.push('/')
    }
    render() {
        return (
            <div className="addevent">
                <h1>Add Event</h1>
                <form onSubmit={this.handleSubmit}>

                    <input type="text" name="title" placeholder="Enter title" onChange={this.handleChange} autoComplete="off" required />
                    <textarea placeholder="Enter description" name="description" onChange={this.handleChange} autoComplete="off" required />
                    <input type="date" name="date" onChange={this.handleChange} autoComplete="off" required />
                    <input type="text" placeholder="Enter image link" name="image" onChange={this.handleChange} autoComplete="off" required />
                    <input type="text" placeholder="Enter city" name="city" onChange={this.handleChange} autoComplete="off" required />
                    <button type="submit">Add Event</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addEvent })(AddEvent);