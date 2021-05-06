import "./style.css";
import React from 'react';
import {FaDribbble, FaFile,FaLayerGroup,FaTachometerAlt} from "react-icons/fa";


export default function ServiceCard(props) {
  return (
     <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
          <div class="icon-box">
          <div class="icon"><i><FaDribbble/></i></div>
          <h4><a href="">{props.heading}</a></h4>
          <p>{props.data}</p>
          </div>
          </div>

  );
}


