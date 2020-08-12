import React from 'react'
import "./MoviesPage.css";
import { Link } from 'react-router-dom'

class MoviesPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className="header-bar">
                    <Link to="/">Movie Info</Link>
                </div>
                <h1>It worked</h1>
                <p>Most popular, top rated, coming soon</p>
            </div>
        )
    }
}

export default MoviesPage