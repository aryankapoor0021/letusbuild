import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Team from './Team.js';
import Header from './Header.js';
import Hero from './Hero.js';
import Footer from './Footer.js';
import Contact from './Contact.js';
import Service from './services.js';
import About from './About.js';
import US from './US.js';


ReactDOM.render(
<div class="wrap">
<Header/>
	<Hero/>
	<About/>``
	<Service/>
	<Contact/>
	<Team/>
    <Footer/>
	</div>
    ,
  document.getElementById('root')
);

