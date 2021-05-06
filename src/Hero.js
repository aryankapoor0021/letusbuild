import "./style.css";
import {FaPlayCircle} from "react-icons/fa";
import React from 'react';

export default function Header() {
  return (
    <section id="hero" class="d-flex align-items-center">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1>Better Solutions For Your Construction Plans</h1>
          <h2>We made a Solution for You Just Select What you want it will be there</h2>
          <div class="d-lg-flex">
            <a href="#about" class="btn-get-started scrollto">Get Started</a>
            <a href="https://youtu.be/kFbug8as10U?t=144" target="blank" class="venobox btn-watch-video" data-vbtype="video" data-autoplay="true"><FaPlayCircle/> Watch Video </a>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <img src="https://cdn.discordapp.com/attachments/756197061799444660/838680998505086986/Studio_Project_3.jpeg" class="img-fluid animated" alt=""/>
        </div>
      </div>
    </div>
  </section>
     );
}
