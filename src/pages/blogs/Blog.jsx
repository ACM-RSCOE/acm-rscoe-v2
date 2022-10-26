import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Blog.scss"
const Blog = () => {
  return (
    <div>
      <Navbar />
      <section className='blog-home-img'>
        <img className='display-img' src="./assets/blog-home.png" alt="img" />
      </section>
      <section className='concept-of-day'>
        <div className='concept-pop'>
          <div>
            <p className='cod' >Concept Of The Day</p>
            <div className='inside'>
              <Link to="/concept-of-day"><button className='cod-check-button'> CHECK OUT</button></Link>
              <img src="./assets/concept-logo.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="blogs">
        <div  className='title'>
          Blogs
          <hr />
        </div>
        <div className="row">



          {/* SUCCESS BLOG ONE BLOG CARD */}
            <div className="col-sm-12 col-md-6 col-lg-4 blog-post">
              <div className="blog-img"> <img src="./assets/blog-images/success-blog-background.png" alt="img" /></div>
              <div className="blog-title">
                <Link to="/success-blog" style={{ textDecoration: "none" }}><p> Success- The path driven by passion</p></Link>
              </div>
              <div className="author">
                <img className='author-img' src="./assets/teams/coreMembers/sahilk.jpg" alt="img" />
                <div className="author-info">
                  <span>
                    Sahil Kandhare
                  </span>
                  <p>
                  10 June, 2022
                  </p>
                </div>
              </div>
            </div>



          {/*Twitter Blog */}
          <div  className="col-sm-12 col-md-6 col-lg-4 blog-post">
            <div className="blog-img"> <img src="./assets/blog-images/twitter-blog-background.png" alt="img" /></div>
            <div className="blog-title">
              <Link to="/twitter-blog" style={{ textDecoration: "none" }}><p> A talk on tweet. Why Elon Musk invested in twitter ?</p></Link>
            </div>
            <div className="author">
              <img className='author-img' src="./assets/teams/coreMembers/sahilk.jpg" alt="img" />
              <div className="author-info">
                <span>
                  Sahil Kandhare
                </span>
                <p>
                30 April, 2022
                </p>
              </div>
            </div>
          </div>


          {/* DISLIKE BLOG */}
          <div  className="col-sm-12 col-md-6 col-lg-4 blog-post">
            <div className="blog-img"> <img src="./assets/blog-images/disliked-blog-background.png" alt="img" /></div>
            <div className="blog-title">
              <Link to="/disliked-blog" style={{ textDecoration: "none" }}><p> Dare to be Disliked. </p></Link>
            </div>
            <div className="author">
              <img className='author-img' src="./assets/teams/coreMembers/sahilk.jpg" alt="img" />
              <div className="author-info">
                <span>
                  Sahil Kandhare
                </span>
                <p>
                6 May, 2021
                </p>
              </div>
            </div>
          </div>



          {/* Gender Inequality */}
          <div  className="col-sm-12 col-md-6 col-lg-4 blog-post">
            <div className="blog-img"> <img src="./assets/blog-images/genderInequality-blog-background.png" alt="img" /></div>
            <div className="blog-title">
              <Link to="/gender-blog" style={{ textDecoration: "none" }}><p> Gender Inequality: The curse to humanity.</p></Link>
            </div>
            <div className="author">
              <img className='author-img' src="./assets/teams/coreMembers/sahilk.jpg" alt="img" />
              <div className="author-info">
                <span>
                  Sahil Kandhare
                </span>
                <p>
                8 May, 2022
                </p>
              </div>
            </div>
          </div>




          {/* India 2047 */}
          <div  className="col-sm-12 col-md-6 col-lg-4 blog-post">
            <div className="blog-img"> <img src="./assets/blog-images/india-blog-background.png" alt="img" /></div>
            <div className="blog-title">
              <Link to="/india-blog" style={{ textDecoration: "none" }}><p>India 2047</p></Link>
            </div>
            <div className="author">
              <img className='author-img' src="./assets/teams/coreMembers/sahilk.jpg" alt="img" />
              <div className="author-info">
                <span>
                  Sahil Kandhare
                </span>
                <p>
                2 Aug, 2021
                </p>
              </div>
            </div>
          </div>





          {/* LOVE: A sensation that everyone feels,  yet is difficult to put into words. */}
          <div className="col-sm-12 col-md-6 col-lg-4 blog-post">
            <div className="blog-img"> <img src="./assets/blog-images/love-blog-background.png" alt="img" /></div>
            <div className="blog-title">
              <Link to="/love-blog" style={{ textDecoration: "none" }}><p>LOVE: A sensation that everyone feels,  yet is difficult to put into words.</p></Link>
            </div>
            <div className="author">
              <img className='author-img' src="./assets/teams/coreMembers/sahilk.jpg" alt="img" />
              <div className="author-info">
                <span>
                  Sahil Kandhare
                </span>
                <p>
                26 April, 2022
                </p>
              </div>
            </div>
          </div>


        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Blog