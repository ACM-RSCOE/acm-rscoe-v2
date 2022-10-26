import React from 'react'
import "./All-Blog-page.scss"
import Navbar2 from '../../../components/navbar/Navbar2'
import Footer from '../../../components/footer/Footer'
import background from "./Blog-Background/gender-bg.png"
function GenderBlog() {
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
                        <h1>Gender Inequality: The curse to humanity.</h1>
                        <p>"True equality will not be achieved by forcing men and women to do things they don't want to do either at home or at work. The solution is to break down the boxes we've built by distinguishing between male and female genders."</p>
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
                            8 May, 2022
                            </p>
                            <p className='editor'>
                                <span>Editor:</span> Sahil Kandhare
                            </p>
                            <p className='word-count'>
                                458 words 2,714 characters
                            </p>
                            <p className="read-time">
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
                            Before we talk about gender inequality, let me ask you a question: What is gender? The question alone has the ability to split our brains in two. We've all had a black-and-white gender perspective from childhood. Women are emotional, and males are rational, according to our family and culture. Most females are trained to be passive, submissive, weak, and caring from birth, whereas most males are socialized to be active, dominating, strong, and aggressive. We blind our children to the true story by making these false assumptions.
                            <br />
                            <br />
                            What is the root of this discrimination? While living in families, we frequently make judgments in which males are assigned tasks such as making decisions and managing money to ensure the family's long-term sustainability. Females, on the other hand, are more concerned with adding love, compassion, and fulfillment to life. However, we forget that our children are learning from us in the process. They have no trouble connecting with their mother but struggle to bond with their father. Our children never consider that their mothers can make decisions and their fathers can embrace them or express their feelings since males are taught not to express their emotions and women are taught not to take the lead by society. I believe that this is the primary source of male and female inequality.
                            <br />
                            <br />
                            The word "gender inequality" is most frequently associated with the corporate sector. For generations, men have been referred to as standard c-suit officers. When we think of a company's chairman or chief executive officer, we imagine an assertive man dressed in a coat suit and polished boots. However, no one has ever envisioned a woman as the boss. This false perception stems from our history, and as we already stated, its origins may be traced back to our youth.
                            <br />
                            <br />
                            The true question is not whether women can or cannot be leaders; it is how we treat them. I agree that women have restrictions by nature. They must balance their commitments between their family and their job. So, when women leave the corporate world to raise their families, society often sees it as women are driven out by discrimination and a lack of flexibility, rather than choosing to leave. This should not be happening. We should provide women the freedom to make their own judgments and carry out their own responsibilities.
                            <br />
                            <br />
                            True equality will not be achieved by forcing men and women to do things they don't want to do either at home or at work. The solution is to break down the boxes we've built by distinguishing between male and female genders. If we want to leave a better world for future generations, we must treat both genders equally, give them equal opportunities, and allow both of them to thrive.
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

export default GenderBlog