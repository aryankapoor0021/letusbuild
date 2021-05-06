import './style.css';
import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {FaPhone,FaEnvelope,FaMapMarkerAlt} from "react-icons/fa";
import React from 'react';


export default function Contact(){
 return (
    <section id="contact" class="contact">
        <div class="container" data-aos="fade-up">

        <div class="section-title">
        <h2>Contact</h2>
        <p>To get a hold on anything you to build here are our professionals to help you out</p>
       </div>
       <div class="row">

          <div class="col-lg-5 d-flex align-items-stretch">
            <div class="info">
              <div class="address">
                <i><FaMapMarkerAlt/></i>
                <h4>Location:</h4>
                <p>2108 Cyber  City Gurugram, Haryana, India </p>
              </div>

              <div class="email">
                <i><FaEnvelope/></i>
                <h4>Email:</h4>
                <p>info@letusbuild.com</p>
              </div>

              <div class="phone">
                <i><FaPhone/></i>
                <h4>Call:</h4>
                <p>1800 00 111</p>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.5331885638834!2d77.088325!3d28.493601799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19f3b01329bb%3A0xf27148d55ec14723!2sCyber%20City!5e0!3m2!1sen!2sbg!4v1620196547982!5m2!1sen!2sbg" frameborder={0} style={{border:0,width:'100%', height:'290'}} allowfullscreen></iframe>
              
               </div>

          </div>
          <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" class="form-control" id="name" required/>
                </div>
                <div class="form-group col-md-6">
                  <label for="name">Your Email</label>
                  <input type="email" class="form-control" name="email" id="email" required/>
                </div>
              </div>
              <div class="form-group">
                <label for="name">Subject</label>
                <input type="text" class="form-control" name="subject" id="subject" required/>
              </div>
              <div class="form-group">
                <label for="name">Message</label>
                <textarea class="form-control" name="message" rows="10" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>
       </div>
    </section>
  );
}
