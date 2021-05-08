import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import LoginModal from './LoginModal.js';
import Team from './Team.js';
import Header from './Header.js';
import Hero from './Hero.js';
import Footer from './Footer.js';
import Contact from './Contact.js';
import Service from './services.js';
import About from './About.js';
import US from './US.js';
import Products from './Products.js';
import Portfolio from './Portfolio.js';
import Show from './Show.js';
import Frequentlyaskedquestions from './Frequentlyaskedquestions.js';
import Plans from './Plans.js';


ReactDOM.render(

<div >
    <LoginModal/>
    <Header/>
	<Hero/>
	<Products/>
	<US/>
	<About/>
	<Frequentlyaskedquestions/>
	<Service/>
	<Show/>
	<Portfolio/>
	<Team/>
	<Plans/>
	<Contact/>
    <Footer/>
    <a href="#" class="back-to-top"><i class="fas fa-chevron-up" ></i></a>
    <div id="preloader"></div>
	</div>
    ,
  document.getElementById('root')
);

