
import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

function homepage() {
  return (
    <div>
      <Nav />
      <div className="container2">
        <div className="container__left">
          <h1>Psychonnect, there is a connection.</h1>
          <div className="container__btn">
            <button className="btn">START SHORT ASSESSMENT</button>
          </div>
        </div>
        <div className="container__right">
          <div className="images">
            <img src="assets/pic1.jpg" alt="pic-1" className="pic-1" />
            <img src="assets/pic2.jpg" alt="pic-2" className="pic-2" />
          </div>
          <div className="content">
            <h2>In Psychonnect,</h2>
            <h2>there is a connection.</h2>

            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
              accusantium. Natus nobis culpa esse velit deserunt quam
              repudiandae numquam nostrum!
            </p>
          </div>
        </div>
        <div className="location">
          <span><i className="ri-map-pin-2-fill"></i></span>
          OUR LOCATION
        </div>
        <div className="socials">
          <span>
            <a href="#"><i className="ri-facebook-fill"></i></a>
          </span>
          <span>
            <a href="#"><i className="ri-instagram-line"></i></a>
          </span>
          <span>
            <a href="#"><i className="ri-twitter-fill"></i></a>
          </span>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <a href="#">Psychonnect</a>
        </div>
        <div className="nav__menu__btn" id="menu-btn">
          <i className="ri-menu-line"></i>
        </div>
      </div>
      <ul className="nav__links" id="nav-links">
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT US</a></li>
        <li><a href="#">CONTACT US</a></li>
      </ul>
      <div className="nav__links" id="nav-links">
        <li><a className="btn"  href="login.html">GET STARTED</a></li>
      </div>
    </nav>
  );
}

export default homepage;
