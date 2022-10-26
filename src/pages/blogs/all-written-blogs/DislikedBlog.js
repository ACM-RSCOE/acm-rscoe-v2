import React from 'react'
import "./All-Blog-page.scss"
import Navbar2 from '../../../components/navbar/Navbar2'
import Footer from '../../../components/footer/Footer'
import background from "./Blog-Background/dislike-bg.png"
function DislikedBlog() {
    return (
        <div>
            <div className='blog-container'>
                <section className="blog-home"
                    style={{
                        backgroundImage: `url(${background})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        height: '100%',
                        width: '100%',
                    }}
                >
                    <Navbar2 />
                    <div>
                        <h1>Dare to be Disliked.</h1>
                        <p>"You will notice that the more successful you become, the more haters you get. It's a sad truth, and we tend to think that people will admire us for our success, but the majority of people will actually hate us."</p>
                        <p className='writer'> -Sahil Kandhare</p>
                    </div>
                </section>

                <section className='actual-blog'>
                    <div className="author">
                        <div>
                            <p className='author-name'>
                                <span>Writer: </span>Sahil Kandhare
                            </p>
                            <p className='date'>
                            6 May, 2021
                            </p>
                            <p className='editor'>
                                <span>Editor:</span> Sahil Kandhare
                            </p>
                            <p className='word-count'>
                                492 words 2,689 characters
                            </p>
                            <p className='read-time'>
                                <span>Read Time:</span> 2 min
                            </p>
                        </div>
                        <div className='share'>
                            <h4>If you liked it, make sure you share it !</h4>
                            <p>
                                <i className="fa-brands fa-twitter icons"></i>
                                <i className="fa-brands fa-facebook icons"></i>
                                <i className="fa-brands fa-instagram icons"></i>
                                <i className="fa-brands fa-telegram icons"></i>
                            </p>
                        </div>
                    </div>

                    <div className='blog'>
                        <p className='first-letter-u'>
                            Aristotle the legendary Greek philosopher said, “Man is by nature a social animal; an individual who is unsocial naturally and not accidentally is either beneath our notice or more than human." Have you noticed that Aristotle argued that an unsocial person is more than a human? "There is something that comes before the person, and that is society." People need to seek and maintain interpersonal interactions. To feel good, humans require the acceptance, presence, and comfort of others.
                            <br />
                            <br />
                            However, today as we live in the modern world, we want to create, achieve, and give our all. Yet, to do so, we must be ready to climb beyond the cult of mediocrity. We should be willing to quit our group to rise over others. People begin to hate us when we get the guts to leave the people and live our lives on our own. When we look at each visionary leader, we can discover one thing in common: they were all originally ridiculed and rejected by society. When you are a visionary, you have tremendous goals, and fantastic ideas, and your instinct tells you that this is going to make history you are highly motivated, but then others laugh at you, and you are criticized, and that motivation fades away.
                            <br />
                            <br />
                            You must remember that you may either be a changemaker or be loved by everyone around you. However, you cannot do both. You can change your mindset to be successful but the fact is most of the people around you are average, and they expect you to do the same. Avoiding them is not an easy task, you will face a lot of criticism along the way. When you start to be better than everyone else around you,  they begin to hate you. And that's when you start wondering, "What am I doing wrong that everyone hates me?" Is there a problem with me? However, you should be aware that others will dislike you if you exceed them. If you make more money than them, they will begin to hate you; similarly, if you travel the world, they will hate you as they wanted to see the world but did not work harder to acquire more money to do so.  You will notice that the more successful you become, the more haters you get. It's a sad truth, and we tend to think that people will admire us for our success, but the majority of people will actually hate us.
                            <br />
                            <br />
                            So, if you want to live a better life than the people around you, you should constantly seek guidance from someone better than you and, if possible, someone you aim to be like. Consider this: if people are going to hate you no matter what, whether you're mediocre or successful, they'll find a reason to dislike you, so why not have them hate you for being awesome? Why not make them hate you because you're better, wealthier, happier, and healthier than them?
                        </p>
                    </div>
                </section>
                <div className='mobile-share'>
                    <h4>If you liked it, make sure you share it !</h4>
                    <p>
                        <i className="fa-brands fa-twitter icons"></i>
                        <i className="fa-brands fa-facebook icons"></i>
                        <i className="fa-brands fa-instagram icons"></i>
                        <i className="fa-brands fa-telegram icons"></i>
                    </p>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default DislikedBlog