import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import "./About.scss"
const About = () => {
  return (
    <div className='about-container'>
      <Navbar />
      <img src="./assets/about.png" alt="home" className='homeImg' />
      <section className='heads-container'>
        <div className='title'>
          Our Heads
          <hr />
        </div>
        <div className='heads'>
          <div className='head-card'>
            <div className='image'>
              <img className='head-img' src="./assets/teams/coreMembers/sahilk.jpg" alt="faculty" />
            </div>
            <div className='about'>
              <p className='name'>Ms. XYZ</p>
              <p className='post'>Faculty Coordinator</p>
              <p><img src="./assets/quote.png" alt='"' /> </p>
              <p className='thoughts'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellat beatae dolor voluptas delectus numquam aut debitis architecto tempora amet. Corrupti beatae porro et, ex inventore repellendus. Cum, eius quas!</p>
              <div className="socialMedia">
                <i className="fa-brands fa-instagram icons"></i>
                <i className="fa-brands fa-facebook icons"></i>
                <i className="fa-brands fa-twitter icons"></i>
                <i className="fa-brands fa-telegram icons"></i>
                <i className="fa-brands fa-linkedin icons"></i>
              </div>
            </div>
            <div className='about2'>
              <p className='name'>Ms. XYZ</p>
              <p className='post'>Faculty Coordinator</p>
              <div className="socialMedia">
                <i className="fa-brands fa-instagram icons"></i>
                <i className="fa-brands fa-facebook icons"></i>
                <i className="fa-brands fa-twitter icons"></i>
                <i className="fa-brands fa-telegram icons"></i>
                <i className="fa-brands fa-linkedin icons"></i>
              </div>
            </div>
          </div>
          <hr />
          <div className='head-card'>
            <div className='about'>
              <p className='name'>Mr. Shubham Asbe</p>
              <p className='post'>Chairman</p>
              <p><img src="./assets/quote.png" alt='"' /> </p>
              <p className='thoughts'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellat beatae dolor voluptas delectus numquam aut debitis architecto tempora amet. Corrupti beatae porro et, ex inventore repellendus. Cum, eius quas!</p>
              <div className="socialMedia">
                <i className="fa-brands fa-instagram icons"></i>
                <i className="fa-brands fa-linkedin icons"></i>
              </div>
            </div>
            <div className='image'>
              <img className='head-img' src="./assets/teams/coreMembers/shubham-asbe-Head.png" alt="chairman" />
            </div>
            <div className='about2'>
              <p className='name'>Ms. XYZ</p>
              <p className='post'>Faculty Coordinator</p>
              <div className="socialMedia">
                <i className="fa-brands fa-instagram icons"></i>
                <i className="fa-brands fa-linkedin icons"></i>
              </div>
            </div>
          </div>
          <hr />
          <div className='head-card'>
            <div className='image'>
              <img className='head-img' src="./assets/teams/coreMembers/akanksha-lugade.png" alt="vice-chairman" />
            </div>
            <div className='about'>
              <p className='name'>Ms. XYZ</p>
              <p className='post'>Faculty Coordinator</p>
              <p><img src="./assets/quote.png" alt='"' /> </p>
              <p className='thoughts'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellat beatae dolor voluptas delectus numquam aut debitis architecto tempora amet. Corrupti beatae porro et, ex inventore repellendus. Cum, eius quas!</p>
              <div className="socialMedia">
                <i className="fa-brands fa-instagram icons"></i>
                <i className="fa-brands fa-github icons"></i>
                <i className="fa-brands fa-linkedin icons"></i>
              </div>
            </div>
            <div className='about2'>
              <p className='name'>Ms. XYZ</p>
              <p className='post'>Faculty Coordinator</p>
              <div className="socialMedia">
                <i className="fa-brands fa-instagram icons"></i>
                <i className="fa-brands fa-github icons"></i>
                <i className="fa-brands fa-linkedin icons"></i>
              </div>
            </div>
          </div>
          <hr />
          <div className='head-card'>
            <div className='about'>
              <p className='name'>Ms. XYZ</p>
              <p className='post'>Faculty Coordinator</p>
              <p><img src="./assets/quote.png" alt='"' /> </p>
              <p className='thoughts'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellat beatae dolor voluptas delectus numquam aut debitis architecto tempora amet. Corrupti beatae porro et, ex inventore repellendus. Cum, eius quas!</p>
              <div className="socialMedia">
                <i className="fa-brands fa-instagram icons"></i>
                <i className="fa-brands fa-github icons"></i>
                <i className="fa-brands fa-linkedin icons"></i>
              </div>
            </div>
            <div className='image'>
              <img className='head-img' src="./assets/teams/coreMembers/neha-patil.png" alt="secretary" />
            </div>
            <div className='about2'>
              <p className='name'>Ms. XYZ</p>
              <p className='post'>Faculty Coordinator</p>
              <div className="socialMedia">
                <i className="fa-brands fa-instagram icons"></i>
                <i className="fa-brands fa-github icons"></i>
                <i className="fa-brands fa-linkedin icons"></i>
              </div>
            </div>
          </div>
          <hr />
          <div className='head-card'>
            <div className='image'>
              <img className='head-img' src="./assets/teams/coreMembers/sahilk.jpg" alt="treasurer" />
            </div>
            <div className='about'>
              <p className='name'>Ms. XYZ</p>
              <p className='post'>Faculty Coordinator</p>
              <p><img src="./assets/quote.png" alt='"' /> </p>
              <p className='thoughts'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellat beatae dolor voluptas delectus numquam aut debitis architecto tempora amet. Corrupti beatae porro et, ex inventore repellendus. Cum, eius quas!</p>
              <div className="socialMedia">
                <i className="fa-brands fa-twitter icons"></i>
                <i className="fa-brands fa-github icons"></i>
                <i className="fa-brands fa-linkedin icons"></i>
              </div>
            </div>
            <div className='about2'>
              <p className='name'>Ms. XYZ</p>
              <p className='post'>Faculty Coordinator</p>
              <div className="socialMedia">
                <i className="fa-brands fa-twitter icons"></i>
                <i className="fa-brands fa-github icons"></i>
                <i className="fa-brands fa-linkedin icons"></i>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>
      <section className="contact">
        <div className='title'>
          Contact Us
        </div>
        <div className='contact-container'>
          <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.9854104221195!2d73.74769985018192!3d18.619725970932368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbbc138acb7b%3A0x67043867a211a31d!2sJSPM%20Rajarshi%20shahu%20college%20of%20engineering%20%2C%20Tathawade!5e0!3m2!1sen!2sin!4v1666686718028!5m2!1sen!2sin" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='message'>
            <section class="mb-4">
              <h2 class="h1-responsive font-weight-bold text-center my-4">Send a message</h2>
              <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                a matter of hours to help you.</p>
              <div class="row">
                <div class="col-md-9 mb-md-0 mb-5">
                  <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <label for="name" class="">Your name</label>
                          <input placeholder="Name..." type="text" id="name" name="name" class="form-control"  />

                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <label for="email" class="">Your email</label>
                          <input placeholder="Mail..." type="text" id="email" name="email" class="form-control" />

                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="md-form mb-0">
                          <label for="subject" class="">Subject</label>
                          <input placeholder="..." type="text" id="subject" name="subject" class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="md-form">
                          <label  for="message">Your message</label>
                          <textarea placeholder="..." type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                        </div>

                      </div>
                    </div>

                  </form>

                  <div class="text-center text-md-left">
                    <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                  </div>
                  <div class="status"></div>
                </div>
                <div class="col-md-3 text-center">
                  <ul class="list-unstyled mb-0">
                    <li><i class="fas fa-map-marker-alt fa-2x"></i>
                      <p>JSPM RSCOE, Tathawde, Pune</p>
                    </li>

                    <li><i class="fas fa-phone mt-4 fa-2x"></i>
                      <p>+ 01 234 567 89</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>

      </section>
      <Footer />
    </div>
  )
}

export default About