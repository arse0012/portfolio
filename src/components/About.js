import React from 'react'
import '../About.css'

function About(props) {
    return (
        <div className="about">
            <img className="profile_pic"/>
            <div className="about_image">
                <h1>{props.about}</h1>
                <p className="about_info">{props.firstParagraph}</p>
                <p className="about_info">{props.lastParagraph}</p>
                <h5>{props.contact}</h5>
                <p className="about_info">{props.email}</p>
                <p className="about_info">{props.telefone}</p>
            </div>
        </div>
    );
}

export default About