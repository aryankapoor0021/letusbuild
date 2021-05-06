import './style.css';
import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import React from 'react';


export default function Team() {
 return (
    <section id="team" class="team section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Team</h2>
          <p>We got a Team of Really HardWorking and Enthusiastic Professionals who are working Day & Night to take the company to the next level</p>
        </div>

        <div class="row">

          <div class="col-lg-6">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
              <div class="pic"><img src="https://media-exp1.licdn.com/dms/image/C4E03AQFYzEVJIkSPAg/profile-displayphoto-shrink_800_800/0/1620065946219?e=1625702400&v=beta&t=Rs0PhzphTd7HkIvDHsHnKxhbp44BATwbTaE5VqvJsYg" class="img-fluid" alt=""/></div>
              <div class="member-info">

                <h4>Aryan Kapoor</h4>
                <span>Co-Founder</span>
                <p>To be Written</p>
                <div class="social">
                  <a target="blank" href=""><FaTwitter /></a>
                  <a target="blank" href=""><FaInstagram/></a>
                  <a target="blank" href=""><FaFacebook/></a>
                  <a target="blank" href="https://www.linkedin.com/in/aryan-kapoor-b95b4319a/"><FaLinkedinIn/></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4 mt-lg-0">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
              <div class="pic"><img src="https://media-exp1.licdn.com/dms/image/C5603AQHnICc8u5Kecg/profile-displayphoto-shrink_800_800/0/1606565434056?e=1625702400&v=beta&t=rvVLhZeL6E_SxY6FOTYpEMCFcsPlqZUJsUbzpk7YxOM" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Manan Nagpal</h4>
                <span>Co-Founder</span>
                <p>To be Written</p>
                <div class="social">
                  <a target="blank" href=""><FaTwitter /></a>
                  <a target="blank" href=""><FaInstagram/></a>
                  <a target="blank" href=""><FaFacebook/></a>
                  <a target="blank" href="https://www.linkedin.com/in/manan-nagpal-758b66200/"><FaLinkedinIn/></a>
                </div>

              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
              <div class="pic"><img src="https://media-exp1.licdn.com/dms/image/C5603AQFEjX3Bsy5cAA/profile-displayphoto-shrink_800_800/0/1588065641907?e=1625702400&v=beta&t=hxNEHbcLnZF3tygCFKm_8_PtdW6vKt725vi0SWNtkKg" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Aradhna Chabhra</h4>
                <span>Co-Founder</span>
                <p>To be Written</p>
                <div class="social">
                  <a target="blank" href=""><FaTwitter /></a>
                  <a target="blank" href=""><FaInstagram/></a>
                  <a target="blank" href=""><FaFacebook/></a>
                  <a target="blank" href="https://www.linkedin.com/in/aradhanachhabra/"><FaLinkedinIn/></a>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
