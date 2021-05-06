import "./style.css";
import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {FaChevronRight} from "react-icons/fa";


import React from 'react';

export default function Footer() {
  return (
    <footer id="footer">

    <div class="footer-newsletter">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <h4>Join Our Newsletter</h4>
            <p>Daily Updates,Exciting Offers and much more is waiting for You</p>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>LETUSBUILD</h3>
            <p>
              2108 CYBER CITY <br/>
              GURUGRAM, HARYANA<br/>
              India <br/><br/>
              <strong>Phone:</strong>1800 00 111<br/>
              <strong>Email:</strong> info@letusbuild.com<br/>
            </p>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i><FaChevronRight/></i><a href="#">Home</a></li>
              <li><i><FaChevronRight/></i><a href="#">About us</a></li>
              <li><i><FaChevronRight/></i><a href="#">Services</a></li>
              <li><i><FaChevronRight/></i><a href="#">Terms of service</a></li>
              <li><i><FaChevronRight/></i><a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i><FaChevronRight/></i><a href="#">Plumber</a></li>
              <li><i><FaChevronRight/></i><a href="#">Carpenter</a></li>
              <li><i><FaChevronRight/></i><a href="#">Building Materials</a></li>
              <li><i><FaChevronRight/></i><a href="#">Mason</a></li>
              <li><i><FaChevronRight/></i><a href="#">Construction Team</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Social Networks</h4>
            <p>Hit em up to join us at our  Social Media Network</p>
            <div class="social-links mt-3">
                  <a target="blank" href=""><FaTwitter /></a>
                  <a target="blank" href=""><FaInstagram/></a>
                  <a target="blank" href=""><FaFacebook/></a>
                  <a target="blank" href=""><FaLinkedinIn/></a>
              
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="container footer-bottom clearfix">
      <div class="copyright">
        &copy; Copyright <strong><span>LETUSBUILD</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
       
        Designed by <a href="https://brocode.com/">BROCODE</a>
      </div>
    </div>
  </footer>
     );
}
