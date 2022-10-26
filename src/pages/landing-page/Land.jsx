import React from 'react'
import "./Land.scss"
import Navbar from '../../components/navbar/Navbar'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const Land = () => {
  return (
    <div className='home'>
      <Navbar />
      <section className='intro'>
        <div className='Content'>
          <div className='left-content'>
            <div className='head-line'>
              A Team of <br /> <span className="head-line2">Enthusiastic</span> and <span className="head-line2">Passionate </span>
              <ul className="dynamic-txt">
                <li><span id='word1'>ENGINEERS</span></li>
                <li><span id='word2'>STUDENTS</span></li>
                <li><span id='word3'>AND</span></li>
                <li><span id='word4'>FRIENDS</span></li>
              </ul> <span id='static'>ENGINEERS</span>
            </div>
            <div className='info'>

            </div>
            <div className='btn-div'>
              <motion.button className='btn'
                whileTap={{ scale: 0.5 }}>
                LET'S TALK!
              </motion.button>
            </div>
          </div>
          <div className='right-content'>
            <img className='home-img' src="./assets/home.png" alt="img" />
          </div>
        </div>
      </section>


      <section className="teams">
        <div className="container">
          <div className='title'>
            Our Teams
            <hr />
          </div>
          <div className='cardContainer'>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm cards">
                <img className='team-img' src="./assets/content.png" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem molestiae mollitia cumque. Error, saepe voluptate.</p>
                <div >
                  <Link to="/content-team"><button className='view-btn'>MEET </button></Link>
                </div>

              </div>
              <div className=" col-lg-4 col-md-4 col-sm cards">
                <img className='team-img' src="./assets/design.png" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem molestiae mollitia cumque. Error, saepe voluptate.</p>
                <div >
                  <Link to="/design-team"><button className='view-btn'>MEET </button></Link>
                </div>

              </div>
              <div className="col-lg-4 col-md-4 col-sm cards">
                <img className='team-img' src="./assets/doc.png" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem molestiae mollitia cumque. Error, saepe voluptate.</p>
                <div >
                  <Link to="/documentation-team"><button className='view-btn'>MEET </button></Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm cards">
                <img className='team-img' src="./assets/publicity.png" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem molestiae mollitia cumque. Error, saepe voluptate.</p>
                <div >
                  <Link to="/publicity-team"><button className='view-btn'>MEET </button></Link>
                </div>

              </div>
              <div className="col-lg-4 col-md-4 col-sm cards">
                <img className='team-img' src="./assets/web.png" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem molestiae mollitia cumque. Error, saepe voluptate.</p>
                <div >
                  <Link to="/web-team"><button className='view-btn'>MEET </button></Link>
                </div>

              </div>
              <div className="col-lg-4 col-md-4 col-sm cards">
                <img className='team-img' src="./assets/soc.png" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem molestiae mollitia cumque. Error, saepe voluptate.</p>
                <div >
                  <Link to="/social-team"><button className='view-btn'>MEET </button></Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="event">
        <div className="container">
          <div className='title'>
            Our Latest Works
            <hr />
          </div>

          {/* Ganesh-Event */}
          <div className='work-description'>
            <div className="event-img">
              <video className='vid' autoPlay loop muted src="./assets/ganesh.mp4"></video>
            </div>
            <div className='event-des'>
              <div className='event-info'>
                Ganapati Decoration
                Competition
                <p>Participants submitted the photo of their Ganpati Decoration.
                </p>
                <p>
                  Timeline -2nd September
                </p>
                <button className='info-btn1'>FEEDBACK</button>
              </div>
            </div>
          </div>


          {/* Eucation & Career */}
          <div className='work-description'>
            <div className="event-img">
              <div className='event-info'>
                Eucation & Career
                Opportunities
                Abroad
                <p>The session was based on spreading awareness regarding to career opportunities!!</p>
                <p>Date of Event - 13th August.</p>
                <button className='info-btn2'>FEEDBACK</button>
              </div>

            </div>
            <div className='event-des'>
              <video className='vid' autoPlay loop muted src="./assets/career.mp4"></video>
            </div>

          </div>


          {/* AR/VR */}
          <div className='work-description'>
            <div className="event-img">
              <video className='vid' autoPlay loop muted src="./assets/arVr.mp4"></video>
            </div>
            <div className='event-des'>
              <div className="event-info">
                AR/VR
                Webinar
                <p>A Webinar on latest technologies
                  like Augmented Reality and Virtual Reality</p>
                <p>Date - 22nd April<br />Mode - Online</p>
                <button className='info-btn3'>FEEDBACK</button>
              </div>

            </div>
          </div>
          <Link to="/events">
            <button className='explore-btn'>
              EXPLORE MORE
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}
export default Land