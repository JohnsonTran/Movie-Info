import React from "react"
import MovieData from './MovieData'
import MovieItem from "./MovieItem"

class MovieList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imgsLoaded: 0,
        }
    }

    render() {
        let movieItems
        if (this.props.currentTab === "most-popular") {
            movieItems = MovieData.mostPopularMovies.map(elem => {
                return <MovieItem data={elem} isLoading={true} />
            })
        } else if (this.props.currentTab === "top-rated") {
            movieItems = MovieData.topRatedMovies.map(elem => {
                return <MovieItem data={elem} isLoading={true} />
            })
        } else {
            movieItems = MovieData.comingSoonMovies.map(elem => {
                return <MovieItem data={elem} comingSoon="true" isLoading={true} />
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