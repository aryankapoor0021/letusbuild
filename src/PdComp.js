 import './style.css';

 export default function PdComp(props){

 return(
      <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
        <img src={props.source} class="img-fluid" alt=""/>
      </div>
    );
  }
