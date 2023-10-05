import React from 'react';
import "./works.css";
import portfolio from "../../assets/portfolio.jpg";


function Works() {
  return (
    <section id="works">
        <h2 className="worksTitle">MY Portfolio</h2>
        <span className="worksDesc">i take pride in paying attention to the smallest details and making sure that my work is pixel prefect. 
        i am excited to bring my skills and experience to help businesses achieve <br/>their goals and create a strong online presence </span>
        <div className="worksImgs">
            <img src={portfolio} alt="" className="worksImg" />
            <img src={portfolio} alt="" className="worksImg" />
            <img src={portfolio} alt="" className="worksImg" />
            <img src={portfolio} alt="" className="worksImg" />
            <img src={portfolio} alt="" className="worksImg" />
            <img src={portfolio} alt="" className="worksImg" />
        </div>
        <button className="worksBtn">See More...</button>
    </section>
  )
}

export default Works
