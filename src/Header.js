import "./Header.css";
import React from 'react';
import LoginModal from './LoginModal.js';

export default function Header() {
  return (
   <header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center">

      <h1 class="logo mr-auto"><a href="index.html"><img src=""/>LETUSBUILD</a></h1>
      <nav class="nav-menu navbar navbar-expand-lg navbar-dark ">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav">
          <li class="active"><a href="index.html">Home</a></li>
          <li><a href="#about">About</a></li>
          <li class="drop-down"><a href="#services">Services<i class="fas fa-chevron-down"></i></a>
            <ul>
              <li><a href="#">Building Materials</a></li>
              <li><a href="#">Construction Team</a></li>
              <li><a href="#">Plumber</a></li>
              <li><a href="#">Electrician</a></li>
              <li class="drop-down"><a href="#">Many More</a>
                <ul>
                  <li><a href="#">Architect</a></li>
                  <li><a href="#">Carpenter</a></li>
                  <li><a href="#">Painter</a></li>
                  <li><a href="#">Mason</a></li>
                  <li><a href="#">Construction Helper</a></li>
                  <li><a href="#">More</a></li>


                </ul>
              </li>
            </ul>
          </li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#contact">Contact</a></li>

        </ul>
      </div>
      </nav>
      &nbsp;&nbsp;&nbsp;
      
  <LoginModal/>
  <div class="text-center">
  <a href="" class="get-started-btn scrollto btn btn-default btn-rounded my-3" data-toggle="modal" data-target="#modalLRForm">
  Login/SignUp</a>
</div>
    </div>
  </header>
  );
}


