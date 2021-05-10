import './Header.css';
export default function LoginModal(){

return(
<div>  
<div class="text-center">
  <a href="" class="get-started-btn scrollto btn btn-default btn-outline-secondary btn-rounded my-3 " data-controls-modal="#modalLRForm" data-backdrop="static" data-keyboard="false" data-toggle="modal" data-target="#modalLRForm">Login/SignUp</a>
 
  </div>
<div class="modal fade" id="modalLRForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog cascading-modal" role="document">

    <div class="modal-content" style={{border:"5px solid #292b2c"}}>
      <div class="modal-c-tabs">
        <ul class="nav nav-tabs md-tabs tabs-2 light-blue darken-3 bg-dark" role="tablist">
          <li class="nav-item ">
            <a class="nav-link active text-secondary" data-toggle="tab" href="#panel7" role="tab"><i class="fas fa-user mr-1"></i>
              Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-secondary" data-toggle="tab" href="#panel8" role="tab"><i class="fas fa-user-plus mr-1"></i>
              Register</a>
          </li>
          <button type="button" class="btn btn-dark waves-effect ml-auto" data-dismiss="modal">&times;</button>
        </ul>
        <div class="tab-content">
          <div class="tab-pane fade in show active" id="panel7" role="tabpanel">

            <div class="modal-body mb-1">
              <div class="md-form form-sm mb-5">
                <i class="fas fa-envelope prefix"></i>
                <input type="email" id="modalLRInput10" class="form-control form-control-sm validate"/>
                <label data-error="wrong" data-success="right" for="modalLRInput10">Your email</label>
              </div>

              <div class="md-form form-sm mb-4">
                <i class="fas fa-lock prefix"></i>
                <input type="password" id="modalLRInput11" class="form-control form-control-sm validate"/>
                <label data-error="wrong" data-success="right" for="modalLRInput11">Your password</label>
              </div>
              <div class="text-center mt-2">
                <button class="btn btn-dark">Log in <i class="fas fa-sign-in ml-1"></i></button>
              </div>
            </div>
            <div class="modal-footer bg-light">
              <div class="options text-center text-md-right mt-1">
                <p>Not a member? <a href="#" class="text-info">Sign Up</a></p>
                <p><a href="#" class="text-info">Forgot Password?</a></p>
              </div>
              <button type="button" class="btn btn-outline-secondary waves-effect ml-auto text-dark" data-dismiss="modal">Close</button>
            </div>

          </div>
           <div class="tab-pane fade" id="panel8" role="tabpanel">
            <div class="modal-body">
              <div class="md-form form-sm mb-5">
                <i class="fas fa-envelope prefix"></i>
                <input type="email" id="modalLRInput12" class="form-control form-control-sm validate"/>
                <label data-error="wrong" data-success="right" for="modalLRInput12">Your email</label>
              </div>

              <div class="md-form form-sm mb-5">
                <i class="fas fa-lock prefix"></i>
                <input type="password" id="modalLRInput13" class="form-control form-control-sm validate"/>
                <label data-error="wrong" data-success="right" for="modalLRInput13">Your password</label>
              </div>

              <div class="md-form form-sm mb-4">
                <i class="fas fa-lock prefix"></i>
                <input type="password" id="modalLRInput14" class="form-control form-control-sm validate"/>
                <label data-error="wrong" data-success="right" for="modalLRInput14">Repeat password</label>
              </div>

              <div class="text-center form-sm mt-2">
                <button class="btn btn-dark">Sign up <i class="fas fa-sign-in ml-1"></i></button>
              </div>

            </div>
            <div class="modal-footer bg-light">
              <div class="options text-right">
                <p class="pt-1">Already have an account? <a href="" class="text-info">Log In</a></p>
              </div>
              <button type="button" class="btn btn-outline-secondary waves-effect ml-auto text-dark" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
 </div>
 </div>);
}
