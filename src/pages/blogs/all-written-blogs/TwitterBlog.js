import React from 'react'
import "./All-Blog-page.scss"
import Navbar2 from '../../../components/navbar/Navbar2'
import Footer from '../../../components/footer/Footer'
import background from "./Blog-Background/twitter-bg.png"
function TwitterBlog() {
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
                        <h1>A talk on tweet. Why Elon Musk invested in twitter ?</h1>
                        <p>"If you become a specialist in whatever you do there is no one to stop you."</p>
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
                                30 April, 2022
                            </p>
                            <p className='editor'>
                                <span>Editor:</span> Sahil Kandhare
                            </p>
                            <p className='word-count'>
                                844 words 4,706 characters
                            </p>
                            <p className='read-time'>
                                <span>Read Time:</span> 3 min 22 sec
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
                            Elon Musk, the inventor of Tesla and SpaceX, made an offer to buy Twitter for $55 per share on April 14, 2022, and on April 26, it was announced that Twitter will be sold to him for roughly $44 billion. And  If I want to exaggerate, the figure is 44 with 9 zeros attached to it. So, that's a huge number, isn't it? So, why did Elon want to buy Twitter in the first place, and why did he choose Twitter over any other social media platform? If you do a Google search today, you will find that Facebook has over 2.93 billion users, whereas Twitter has approximately 217 million users. Before I answer why he wanted to buy Twitter, let me explain why he wanted to buy specifically Twitter over any other social media network.
                            <br />
                            <br />
                            In 2006, Facebook was the social media giant with 12 million users, and the founder of Twitter, Mr. Jack Dorsey, had the idea of creating a social media platform where you couldn't share pictures, videos, or music, but instead could write a 140 character text message about your thoughts and tell the world.  Now, my question to you is does this in any way look like a revolutionary idea to you? The answer is a huge NO, yet that is precisely how everyone, even investors, felt about Twitter. Then what was so special about Twitter that it evolved into such a powerful social media platform that drew the world's most prominent person, Mr. Musk, to buy it, and being engineering students what we can learn from this famous brand Twitter?
                            <br />
                            <br />
                            The success story of twitter dates back to the year 2007, back then and still today silicon valley was the booming tech hub of the world wherein venture capitals and investors used to look out to build their wealth by finding potential unicorns because it was such a boom land the media buzz was a huge driving force to get the update about the silicon valley. So, the broadcasting of news was only limited to giant media outlets. Due to this only, the media was in the position to decide what exactly is newsworthy, And while broadcasting the news the media used to decide what they wanted to show the world. And this is where the magic of Twitter came into the picture. So twitter first approached the founders and CEOs of the company and told them their entire idea. Slowly the founders started joining Twitter and soon enough it became the hub for founders to in touch with each other. Soon enough Twitter became the platform for the startup community. So, Twitter was like a medium of connection between people because of which all silicon valley entrepreneurs could know what exactly is happening in the valley without the media clutter.
                            <br />
                            <br />
                            After that, in April 2007 Barack Obama saw the potential in Twitter and joined Twitter to use it as a tool for presidential elections. and this was done just because with the help of Twitter he could easily connect with people without the media clutter. And this is when twitter picked up speed due to the massive connections of Barack Obama millions of people started joining Twitter. Now Twitter is not the only social media platform there are numerous other platforms like youtube, Facebook, and Instagram then why did twitter succeed in the past 15 years that is because
                            <br />
                            <br />
                            1) user-driven features like hashtags have now become a standard norm for searching and posting on social media.
                            <br />
                            <br />
                            2) They were specific in what they are doing which builds trust between people. In the year 2017, there was a natural disaster of hurricane in the Netherlands at that time all the emergency lines and communication channels were destroyed but people used Twitter to seek out help.  And this is how Twitter succeeded in building itself as a brand while stealing the thunder from Facebook.
                            <br />
                            <br />
                            So what we can learn from Twitter is if you become a specialist in whatever you do there is no one to stop you. Just like for sharing photos we use Instagram, for communicating we use WhatsApp for sharing our thoughts with the world we use Twitter. As they have found their specialty and worked for its advancement, for a specific task we can trust them easily.
                            <br />
                            <br />
                            Coming to the second question about why Elon musk wanted to buy Twitter? I've my thoughts on that. In Greece, there used to be a public space named agora which was like a central school for all the people to discuss various topics like business, politics, and philosophy, and wherein because of the concept of free speech ideas used to be born. Nowadays we don't have agora what we do have is Twitter. The place where just like the agora people can discuss any matter that comes to their mind. Before concluding I would like to ask you what you think Elon musk is going to do with Twitter, will he be limited on his idea of free speech, or is there anything else to it?
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

export default TwitterBlog