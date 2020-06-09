import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

class Navbar extends Component {
    state = {
        mobile: false
    }
    toggleNav = () => {
        document.querySelector('.nav-mobile').classList.toggle('showNav');
        document.body.classList.toggle('stopScroll');
        this.setState({
            mobile: !this.state.mobile
        })
    }
    render() {
        return (
            <div className="navbar">
                <div className="nav-logo">
                    <Link to="/" className="link" onClick={() => {
                        if (this.state.mobile) {
                            this.toggleNav()
                        }
                    }}><h1>Find My Events</h1></Link>
                </div>
                <div className={classNames('nav-group', 'nav-mobile')}>
                    <Link to="/addEvent" className="nav-item" onClick={() => {
                        if (this.state.mobile) {
                            this.toggleNav()
                        }
                    }}>Add Event</Link>
                </div>
                <span id="close" onClick={this.toggleNav}>
                    {this.state.mobile ? (<i className="far fa-times"></i>) : (<i className="fad fa-bars"></i>)}
                </span>
            </div>
        )
    }
}

export default Navbar;