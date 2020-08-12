import React from "react"
import { Link } from 'react-router-dom'
import "./FrontPage.css";

function FrontPage() {
    return (
        <div>
            <div className="hero-image">
                <div className="container">
                    <h1>Movie Info</h1>
                    <h2>Learn about movies</h2>
                    <p>Subscribe to our mailing list to stay updated with upcoming movies</p>
                    {/* convert into form for actual website */}
                    <div className="subscription">
                        <input className="email" placeholder="johndoe@example.com"></input>
                        <button className="btn" >Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="body-text">
                <h2>Browse our wide selection of movies. <br/> Learn about classics and future releases.</h2>
                <Link className="explore-btn" to="/movies">Explore now</Link>
            </div>
        </div>
    )
}

export default FrontPage