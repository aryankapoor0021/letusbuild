import "./style.css";
import {FaPlayCircle} from "react-icons/fa";
import React from 'react';

export default function About() {
  return (
   <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>About Us</h2>
        </div>

        <div class="row content">
          <div class="col-lg-6">
            <p>
               We are One of the first Construction cum Renovation cum daily household problem solver company ,Why fear when letusbuid is here.
            </p>
            <ul>
              <li><i class="far fa-check-double"></i> From Constructing Room to A Villa</li>
              <li><i class="far fa-check-double"></i> From Renovating a Room to Renovating a Mansion</li>
              <li><i class="far fa-check-double"></i> From Basic Plumbing Service to Architects we got all covered</li>
            </ul>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
               We are fully dedicated towards providing you with best experience as one of the first Construction cum renovation Service Provider.
               We are One of the first Construction cum Renovation cum daily household problem solver company ,Why fear when letusbuid is here.
               Currently we are operational in limited cities but our main focus is on including as many people as we can So hang in there we will be there with you soon.
            </p>
            <a href="#" class="btn-learn-more">Learn More</a>
          </div>
        </div>

      </div>
    </section>
     );
}