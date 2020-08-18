import React from "react"
import MovieItem from "./MovieItem"

class MovieList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let movieData = this.props.data
        
        if (this.props.genreFilter !== "None") {
            movieData = movieData.filter(movie => movie.genres.includes(this.props.genreFilter))
        } 
        let movieItems = movieData.map(elem => {
            return <MovieItem data={elem} />
        })

        return (
            <div className="movies">
                {movieItems}
            </div>
        )
    }
}

export default MovieList