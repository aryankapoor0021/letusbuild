import "./style.css";


import React from 'react';

export default function US() {
  return (
   <section id="why-us" class="why-us section-bg ">
      <div class="container-fluid" data-aos="zoom-out">

        <div class="row">

          <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

            <div class="content">
              <h3>So the Question is <strong>Why should you Choose Us?</strong></h3>
              <p>
                We are fully dedicated towards providing you with best experience as one of the first Construction cum renovation Service Provider.
              </p>
            </div>

            <div class="accordion-list">
              <ul>
                <li>
                  <a data-toggle="collapse" class="collapse" href="#accordion-list-1"><span>01</span>What do we do basically ?<i class="fas fa-chevron-down icon-show"></i><i class="fas fa-chevron-up icon-close"></i></a>
                  <div id="accordion-list-1" class="collapse show" data-parent=".accordion-list">
                    <p>
                      We are One of the first Construction cum Renovation cum daily household problem solver company ,Why fear when letusbuid is here.
                    </p>
                  </div>
                </li>

                <li>
                  <a data-toggle="collapse" href="#accordion-list-2" class="collapsed"><span>02</span>Where are we located? <i class="fas fa-chevron-down icon-show"></i><i class="fas fa-chevron-up icon-close"></i></a>
                  <div id="accordion-list-2" class="collapse" data-parent=".accordion-list">
                    <p>
                     Currently we are operational in limited cities but our main focus is on including as many people as we can So hang in there we will be there with you soon.
                    </p>
                  </div>
                </li>

                <li>
                  <a data-toggle="collapse" href="#accordion-list-3" class="collapsed"><span>03</span> Do you only make big villas or mansions? <i class="fas fa-chevron-down icon-show"></i><i class="fas fa-chevron-up icon-close"></i></a>
                  <div id="accordion-list-3" class="collapse" data-parent=".accordion-list">
                  <p>
                    No guys we construct from a single room to Big mansions we renovate also and we provide single single service also like plumbing ,electrical services,paint job etc.
                  </p>
                  </div>
                </li>

              </ul>
            </div>

          </div>

          <div class="col-lg-5 align-items-stretch order-1 order-lg-2 img " id="backimg"  data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
        </div>

      </div>
    </section>
     );
}
