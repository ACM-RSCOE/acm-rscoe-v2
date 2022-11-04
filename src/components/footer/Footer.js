import React from 'react'
import "./Footer.scss"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Footer = () => {
    return (
        <div>
            <section className='bottom'>
                <div className='footer-container'>
                    <h2>Want to Connect ?</h2>

                    <div className="row footer-text">
                        <div className="col-lg-4 col-sm-12">
                            <img className="logo1" src='./assets/logo.png'></img>
                            <h3>ACM RSCOE</h3>
                            <div className='aboutAcm'>
                                Our ACM serves a variety of purposes. Its goal is to promote ethical computing, improve the state of the art, and provide assistance to individuals who work in the subject. It is nothing but the act of turning new and imaginative ideas into reality. It is the world's largest professional computer association, with a global reach. Through strong leadership, advocacy of the highest standards, and acknowledgment of technological accomplishment, Our ACM promotes the computer profession's collective voice. ACM's "neighborhoods" are called chapters.

                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <img className="logo" src='./assets/acm.png'></img><h3>ACM</h3>
                            <div className='aboutAcm'>
                                ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field's challenges. As the world’s largest computing society, ACM strengthens the profession's collective voice through strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM supports the professional growth of its members by providing opportunities for life‐long learning, career development, and professional networking.
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 ">
                            <h3 className='follow-text'>• Follow Us On Social Media :</h3>
                            <div className="socialMedia">
                                <i className="fa-brands fa-instagram icons"></i>
                                <i className="fa-brands fa-facebook icons"></i>
                                <i className="fa-brands fa-twitter icons"></i>
                                <i className="fa-brands fa-youtube icons"></i>
                                <i className="fa-brands fa-telegram icons"></i>
                                <i className="fa-brands fa-linkedin icons"></i>
                            </div>
                            <h3 className='follow-text'>• Contact Us :</h3>
                            <p className='Address'>
                                JSPM's Rajarshi Shahu College of Engineering, Ashok Nagar, Tathawade, Pimpri-Chinchwad, Maharashtra 411033
                            </p>
                            <h3 className='follow-text'>• Mail Us :</h3>
                            <br />
                            <a className='Address' href='mailto:rscoeacmchapter@gmail.com'>
                                rscoeacmchapter@gmail.com
                            </a>

                        </div>
                    </div>
                  
                </div>

            </section>
            <div className="copyright">
                        <div className="text-center p-3 copyright">
                            © 2022 Copyright | ACM RSCOE WEBTEAM 
                            
                        </div>
                    </div>
        </div>
    )
}

export default Footer