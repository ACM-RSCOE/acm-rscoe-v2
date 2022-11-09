import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import "./Publicity.scss"
const PublicityTeam = () => {
  return (
    <div className='home'>
      <Navbar />
      <section className='main'>
        <div className='content-main'>
          <h1 className='team-name'>Publicity Team</h1>
          <p className=''>Sending the appropriate messages to the appropriate audience at the appropriate time and place always strengthens the chapter's reputation. Promoting the chapter is the responsibility of the team. The members of this team promote word about events in various institutions and other appropriate places whenever the chapter makes fresh announcements, such as any new events. Additionally, they occasionally write and create press releases, articles, presentations, and social media postings. </p>
        </div>
        <div className='img-div'>
          <img className="img" src='./assets/publicity-home.png'></img>
        </div>
      </section>
      <section className="team">
        <h1>The Team</h1>
        <div className='card-container'>
          <div className='flex'>
            <div className='card'>
              <img className='card-img' src='./assets/teams/publicity/aaryan-chipkar-Head.png'></img>
              <p className='card-name'>Aaryan Chipkar</p>
              <p className='card-subname'>Publicity Team Head</p>
              <div className='socials'>
                <a href=''> <i className='bx bxl-linkedin-square' style={{ 'color': '#003ec9' }}  ></i></a>
                <a href=''><i className='bx bxl-github' style={{ 'color': '#262626' }}  ></i></a>
              </div>
            </div>
          </div>
          <br />

          <div className='flex'>
            <div className='card'>
              <img className='card-img' src='./assets/teams/publicity/abhijit-kulkarni.png'></img>
              <p className='card-name'>Abhijit Kulkarni</p>
              <p className='card-subname'>Member</p>
              <div className='socials'>
                <a href=''> <i className='bx bxl-linkedin-square' style={{ 'color': '#003ec9' }}  ></i></a>
                <a href=''><i className='bx bxl-github' style={{ 'color': '#262626' }}  ></i></a>
              </div>
            </div>

            <div className='card'>
              <img className='card-img' src='./assets/teams/publicity/sanika-lewarkar.png'></img>
              <p className='card-name'>Sanika Lewarkar</p>
              <p className='card-subname'>Member</p>
              <div className='socials'>
                <a href=''> <i className='bx bxl-linkedin-square' style={{ 'color': '#003ec9' }}  ></i></a>
                <a href=''><i className='bx bxl-github' style={{ 'color': '#262626' }}  ></i></a>
              </div>
            </div>

            <div className='card'>
              <img className='card-img' src='./assets/teams/publicity/vaibhavi-sawant.png'></img>
              <p className='card-name'>Vaibhavi Sawant</p>
              <p className='card-subname'>Member</p>
              <div className='socials'>
                <a href=''> <i className='bx bxl-linkedin-square' style={{ 'color': '#003ec9' }}  ></i></a>
                <a href=''><i className='bx bxl-github' style={{ 'color': '#262626' }}  ></i></a>
              </div>
            </div>
            <div className='card'>
              <img className='card-img' src='./assets/teams/publicity/yash-firke.png'></img>
              <p className='card-name'>Yash Firke</p>
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

export default PublicityTeam