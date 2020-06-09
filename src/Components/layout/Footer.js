import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
            <p>Made with <i className="fa fa-heart" aria-hidden="true"></i> By Sunshodan.</p>
            <p>copyright &copy; {new Date().getFullYear()}</p>
        </div>
    )
}
