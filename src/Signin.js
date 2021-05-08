import { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import './Register.css';

function Signin() {

  

  return (
    <div>
      
    <div class="modal fade" id="modalRegisterF" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content" style={{border:"4px solid  #47b2e4"}}>
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Sign In</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body mx-3">
      <form>
        {/* <div class="md-form mb-3">
          <i class="fas fa-user prefix grey-text" style={{fontSize:"25px"}}><FaUser/></i>
          <input type="text" id="orangeForm-name" class="form-control validate" placeholder="Enter Your Name Please!" required/>
          <label data-error="wrong" data-success="right" for="orangeForm-name"></label>
        </div> */}
        <div class="md-form mb-3">
          <i class="fas fa-envelope prefix grey-text" style={{fontSize:"25px"}}><FaEnvelope/></i>
          <input type="email" id="orangeForm-email" class="form-control validate" placeholder="Email!" required/>
          <label data-error="wrong" data-success="right" for="orangeForm-email"></label>
        </div>

        <div class="md-form mb-3">
          <i class="fas fa-lock prefix grey-text" style={{fontSize:"25px"}}><FaLock/></i>
          <input type="password" id="orangeForm-pass" class="form-control validate" placeholder="Password!" required/>
          <label data-error="wrong" data-success="right" for="orangeForm-pass"></label>
        </div>
      </form>
      </div>
      <div class="modal-footer d-flex justify-content-center">
      <button style={{width:"100%"}} type="button" class="signup" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">Sign In</span>
        </button>
        </div>
    </div>
  </div>
</div>


</div>
  );
}

export default Signin;
