import React from "react"
import MovieData from './MovieData'
import MovieItem from "./MovieItem"

class MovieList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let movieItems
        if (this.props.currentTab === "most-popular") {
            movieItems = MovieData.mostPopularMovies.map(elem => {
                return <MovieItem data={elem} />
            })
        } else if (this.props.currentTab === "top-rated") {
            movieItems = MovieData.topRatedMovies.map(elem => {
                return <MovieItem data={elem} />
            })
        } else {
            movieItems = MovieData.comingSoonMovies.map(elem => {
                return <MovieItem data={elem} comingSoon="true" />
            })
        }

        return (
            <div className="movies">
                {movieItems}
            </div>
        )
    }
}

export default MovieList