import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import './Documentation.scss'

const DocumentationTeam = () => {
  return (
    <div className='home'>
      <Navbar />
      <section className='main'>
        <div className='content-main'>
          <h1 className='team-name'>Documentation Team</h1>
          <p className=''>By meticulously documenting every stage of the process, the worst effects of turnover can be reduced. Any team may remember major events better with good documentation. Documentation team  work just as hard for the chapter as any other team, even though they don't always get the credit they deserve. They are primarily responsible for keeping track of prior operations' archives, compiling and archiving correspondence, recovering records upon request, and developing a long-term plan.</p>
        </div>
        <div className='img-div'>
          <img className="img" src='./assets/doc-home.png'></img>
        </div>
      </section>
      <section className="team">
        <h1>The Team</h1>
        <div className='card-container'>
          <div className='flex'>
            <div className='card'>
              <img className='card-img' src='./assets/teams/documentation/pratiksha-patil-head.png'></img>
              <p className='card-name'>Pratiksha Patil</p>
              <p className='card-subname'>Documentation Team Head</p>
              <div className='socials'>
                <a href=''> <i className='bx bxl-linkedin-square' style={{ 'color': '#003ec9' }}  ></i></a>
                <a href=''><i className='bx bxl-github' style={{ 'color': '#262626' }}  ></i></a>
              </div>
            </div>
          </div>
          <br />

          <div className='flex'>
            <div className='card'>
              <img className='card-img' src='./assets/teams/documentation/pratham-gaikwad.png'></img>
              <p className='card-name'>Pratham Gaikwad</p>
              <p className='card-subname'>Member</p>
              <div className='socials'>
                <a href=''> <i className='bx bxl-linkedin-square' style={{ 'color': '#003ec9' }}  ></i></a>
                <a href=''><i className='bx bxl-github' style={{ 'color': '#262626' }}  ></i></a>
              </div>
            </div>

            <div className='card'>
              <img className='card-img' src='./assets/teams/documentation/pratik-karkar.png'></img>
              <p className='card-name'>Pratik Karkar</p>
              <p className='card-subname'>Member</p>
              <div className='socials'>
                <a href=''> <i className='bx bxl-linkedin-square' style={{ 'color': '#003ec9' }}  ></i></a>
                <a href=''><i className='bx bxl-github' style={{ 'color': '#262626' }}  ></i></a>
              </div>
            </div>

            <div className='card'>
              <img className='card-img' src='./assets/teams/documentation/vaibhavi-kulkarni.png'></img>
              <p className='card-name'>Vaibhavi Kulkarni</p>
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

export default DocumentationTeam