import React, { Component } from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }
  render() {
    return (
      <div>
        <nav>
          <div className='logo-container'>
            <Link style={{ textDecoration: "None" }} to="/"><img className='logo' src="./assets/logo.png" alt="" /></Link>
            <p>ACM RSCOE</p>
          </div>
          <div id="navlist">
            <ul id='navBar' className={this.state.clicked ? "#navBar active" : "#navBar"}>
              <NavLink className='nav-items' style={{ textDecoration: "None" }} to="/"  end><li>HOME</li></NavLink>
              <NavLink className='nav-items' style={{ textDecoration: "None" }} to="/blogs"><li>BLOGS</li></NavLink>
              <NavLink className='nav-items' style={{ textDecoration: "None" }} to="/events"><li>EVENTS</li></NavLink>
              <NavLink className='nav-items' style={{ textDecoration: "None" }} to="/about"><li>ABOUT</li></NavLink>

                <Tippy content={<span style={{color:"#fffce7"}}>Concept of the day 💡</span>}>
                  <NavLink className='nav-items' style={{ textDecoration: "None" }} to="/concept-of-day"><li><i className="fa-solid fa-calendar-days concept"></i></li></NavLink>
                </Tippy>


            </ul>
            <div id='mobile' onClick={this.handleClick}>
              <i id='bar' className={this.state.clicked ? "fas fa-times" : "fa-solid fa-bars"}> </i>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar


