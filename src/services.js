import ServiceCard from './ServiceCard.js';
import "./style.css";
import {FaDribbble, FaFile,FaLayerGroup,FaTachometerAlt} from "react-icons/fa";



function Service() {
  return (
    
    <section id="services" class="services section-bg">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h2>Services</h2>
        <p>Time to end your worries on anything related to your Construction work, letusbuild is here with you , From building Materials to Construction Team to Architect and Plumbing or Electrical Services and many more we are here.</p>
      </div>

      <div class="row">

      <ServiceCard 
       heading="Building Materials"
       data="One stop solution for your Building Materials needs"
      />
      <ServiceCard
       heading="Construction Team"
       data="Need any rennovations or Project from scratch ,Team of experienced professionals is here"
      />
      <ServiceCard
       heading="Plumbing Services"
       data="All your Sanitary Rennovations and Repair Work is our Headache now Just book your time slot"
      />
      <ServiceCard
       heading="Electrician"
       data="Neeed any RepairWork or rennovations in previous fiitings just register yourself our team will be their with you."
      />


      </div>

    </div>
  </section> 
  );
}

export default Service;
