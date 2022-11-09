import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import "./Content.scss"
const ContentTeam = () => {
  return (
    <div className='home'>
      <Navbar />
      <section className='main'>
        <div className='content-main'>
          <h1 className='team-name'>Content Team</h1>
          <p className=''>Content is your voice, and it can educate an audience, convey a message, present an idea, establish personality, promote a product, or yell at the unlucky stranger. And your audience will remember how you connect with them, whether it's for the better or worse. Our chapter's content initiatives are conceptualised, produced, optimised, and disseminated by a content team.</p>
        </div>
        <div className='img-div'>
          <img className="img" src='./assets/content-home.png'></img>
        </div>
      </section>
      <section className="team">
        <h1>The Team</h1>
        <div className='card-container'>
          <div className='flex'>
            <div className='card'>
              <img className='card-img' src='./assets/teams/content/sakshi-bonde-head.png'></img>
              <p className='card-name'>Sakshi Bonde</p>
              <p className='card-subname'>Content Team Head</p>
              <div className='socials'>
                <a href=''> <i className='bx bxl-linkedin-square' style={{ 'color': '#003ec9' }}  ></i></a>
                <a href=''><i className='bx bxl-github' style={{ 'color': '#262626' }}  ></i></a>
              </div>
            </div>
          </div>
          <br />

          <div className='flex'>
            <div className='card'>
              <img className='card-img' src='./assets/teams/content/diya-salunkhe.png'></img>
              <p className='card-name'>Diya Salunkhe</p>
              <p className='card-subname'>Member</p>
              <div className='socials'>
                <a href=''> <i className='bx bxl-linkedin-square' style={{ 'color': '#003ec9' }}  ></i></a>
                <a href=''><i className='bx bxl-github' style={{ 'color': '#262626' }}  ></i></a>
              </div>
            </div>

            <div className='card'>
              <img className='card-img' src='./assets/teams/content/kaustubh-kongile.png'></img>
              <p className='card-name'>Kaustubh Kongile</p>
              <p className='card-subname'>Member</p>
              <div className='socials'>
                <a href=''> <i className='bx bxl-linkedin-square' style={{ 'color': '#003ec9' }}  ></i></a>
                <a href=''><i className='bx bxl-github' style={{ 'color': '#262626' }}  ></i></a>
              </div>
            </div>

            <div className='card'>
              <img className='card-img' src='./assets/teams/content/ganesh-masute.png'></img>
              <p className='card-name'>Ganesh Masute</p>
              <p className='card-subname'>Member</p>
              <div className='socials'>
                <a href=''> <i className='bx bxl-linkedin-square' style={{ 'color': '#003ec9' }}  ></i></a>
                <a href=''><i className='bx bxl-github' style={{ 'color': '#262626' }}  ></i></a>
              </div>
            </div>

            <div className='card'>
              <img className='card-img' src='./assets/teams/content/pratiksha-barge.png'></img>
              <p className='card-name'>Pratiksha Barge</p>
              <p className='card-subname'>Member</p>
              <div className='socials'>
                <a href=''> <i className='bx bxl-linkedin-square' style={{ 'color': '#003ec9' }}  ></i></a>
                <a href=''><i className='bx bxl-github' style={{ 'color': '#262626' }}  ></i></a>
              </div>
            </div>
          </div>
          <br />

          <div className='flex'>
            <div className='card'>
              <img className='card-img' src='./assets/teams/content/sakshi-deo.png'></img>
              <p className='card-name'>Sakshi Deo</p>
              <p className='card-subname'>Member</p>
              <div className='socials'>
                <a href=''> <i className='bx bxl-linkedin-square' style={{ 'color': '#003ec9' }}  ></i></a>
                <a href=''><i className='bx bxl-github' style={{ 'color': '#262626' }}  ></i></a>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ContentTeam