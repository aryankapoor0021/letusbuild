import "./style.css";
import React from 'react';


export default function PortfolioCard(props) {
  return (
     <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-img"><img src={props.source} class="img-fluid" height="500" width="500" alt=""/></div>
            <div class="portfolio-info">
              <h4>{props.heading}</h4>
              <p>{props.data}</p>
              <a href={props.source} data-gall="portfolioGallery" class="venobox preview-link" title="App 1"><i class="fa fa-plus" aria-hidden="true"></i></a>
            </div>
    </div>
  
  );
}


