import React from "react"
import "./MovieItem.css"

function MovieItem(props) {
    return (
        <div className="card">
            <div className="card-body">
                <div className="card-img">
                    <img src={props.data.title.image.url} alt="Movie"></img>
                    <div className="movie-info">
                        <p className="certificate">{props.data.certificates ? props.data.certificates.US[0].certificate : ""}</p>
                        <p className="length">{props.data.title.runningTimeInMinutes} minutes</p>
                        <p className="genres">{props.data.genres.join(', ')}</p>
                        <p className="plot">{props.data.plotSummary ? props.data.plotSummary.text : 
                            props.data.plotOutline ? props.data.plotOutline.text : "No plot yet"}</p>
                    </div>
                </div>
                <div className="card-info">
                    <h4>{props.data.title.title}</h4>
                    <p>{props.data.ratings.rating ? props.data.ratings.rating+"/10" : "No Rating"}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieItem