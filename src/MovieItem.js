import React from "react"
import Img from "react-cool-img"
import "./MovieItem.css"

class MovieItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        var releaseDate = new Date(this.props.data.releaseDate).toDateString().slice(4)
        return (
            <div className="card">
                <div className="card-body">
                    <div className="card-img">
                        <Img 
                        placeholder="https://www.solidbackgrounds.com/images/2560x1440/2560x1440-gray-solid-color-background.jpg"
                        src={this.props.data.title.image ? this.props.data.title.image.url : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/1200px-Question_mark_%28black%29.svg.png"} 
                        alt="Movie" 
                        lazy={true}/>
                        <div className="movie-info">
                            <p className="certificate">{this.props.data.certificates ? this.props.data.certificates.US[0].certificate : ""}</p>
                            <p className="length">{this.props.data.title.runningTimeInMinutes} minutes</p>
                            <p className="genres">{this.props.data.genres.join(', ')}</p>
                            <p className="plot">{this.props.data.plotSummary ? this.props.data.plotSummary.text : 
                                this.props.data.plotOutline ? this.props.data.plotOutline.text : "No plot yet"}</p>
                        </div>
                    </div>
                    <div className="card-info">
                        <h4>{this.props.data.title.title}</h4>
                        <p>{this.props.comingSoon ? releaseDate :
                        this.props.data.ratings.rating ? this.props.data.ratings.rating+"/10" : "No Rating"}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieItem