import "./style.css";
import React from 'react';
import PortfolioCard from './PortfolioCard.js';
export default function Portfolio() {
  return (
    
    <section id="portfolio" class="portfolio">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <PortfolioCard  source="https://i.pinimg.com/originals/62/70/5b/62705bad335a1ba14d7f845a4d521c38.jpg" heading="Tiles Showroom" data="One of the Best Tiles Showroom"/>

          <PortfolioCard  source="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" heading="Construction Crew" data="Construction Team Doing their work"/>

          <PortfolioCard  source="https://images.unsplash.com/photo-1605955771720-4650a2f0c7e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" heading="Construction Site" data="Sunset View of Construction Site"/>
          
          <PortfolioCard  source="https://image.shutterstock.com/image-photo/building-site-house-under-construction-600w-303643166.jpg" heading="House Under Construction" data="A beautiful house upcoming"/>
        
          <PortfolioCard  source="https://c8.alamy.com/comp/F8MPWT/young-man-in-carpentry-workshop-looking-down-sanding-skateboard-F8MPWT.jpg" heading="Carpenter Working" data="Our Team doesnt work with their full engagement"/>

          <PortfolioCard  source="https://st.depositphotos.com/1000291/3041/i/950/depositphotos_30414593-stock-photo-electrician-worker-inspecting.jpg" heading="Electrcican at Site" data="Our team is very serious if its about work"/>

          <PortfolioCard  source="https://www.empoweredowl.com/wp-content/uploads/2018/06/plumber-working.jpg" heading="Plumbing Services" data="Yes our guys get happy after wrapping up  their work"/>
        
          <PortfolioCard  source="https://c1.wallpaperflare.com/preview/225/519/734/mason-construction-bucket-work.jpg" heading="Mason Also here" data="Hardworking arranging Bricks"/>
         
          <PortfolioCard  source="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJjaGl0ZWN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=150" heading="Finest Architects" data="One of the best Architects are available"/>


          

        </div>

      </div>
    </section>
     );
}