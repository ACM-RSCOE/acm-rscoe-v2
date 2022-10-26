import React from 'react'
import "./All-Blog-page.scss"
import Navbar2 from '../../../components/navbar/Navbar2'
import Footer from '../../../components/footer/Footer'
import background from "./Blog-Background/india-bg.png"
function IndiaBlog() {
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
                        <h1>India 2047</h1>
                        <p>"When we compare India in 2047 to India in 1947, we can see there are significant variations in practically every facet of life. Population, politics, legislation, international events, and industry trends all influence development. However, if India does all possible to sustain its growth, it might quickly become one of the world's most prominent countries."</p>
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
                            2 Aug, 2021
                            </p>
                            <p className='editor'>
                                <span>Editor:</span> Sahil Kandhare
                            </p>
                            <p className='word-count'>
                                495 words 3,030 characters
                            </p>
                            <p className="read-time">
                                <span>Read Time:</span> 1 min 58 sec
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
                            As a result of the Second World War and the unwavering efforts of freedom fighters, India's independence appeared to be a foregone conclusion. Finally, on August 15, 1947, India was granted freedom. We just celebrated the nation's 74th anniversary of independence. But we don't have to wait nearly as long to see what will happen in the upcoming 26 years when the country will be celebrating its 100th anniversary; perhaps India will emerge as the next world power. Today, we'll look into this possibility and envision India in 2047.
                            <br />
                            <br />
                            By 2047, we may also expect increased rates in literacy, life expectancy, and GDP. India is likely to flourish in agriculture, finance, and education with the help of artificial intelligence. We may also see electric automobiles on Indian roads shortly. Although the growth of technology-based firms will continue to help the Indian economy, the country is losing talent owing to a lack of opportunities. CEOs of Indian origin lead some of the world's most powerful corporations. We should be proud of them, but we also need to acknowledge where India falls short. What is causing these talented brains to leave their homeland? India is blessed with a plethora of brilliant individuals; all India needs to do is leverage its potential. No one should be discriminated against in India because of their caste, religion, or familial origin. The government should invest in innovation so that India is renowned as "The Land of Opportunities." And it will draw talent from all across the world.    
                            <br />
                            <br />
                            As we all know, the United States and China are the world's two most powerful economies. Is it realistic to expect India, which is currently considered a developing country, to ever surpass the world's leading power? It looks unlikely that India may overtake other countries to become the world's largest economy. The important news here, however, is that India has the world's fastest-growing economy, and it is evident that India has consistently led the world in terms of economic growth and will continue to do so in the future. As India aims to become the world's largest economy, several variables are working in its favor. India's most valuable asset is its labor; with around 67% of the total population under the age of 35, the country's workforce has unequaled potential.    
                            <br />
                            <br />
                            When we compare India in 2047 to India in 1947, we can see there are significant variations in practically every facet of life. Population, politics, legislation, international events, and industry trends all influence development. However, if India does all possible to sustain its growth, it might quickly become one of the world's most prominent countries. If India fixes its current laws, corruption, and poverty, it has the potential to accomplish significant economic growth. The country boasts a diverse range of sectors and is the largest economy on the globe. India has influenced art, literature, science, and medicine more than any other country, and it still has a lot more to accomplish in the future. 
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

export default IndiaBlog