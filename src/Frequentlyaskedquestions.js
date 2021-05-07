import './style.css';
import React from 'react';
import Faqcard from './Faqcard';
import { FaChevronUp,FaChevronDown, FaRegQuestionCircle } from 'react-icons/fa';
import Faqdata from './Faqdata';



export default function FAQ() {
 return (
    <section id="faq" class="faq section-bg">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h2>Frequently Asked Questions</h2>
        <p>If you have any Questions about our services here we are with Frequently Asked Questions and if you still feel you want to know more just head over to Contact Section</p>
      </div>

      <div class="faq-list">
      <ul>
      {
              Faqdata.map((val,ind) =>{
                return <Faqcard
                 key={ind}
                 faq={val.faq}
                 target={val.target}
                 reply={val.reply}
                 targetdata={val.targetdata}
                />
              })
            }
        </ul>
      </div>

    </div>
  </section>
  );
}
