import React from 'react';
import aboutPath from "../../images/about.png"
import "./About.css";

function About(){
    return(
        <div className="about">
            <div className="about__overlay"/>
            <div className="about__text">
                <h1 className="about__title">The Great Outdoors</h1>
                <h3 className="about__description">The world is more amazing than dreams...</h3>
            </div>
            <img className="about__image" src={aboutPath}/>
        </div>
    )
}

export default About;