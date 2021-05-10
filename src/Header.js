import React from "react";
import {NavLink} from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import Register from './Register.jsx';
import LoginModal from  './LoginModal.js'
// import './Navbar.css';


// import './style.css';
 import './Header.css';

function Header() {
  return (
<div id="header" class="container-fluid p-0">
 <div class="row no-gutters">
<div className="col-12 mx-auto">
           

<nav className="navbar navbar-expand-lg fixed-top ">
<a href="./index.html" className="font"
style={{color:"white"}}><h1 class="logo mr-auto"><b>Let_Us_Build</b></h1></a>

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="x navbar-toggler-icon " data-spy="scroll"><FaCaretDown/></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav ml-auto mr-5">
<li className="nav-item active">
<a exact className="nav-link p-2 " href="#">Home <span class="sr-only">(current)</span></a>
</li>

<li exact className="nav-item pl-2 pr-0">
<a className="nav-link" href="#about">About</a>
</li>
<li className="nav-item">
<div class="dropdown">
  <a to="#"  class="dropdown-toggle" data-toggle="dropdown">
    Services
  </a>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#"><span style={{color:"black"}}>Building Material</span></a>
    <a class="dropdown-item" href="#"><span  style={{color:"black"}}>Construction Team</span></a>
    <a class="dropdown-item" href="#"><span  style={{color:"black"}}>Plumber</span></a>
    <a class="dropdown-item" href="#"><span  style={{color:"black"}}>Electrician</span></a>
    <a class="dropdown-item" href="#"><span  style={{color:"black"}}>Carpenter</span></a>
  </div>
</div>
</li>
<li exact className="nav-item p-2">
<a className="nav-link" href="#portfolio">Portfolio</a>
</li>
<li exact className="nav-item p-2">
<a className="nav-link" href="#team">Team</a>
</li>
<li exact className="nav-item pl-2 pr-0">
<a className="nav-link" href="#contact">Contact</a>
</li>
<li>
<LoginModal/>
</li>

</ul>

</div>
</nav>
</div>

    </div>

</div>

  );
}

export default Header;
// import "./Header.css";
// import LoginModal from './LoginModal.js';

// export default function Header() {
//   return (
//     <header id="header" class="fixed-top ">

//     <div class="container d-flex align-items-center">

//     <h1 class="logo mr-auto"><a href="index.html"><img src=""/>LETUSBUILD</a></h1>

//     <nav class="nav-menu navbar navbar-expand-lg navbar-dark ">

//       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//       </button>

//       <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
//         <ul class="navbar-nav">
//           <li class="active"><a href="index.html">Home</a></li>
//           <li><a href="#about">About</a></li>
//           <li class="drop-down"><a href="#services">Services<i class="fas fa-chevron-down"></i></a>
//             <ul>
//               <li><a href="#">Building Materials</a></li>
//               <li><a href="#">Construction Team</a></li>
//               <li><a href="#">Plumber</a></li>
//               <li><a href="#">Electrician</a></li>
//               <li class="drop-down"><a href="#">Many More</a>
//                 <ul>
//                   <li><a href="#">Architect</a></li>
//                   <li><a href="#">Carpenter</a></li>
//                   <li><a href="#">Painter</a></li>
//                   <li><a href="#">Mason</a></li>
//                   <li><a href="#">Construction Helper</a></li>
//                   <li><a href="#">More</a></li>


//                 </ul>
//               </li>
//             </ul>
//           </li>
//           <li><a href="#portfolio">Portfolio</a></li>
//           <li><a href="#team">Team</a></li>
//           <li><a href="#contact">Contact</a></li>

//         </ul>
//       </div>

      
//       </nav>

//   <LoginModal/>
//   </div>
//   </header>
//   );
// }


