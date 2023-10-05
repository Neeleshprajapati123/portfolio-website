import React from 'react'
import "./contact.css"
import client3 from "../../assets/client3.png"
import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.jpg"
import icon4 from "../../assets/icon4.jpg"

function Contact() {
  return (
    <section id="clientPage">
        <div id="clients">
        <h className="clientTitle">My Clients</h>
        <p className="clientDesc">i have had the opportunity to work with a diverse group of companies.Some of the natable<br/>
        companies i have worked with include.</p>
        <div className="clientImgs">
            <img src={client3} alt="client" className="clientImg" />
            <img src={client3} alt="client" className="clientImg" />
            <img src={client3} alt="client" className="clientImg" />
            <img src={client3} alt="client" className="clientImg" />
        </div>
    </div>

    <div id="contact">
        <h className="contactTitle">Contact Me</h>
        <p className="contactDesc">please fill out the form below to discuss any work app.</p>
        <form  className="contactForm">
            <input type="text" className="name"  placeholder='Your Name'/>
            <input type="text" className="email" placeholder='your Email' />
            <textarea name="message" className='msg' rows="5" placeholder='Your Message'></textarea>
            <button type="submit"  value="send" className="submitBtn">submit</button>
        </form>
        <div className="links">
            <img src={icon1} alt="" className="linkImg" />
            <img src={icon2} alt="" className="linkImg" />
            <img src={icon3} alt="" className="linkImg" />
            <img src={icon4} alt="" className="linkImg" />
        </div>


    </div>
    </section>
    // <div id="contact"></div>
  )
}

export default Contact
