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
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div class="row">

      <ServiceCard
       heading="Lorem Ipsum"
       data="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
      />
      <ServiceCard
       heading="Lorem Ipsum"
       data="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
      />
      <ServiceCard
       heading="Lorem Ipsum"
       data="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
      />
      <ServiceCard
       heading="Lorem Ipsum"
       data="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
      />


      </div>

    </div>
  </section> 
  );
}

export default Service;
