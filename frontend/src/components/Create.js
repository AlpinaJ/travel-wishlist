import React from 'react';
import card1Path from "../images/create1.png";
import card2Path from "../images/create2.png";

function Create() {
    return (
        <div className="create">
            <h2 className="section__title">Create</h2>
            <p className="section__paragraph"> Do you like to travel like we?
                Do you want to share your impressions of travelling with other people?
                Just create a new place.</p>
            <div className="create__cards">
                <div className="create__card">
                    <img src={card1Path} className="create__image"/>
                    <p className="create__card-paragraph">Add photos, description and your impression of the place.</p>
                </div>
                <div className="create__card">
                    <img src={card2Path} className="create__image"/>
                    <p className="create__card-paragraph">Be inspired by the number of people who decide
                        to visit this place because of your story.</p>
                </div>
            </div>
            <a href="#" className="create__link">CREATE PLACE -></a>
        </div>
    )
}

export default Create;