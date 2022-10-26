import React from 'react'
import "./All-Blog-page.scss"
import Navbar2 from '../../../components/navbar/Navbar2'
import Footer from '../../../components/footer/Footer'
import background from "./Blog-Background/love-bg.png"
function LoveBlog() {
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
                        <h1>LOVE: A sensation that everyone feels,  yet is difficult to put into words.</h1>
                        <p>" Love is not the desire to be with someone and spend time with them, but to want someone's happiness, and stability in their lives, and to pray for their success, is love."</p>
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
                            26 April, 2022
                            </p>
                            <p className='editor'>
                                <span>Editor:</span> Sahil Kandhare
                            </p>
                            <p className='word-count'>
                                874 words 4,752 characters
                            </p>
                            <p className='read-time'>
                                <span>Read Time:</span> 3 min 30 sec
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
                            Love is one of the most enduring subjects for artworks throughout the ages, from songs and poems to novels and movies. We all have our own ideas about what love is. Spending time with someone is love for some, and being unable to live without someone is love for others; communicating is love for some, and caring for someone is love for others. But, in reality, this isn't exactly what love is. So, what exactly is love? Is love an emotion we experience when we see someone for the first time?
                            <br />
                            <br />
                            Love isn't a rush of emotion you get when you see someone or a desire for someone to stay closer to you. You are not feeling the love at that time because you are being selfish; you are only thinking about yourself and not about the feelings of the other person. We all have our own definitions of love, but there is no singular definition of love. Love is not the desire to be with someone and spend time with them, but to want someone's happiness, and stability in their lives, and to pray for their success, is love.
                            <br />
                            <br />
                            The person who loves you will always put you first because he will care for you more than himself.  When someone truly loves you, he/she would always look for you to share whatever is going on in his life. Love is based on trust. When you trust someone, you open up about your emotions. When you share your feelings, you almost always wind up sharing your weaknesses. Even after knowing you, the person who truly loves you will never take advantage of your weakness. On the other side, he/she will assist you in overcoming your flaws. Love does not mean relying on another person or contemplating death if that person abandons you. This isn't love; it's a form of dependency. Simply put, love is thinking about the other person before thinking about oneself. The one who truly loves you will never reject you regardless of your hundreds of defects, but will always accept you because of your single strength. While everyone appreciates happy, wonderful moments, exposing negative feelings takes courage. Because life is so unfair, it is impossible to be happy all of the time. You can't always be in a good mood, thus the person who accepts you in your bad mood will certainly appreciate both good and bad times with you.
                            <br />
                            <br />
                            When someone truly cares about you, it reflects in their actions. Whether it's the way they speak or communicate with you or the way they treat you in one way or another, their actions always show that they care about you. No matter how bad things go, the person who truly loves you will never, ever disrespect you. Their aim is always to make you happy.
                            <br />
                            <br />
                            Every person shows love in different ways. Some express their love publicly, while others never express their love because they are afraid of losing you. But there is one thing that all true lovers do: they will go out of their way to make you feel unique and special. They will ask you endless questions. Not just because they want to know you but because they want to spend time with you and get close to you.
                            <br />
                            <br />
                            Remember, Love will never be perfect, just as there is no moon without stains. Any relationship is similar to a garden. It must be watered regularly if it is to grow. Special consideration must be paid to the seasons as well as any unpredictability in the weather. New seeds must be planted, and weeds must be removed. Falling in love is like springtime when it comes to fulfillment. We have the impression that we shall be happy for the rest of our lives.  Love appears as if it will last forever. But, as spring passes summer appears. During summertime, we find our partner is not as great as we believed, and we need to work on our relationship. Frustration, resentment, and despair set in; But we forget to water the plant of our love under this blazing sun. It is no longer simple to offer and receive the love we require. Then the weather changes once again, and winter arrives. It is the moment when our mask is off and our unpleasant emotions appear. But if we manage to overcome and pass through these difficult times, eventually spring will arrive again.
                            <br />
                            <br />
                            Love is a beautiful emotion, and it's much more beautiful when it comes from the right person. It's not as if the person you love will be good at first and then change with time. Even if he/she is upset or irritated with you, the person who loves you will stay close to you. There is no such thing as an ideal relationship. Relationships are full of ups and downs; you may feel like you're with the best person one day and then regret your decision the next.
                            <br />
                            <br />
                            And finally, if the person you were thinking about while reading this is the one you love the most, express your feelings to him or her because life is so uncertain, and we never know if we will be there for the next moment or not.
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

export default LoveBlog