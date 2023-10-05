import React from 'react'
import "./intro.css"
import logo3 from '../../assets/logo3.jpg'
// import logo4 from '../../assets/logo4.png'
// import logo5 from '../../assets/logo5.webp'
import logo7 from '../../assets/logo7.png'
import { Link } from 'react-scroll'


function Int() {
  return (
    
    <section className="intro">
      <div className="introContent">
        <spnan className="hello">Hello,</spnan>
        <span className="introText">i'm <span className="introName">Neelesh</span> <br/>Website Designer</span>
        <p className="introPara">I am a skilled web designer with experience in creating <br/>visually appealing and user friendly websites.</p>
        <Link><button className="btn"><img src={logo7} alt='Hire Me' className='btnImg'/>Hire Me</button></Link>
      </div>
      <img src={logo3} alt="profile" className="bg" />
    </section>
  )
}

export default Int
