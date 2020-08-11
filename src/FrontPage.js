import React from "react"
import "./FrontPage.css";

function FrontPage() {
    return (
        <div>
            <div className="hero-image">
                <div className="container">
                    <h1>Movies Info</h1>
                    <h2>Stay updated with movies</h2>
                    {/* convert into form for actual website */}
                    <div className="subscription">
                        <input className="email" placeholder="johndoe@example.com"></input>
                        <button className="btn" >Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="body-text">
                <h2>Browse our wide selection of movies. Learn about classics and future releases.</h2>
                <button className="explore-btn">Explore now</button>
            </div>
        </div>
    )
}

export default FrontPage