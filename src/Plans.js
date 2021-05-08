import './style.css';


export default function Plans(){
  return(
    <section id="pricing" class="pricing">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Plans</h2>
          <p>Our Top Selling Plans are listed below have a look and choose what is Best for you</p>
        </div>

        <div class="row">

          <div class="col-lg-4" data-aos="flip-left" data-aos-duration="900">
            <div class="box">
              <h3>Single Professional Plan</h3>
              <h4><sup>&#8377;</sup>299<span>onwards</span></h4>
              <ul>
                <li><i class="fas fa-check"></i> Include Single Individual</li>
                <li><i class="fas fa-check"></i> Plumbers,Carpenters,Electricians,Painters etc </li>
                <li><i class="fas fa-check"></i> Basic Household or Office Problems are fixed</li>
                <li class="na"><i class="fas fa-x"></i> <span> Team of 10 Members will be there</span></li>
                <li class="na"><i class="fas fa-x"></i> <span> Full Customer Care Support will be provided</span></li>
              </ul>
              <a href="#" class="buy-btn">Get Details</a>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-duration="900">
            <div class="box featured">
              <h3>Renovation Plan</h3>
              <h4><sup>&#8377;</sup>1999<span>onwards</span></h4>
              <ul>
                <li><i class="fas fa-check"></i> Plan include complete Renovation of your place</li>
                <li><i class="fas fa-check"></i> Charges will be decided according to your selection</li>
                <li><i class="fas fa-check"></i> Full Customer Care Support will be provided</li>
                <li><i class="fas fa-check"></i> Team of minimum !0 Professionals will be there</li>
                <li><i class="fas fa-check"></i> Increasing team size will Cost more costs</li>
              </ul>
              <a href="#" class="buy-btn"> Get Details</a>
              
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0" data-aos="flip-right" data-aos-duration="900">
            <div class="box">
              <h3>Construction Plan</h3>
              <h4><sup>&#8377;</sup>49999<span>onwards</span></h4>
              <ul>
                <li><i class="fas fa-check"></i> Plan includes construction of anything</li>
                <li><i class="fas fa-check"></i> Construction can be of a single room to a full house</li>
                <li><i class="fas fa-check"></i> Full Customer Support Will be Provided</li>
                <li><i class="fas fa-check"></i> Architect will be provided at discounted price</li>
                <li><i class="fas fa-check"></i> Minimum team of 15 Professionals will be there</li>
              </ul>
              <a href="#" class="buy-btn">Get Details</a>
            </div>
          </div>

           
        
        </div>

      </div>
    </section>
    );
}