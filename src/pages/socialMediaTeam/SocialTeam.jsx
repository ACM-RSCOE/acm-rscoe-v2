import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import "./Social.scss"
const SocialTeam = () => {
  return (
    <div className='home'>
      <Navbar />
      <section className='main'>
        <div className='content-main'>
          <h1 className='team-name'>Social Media Team</h1>
          <p className=''>Social media's ability to disseminate knowledge globally is one of its most significant effects in the modern world. Since the majority of people these days use other social media sites, no important story can be allowed to die out without a meaningful conversation. A social media team's primary responsibility is to expand the chapter by carefully producing content, running advertisements, and interacting with the audience on various social media platforms.</p>
        </div>
        <div className='img-div'>
          <img className="img" src='./assets/social-home.png'></img>
        </div>
      </section>
      <section className="team">
        <h1>The Team</h1>
        <div className='card-container'>
          <div className='flex'>
            <div className='card'>
              <img className='card-img' src='./assets/teams/socialMedia/anuradha-partudkar-head.png'></img>
              <p className='card-name'>Anuradha Partudkar</p>
              <p className='card-subname'>Social Media Team Head</p>
              <div className='socials'>
                <a href=''> <i className='bx bxl-linkedin-square' style={{ 'color': '#003ec9' }}  ></i></a>
                <a href=''><i className='bx bxl-github' style={{ 'color': '#262626' }}  ></i></a>
              </div>
            </div>
          </div>
          <br />

          <div className='flex'>
            <div className='card'>
              <img className='card-img' src='./assets/teams/socialMedia/janhvi-bhandekar.png'></img>
              <p className='card-name'>Janhavi Bhandekar</p>
              <p className='card-subname'>Member</p>
              <div className='socials'>
                <a href=''> <i className='bx bxl-linkedin-square' style={{ 'color': '#003ec9' }}  ></i></a>
                <a href=''><i className='bx bxl-github' style={{ 'color': '#262626' }}  ></i></a>
              </div>
            </div>

            <div className='card'>
              <img className='card-img' src='./assets/teams/socialMedia/upendra-maurya.png'></img>
              <p className='card-name'>Upendra Maurya</p>
              <p className='card-subname'>Member</p>
              <div className='socials'>
                <a href=''> <i className='bx bxl-linkedin-square' style={{ 'color': '#003ec9' }}  ></i></a>
                <a href=''><i className='bx bxl-github' style={{ 'color': '#262626' }}  ></i></a>
              </div>
            </div>

            <div className='card'>
              <img className='card-img' src='./assets/teams/socialMedia/nishant-patil.png'></img>
              <p className='card-name'>Nishant Patil</p>
              <p className='card-subname'>Member</p>
              <div className='socials'>
                <a href=''> <i className='bx bxl-linkedin-square' style={{ 'color': '#003ec9' }}  ></i></a>
                <a href=''><i className='bx bxl-github' style={{ 'color': '#262626' }}  ></i></a>
              </div>
            </div>
            <div className='card'>
              <img className='card-img' src='./assets/teams/socialMedia/yash-londhe.png'></img>
              <p className='card-name'>Yash Londhe</p>
              <p className='card-subname'>Member</p>
              <div className='socials'>
                <a href=''> <i className='bx bxl-linkedin-square' style={{ 'color': '#003ec9' }}  ></i></a>
                <a href=''><i className='bx bxl-github' style={{ 'color': '#262626' }}  ></i></a>
              </div>
            </div>
          </div>
          <br />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default SocialTeam