import { FaChevronDown, FaChevronUp, FaQuestionCircle, FaRegQuestionCircle } from 'react-icons/fa';
import './style.css';

function Faqcard(props) {
  return (
    <li data-aos="fade-up" data-aos-delay="100">
    <i className="far fa-question-circle icon-help" style={{fontSize:"25px"}}></i> 
    <a data-toggle="collapse" className="collapse mt-1 ml-1" data-target={props.targetdata}>
      {props.faq}
      <i class="fas fa-chevron-down icon-show"/>
        <i class="fas fa-chevron-up icon-close"></i></a>
    <div id={props.target} class="collapse show" data-parent=".faq-list">
      <p>
          {props.reply}
        </p>
    </div>
  </li>
  );
}

export default Faqcard;


