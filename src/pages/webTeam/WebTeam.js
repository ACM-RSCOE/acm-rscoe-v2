import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import "./Web.scss"
const WebTeam = () => {
  return (
    <div >
      <Navbar />
      <section className='main'>
            <div className='web-main'>
            <h1 className=''>Web Team</h1>
            <p className=''>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            <div className='web-img-div'>
              <img className="web-img" src='./assets/web-home.png'></img>
            </div>
      </section>
      <section className="team">
        <h1>The Team</h1>
        <div className='card-container'>
          <div className='flex'>
          <div className='card'>
               <img className='card-img' src='./assets/teams/webteam/abhishek-dhanke.png'></img>
               <p className='card-name'>Abhishek Dhanke</p>
               <p className='card-subname'>Web Team Head</p>
               <div className='socials'>
              <a href=''> <i className='bx bxl-linkedin-square' style={{'color':'#003ec9'}}  ></i></a>
              <a href=''><i className='bx bxl-github' style={{'color':'#262626'}}  ></i></a>
               </div>
          </div>

          <div className='card'>
               <img className='card-img' src='./assets/teams/webteam/vasudev-surwase.png'></img>
               <p className='card-name'>Vasudev Surwase</p>
               <p className='card-subname'>Web Co-Head</p>
               <div className='socials'>
              <a href=''> <i className='bx bxl-linkedin-square' style={{'color':'#003ec9'}}  ></i></a>
              <a href=''><i className='bx bxl-github' style={{'color':'#262626'}}  ></i></a>
               </div>
          </div>

</div>
<br />

<div className='flex'>
          <div className='card'>
               <img className='card-img' src='./assets/teams/webteam/rushikesh-sarode.png'></img>
               <p className='card-name'>Rushikesh Sarode</p>
               <p className='card-subname'>Member</p>
               <div className='socials'>
              <a href=''> <i className='bx bxl-linkedin-square' style={{'color':'#003ec9'}}  ></i></a>
              <a href=''><i className='bx bxl-github' style={{'color':'#262626'}}  ></i></a>
               </div>
          </div>

          <div className='card'>
               <img className='card-img' src='./assets/teams/webteam/jay-shinde.png'></img>
               <p className='card-name'>Jay Shinde</p>
               <p className='card-subname'>Member</p>
               <div className='socials'>
              <a href=''> <i className='bx bxl-linkedin-square' style={{'color':'#003ec9'}}  ></i></a>
              <a href=''><i className='bx bxl-github' style={{'color':'#262626'}}  ></i></a>
               </div>
          </div>

          <div className='card'>
               <img className='card-img' src='./assets/teams/webteam/yash-more.png'></img>
               <p className='card-name'>Yash More</p>
               <p className='card-subname'>Member</p>
               <div className='socials'>
              <a href=''> <i className='bx bxl-linkedin-square' style={{'color':'#003ec9'}}  ></i></a>
              <a href=''><i className='bx bxl-github' style={{'color':'#262626'}}  ></i></a>
               </div>
          </div>

          <div className='card'>
               <img className='card-img' src='./assets/teams/webteam/utkarsh-jaulkar.png'></img>
               <p className='card-name'>Utkarsh Jaulkar</p>
               <p className='card-subname'>Member</p>
               <div className='socials'>
              <a href=''> <i className='bx bxl-linkedin-square' style={{'color':'#003ec9'}}  ></i></a>
              <a href=''><i className='bx bxl-github' style={{'color':'#262626'}}  ></i></a>
               </div>
          </div>
          </div>
          <br />

          <div className='flex'>

          <div className='card'>
               <img className='card-img' src='./assets/teams/webteam/kshitij-jagtap.png'></img>
               <p className='card-name'>Kshitij Jagtap</p>
               <p className='card-subname'>Member</p>
               <div className='socials'>
              <a href=''> <i className='bx bxl-linkedin-square' style={{'color':'#003ec9'}}  ></i></a>
              <a href=''><i className='bx bxl-github' style={{'color':'#262626'}}  ></i></a>
               </div>
          </div>

          <div className='card'>
               <img className='card-img' src='./assets/teams/webteam/dheemahi-gupta.png'></img>
               <p className='card-name'>Dheemahi Gupta</p>
               <p className='card-subname'>Member</p>
               <div className='socials'>
              <a href=''> <i className='bx bxl-linkedin-square' style={{'color':'#003ec9'}}  ></i></a>
              <a href=''><i className='bx bxl-github' style={{'color':'#262626'}}  ></i></a>
               </div>
          </div>

          <div className='card'>
               <img className='card-img' src='./assets/teams/webteam/abhishek-bonde.png'></img>
               <p className='card-name'>Abhishek Bhonde</p>
               <p className='card-subname'>Member</p>
               <div className='socials'>
              <a href=''> <i className='bx bxl-linkedin-square' style={{'color':'#003ec9'}}  ></i></a>
              <a href=''><i className='bx bxl-github' style={{'color':'#262626'}}  ></i></a>
               </div>
          </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default WebTeam