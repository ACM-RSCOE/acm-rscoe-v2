import React from 'react'
import "./All-Blog-page.scss"
import Navbar2 from '../../../components/navbar/Navbar2'
import Footer from '../../../components/footer/Footer'
import background from "./Blog-Background/success-bg.png"
function SuccessBlog() {
  return (
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
          <h1>Success- The path driven by passion</h1>
          <p>" If we define success as what we do rather than a specific accomplishment, we can more clearly see that success is a journey, not a destination. After all, reaching a destination means stopping, but success is all about never stopping."</p>
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
            10 June, 2022
            </p>
            <p className='editor'>
              <span>Editor:</span> Sahil Kandhare
            </p>
            <p className='word-count'>
              871 words 4,911 characters
            </p>
            <p className='read-time'>
              <span>Read Time:</span> 3 min 29 sec
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
            If I ask you to define success, I'm quite sure that I'm going to receive thousands of hundreds of thoughts on the topic and all of which are going to be correct. Because success can be judged in a variety of ways and on a variety of levels. As we all have different backgrounds, experiences, or personal viewpoints our definition of success is going to be different.
            <br />
            <br />
            Everyone has an idea of what it means to be successful. Some people define success as having a large house, a fancy car, nice clothes, materialistic possessions, and a lot of money. Others, on the other hand, may see it as having a good family and living happily without any chaos. Though there are some stereotypes about what it means to be successful, they are all moving targets that we never seem to hit. In today's world, very few people truly understand what it means to be successful. If we think success is about materialistic things, we must first comprehend that someone else is always going to have more money, a better car, and a bigger house. As a result, too many of us feel that we are not successful enough, even if we have more than we could ever need. The majority of the time our society and the circumstances in which we live make us feel as if we haven't accomplished enough, forcing us to work more and earn more. We feel prompted to perform actions that will help us feel more successful when we don't feel successful. Of course, the issue is that the cycle never stops. There's always something new to desire and achieve.
            <br />
            <br />
            And for those who associate success with financial accomplishments, let me state it clearly that "no one will ever become successful by meeting an arbitrary financial standard." Consider a man who believes that earning 100 Rs will make him financially successful. Does this imply that he is a failure at 99 Rs? His financial holdings or cash in hand did not make him successful, it is the hard work, dedication, and skills he used to earn his money that do.
            <br />
            <br />
            So, what exactly is a true sense of success? If you ask me, I believe we should define success as the process by which we achieve our goals, rather than the specific goals themselves. One can be successful in any endeavor, but one becomes a success himself by developing successful habits. Consider someone who aspires to be the best at something. He works all hours of the day and night, improving his skills and putting in an incredible amount of effort. And one day, the world recognizes his work and applauds him for his accomplishments. Now, did this validation turn him into a success, and what if his talents and achievements went unnoticed? Would he have failed in that scenario? The answer is no. His success was defined by the journey he took to create the work that others would eventually value, rather than the work he did that others valued.
            <br />
            <br />
            If you want to become successful It is crucial for you to understand the distinction between the various definitions of success. Because success is determined by one's mindset. The main difference in mindset between mediocre and successful people is that mediocre people want a slice of pre-made cake, whereas successful people always look for the recipe and ingredients to bake their own. That's why, after a while, most people settle down. Successful people, on the other hand, understand that, while baking a cake takes time and effort, there is no limit to the number of cakes that can be baked. Anyone willing to learn how to bake and prioritize getting the best ingredients can make their cake. But you have to be in the kitchen and go to the store to get the necessary tools and raw materials. It is a well-known fact that successful people are always the why type. They are constantly inquiring about everything. They never stop asking questions and never stop learning. That is what makes the road to success such an incredible experience. On the road to success, you will never feel as if you are walking on a smooth flower carpet, but that rough and rocky road will undoubtedly become your passion.
            <br />
            <br />
            I believe that success is not a predefined standard that you should strive to achieve in your life; rather, we are the only ones who can define success for ourselves. We must determine what it means to be successful. I think success should not be defined by a specific goal but by the drive to achieve that goal. For me on the path to success what matters most is not the final destination but the process which has shaped you into someone entirely different. Instead of thinking, "I am successful because I have reached my goal," think like, "I am successful because I have worked hard, and strived to be a better version of myself every day". If we define success as what we do rather than a specific accomplishment, we can more clearly see that success is a journey, not a destination. After all, reaching a destination means stopping, but success is all about never stopping.
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
  )
}

export default SuccessBlog