import Signin from './Signin';
import './Register.css';

function Register() {

  return (
    <div>
      
    <div class="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content" style={{border:"4px solid  #47b2e4"}}>
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Sign up</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body mx-3">
      <form>
        <div class="md-form mb-3">
          <i class="fas fa-user prefix grey-text" style={{fontSize:"25px"}}></i>
          <input type="text" id="orangeForm-name" class="form-control validate" placeholder="Enter Your Name Please!" required/>
          <label data-error="wrong" data-success="right" for="orangeForm-name"></label>
        </div>
        <div class="md-form mb-3">
          <i class="fas fa-envelope prefix grey-text" style={{fontSize:"25px"}}></i>
          <input type="email" id="orangeForm-email" class="form-control validate" placeholder="Email!" required/>
          <label data-error="wrong" data-success="right" for="orangeForm-email"></label>
        </div>

        <div class="md-form mb-3">
          <i class="fas fa-lock prefix grey-text" style={{fontSize:"25px"}}></i>
          <input type="password" id="orangeForm-pass" class="form-control validate" placeholder="Password!" required/>
          <label data-error="wrong" data-success="right" for="orangeForm-pass"></label>
        </div>
      </form>
      </div>
      <div class="modal-footer d-flex justify-content-center">
      <button style={{width:"50%"}} type="button" class="signup" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">Sign Up</span>
        </button>
        <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-dismiss="modal" data-target="#modalRegisterF">Already Have a account!signin</a>
      </div>
    </div>
  </div>
</div>

<Signin/>
</div>
  );
}

export default Register;
