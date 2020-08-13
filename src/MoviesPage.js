import React from 'react'
import "./MoviesPage.css";
import { Link } from 'react-router-dom'

class MoviesPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTab: "most-popular",
            data: {}
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        // add API call here 
    }

    handleChange(event) {
        this.setState({
            currentTab: event.target.getAttribute('value')
        })  
    }

    render() {
        return (
            <div>
                <div className="header-bar">
                    <Link to="/">Movie Info</Link>
                </div>
                <h1 className="title">Movie Selection</h1>
                <ul className="navbar">
                    <li className={this.state.currentTab === "most-popular" ? "active" : undefined} value="most-popular" onClick={this.handleChange}>Most Popular</li>
                    <li className={this.state.currentTab === "top-rated" ? "active" : undefined} value="top-rated" onClick={this.handleChange}>Top Rated</li>
                    <li className={this.state.currentTab === "future-release" ? "active" : undefined} value="future-release" onClick={this.handleChange}>Future Release</li>
                </ul>
                <div className="movies">
                    {this.state.currentTab}
                </div>
            </div>
        )
    }
}

export default MoviesPage