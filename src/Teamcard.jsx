import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";

function Teamcard(props) {
  return (
    <div class="col-lg-4 mb-4">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
              <div class="pic"><img src={props.imgsrc} class="img-fluid" alt=""/></div>
              <div class="member-info">

                <h4>{props.name}</h4>
                <span>Co-Founder</span>
                <p>{props.about}</p>
                <div class="social">
                  <a target="blank" href=""><FaTwitter /></a>
                  <a target="blank" href=""><FaInstagram/></a>
                  <a target="blank" href=""><FaFacebook/></a>
                  <a target="blank" href={props.imgsrc} ><FaLinkedinIn/></a>
                </div>
              </div>
            </div>
          </div>
  );
}

export default Teamcard;
