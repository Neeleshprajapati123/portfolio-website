import React from 'react';
import "./skills.css";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import bootStrap from "../../assets/bootStrap.jpg";
import javaScript from "../../assets/javaScript.png";
import react from "../../assets/react.png";

function Skills() {
    return (
        <secetion id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a skilled web designer with experience in creating visually appealing and user friendly websites. </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={html} alt="html" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>HTML</h2>
                        <p>HTML stands for Hyper Text Markup Language.</p>

                    </div>
                </div>

                <div className="skillBar">
                    <img src={css} alt="css" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>CSS</h2>
                        <p>CSS is used to define styles for your web pages.</p>

                    </div>
                </div>

                <div className="skillBar">
                    <img src={bootStrap} alt="bootStrap" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>BOOTSTRAP</h2>
                        <p>Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites.</p>

                    </div>
                </div>

                <div className="skillBar">
                    <img src={javaScript} alt="javaScript" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>JAVASCRIPT</h2>
                        <p>JavaScript is a dynamic programming language that's used for web development.</p>

                    </div>
                </div>

                <div className="skillBar">
                    <img src={react} alt="react" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>REACTJS</h2>
                        <p>Facebook has created a Create React Application with everything you need to build a React app.</p>

                    </div>
                </div>
            </div>
        </secetion>
    )
}

export default Skills
