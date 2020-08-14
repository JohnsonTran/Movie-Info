import React from "react"
import "./MovieItem.css"

function MovieItem(props) {
    return (
        <div className="card">
            <div className="card-body">
                <img src={props.image} alt="Movie"></img>
                <h4>{props.title}</h4>
            </div>

        </div>
    )
}

export default MovieItem