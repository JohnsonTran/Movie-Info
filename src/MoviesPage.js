import React from 'react'
import "./MoviesPage.css"
import { Link } from 'react-router-dom'
import MovieList from './MovieList'
import MovieData from './MovieData'

class MoviesPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTab: "most-popular",
            genreFilter: "None"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        // have to use getAttribute because React doesn't get them by default like for input
        if (event.target.getAttribute('name') === "currentTab") {
            let name = event.target.getAttribute('name')
            let value = event.target.getAttribute('value')
            // reset the genre filter when the user changes tabs
            this.setState(prevState => ({
                [name]: value,
                genreFilter: prevState.currentTab !== value ? "None" : prevState.genreFilter
            }))
        } else {
            this.setState({
                [name]: value,
            })
        }
    }

    render() {
        let listData
        if (this.state.currentTab === "most-popular") {
            listData = MovieData.mostPopularMovies
        } else if (this.state.currentTab === "top-rated") {
            listData = MovieData.topRatedMovies
        } else {
            listData = MovieData.comingSoonMovies
        }

        let genres = []
        listData.forEach(elem => {
            elem.genres.forEach(genre => {
                if (!genres.includes(genre)) {
                    genres.push(genre)
                }   
            })
        })
        genres.sort()
        
        return (
            <div>
                <div className="header-bar">
                    <Link to="/">Movie Info</Link>
                </div>
                <div className="container">
                    <h1 className="title">Movie Selection</h1>
                    <ul className="navbar">
                        <li name="currentTab" className={this.state.currentTab === "most-popular" ? "active" : undefined} value="most-popular" onClick={this.handleChange}>Most Popular</li>
                        <li name="currentTab" className={this.state.currentTab === "top-rated" ? "active" : undefined} value="top-rated" onClick={this.handleChange}>Top Rated</li>
                        <li name="currentTab" className={this.state.currentTab === "future-release" ? "active" : undefined} value="future-release" onClick={this.handleChange}>Future Release</li>
                    </ul>
                    <div className="genreSelect">
                        <select name="genreFilter" value={this.state.genreFilter} onChange={this.handleChange}>
                            <option value="None">Choose a genre</option>
                            {genres.map(genre => {
                                return <option key={genre} value={genre}>{genre}</option>
                            })}
                        </select>
                    </div>
                    <MovieList data={listData} genreFilter={this.state.genreFilter} comingSoon={this.state.currentTab === "future-release"}/>
                </div>
            </div>
        )
    }
}

export default MoviesPage