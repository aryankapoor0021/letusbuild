import React from 'react';
import './style.css';
import Teamdata from './Teamdata';
import Teamcard from './Teamcard';



export default function Team() {
 return (
    <section id="team" class="team section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Team</h2>
          <p>We got a Team of Really HardWorking and Enthusiastic Professionals who are working Day & Night to take the company to the next level</p>
        </div>

        <div class="row">
          {
              Teamdata.map((val,ind) =>{
                return <Teamcard
                 key={ind}
                 imgsrc={val.imgsrc}
                 name={val.name}
                 about={val.about}
                />
              })
            }
        </div>

      </div>
    </section>
  );
}
