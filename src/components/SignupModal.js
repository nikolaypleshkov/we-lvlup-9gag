class Modal extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <div class="modal fade modal2" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="signupModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header d-block">
              <button class="close btn" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="bi bi-x-lg"></i></span>
              </button>
              <div class="modal-header-content w-100"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="45" viewBox="0 0 40 45" role="presentation" data-v-7ccfb494=""><g fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 27L0.5 15.75V11.25L20 0L39.5 11.25V33.75L20 45L0.5 33.75L8.3 29.25L20 36L31.7 29.25V20.25L20 27ZM12.2 13.5L20 18L27.8 13.5L20 9L12.2 13.5Z" fill="black" data-v-7ccfb494=""></path></g></svg>
                <h5>7GAG is the HQ of meme</h5>
              </div>
              <p class="modal-header-footer mt-5"> 
                By continuing, you agree to 7GAG's Terms of Service and acknowledge that you've read our Privacy Policy.
              </p>
            </div>
            <div class="modal-body">
              <button class="btn w-100 social-btn" id="facebookSignIn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" role="presentation" data-v-54bf6a48=""><g fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.327 20.4948C15.6985 20.3222 20 15.9134 20 10.5C20 4.97715 15.5228 0.5 10 0.5C4.47715 0.5 0 4.97715 0 10.5C0 15.9366 4.33833 20.3598 9.7419 20.4967C9.29935 20.4855 8.86397 20.4454 8.4375 20.3785V13.5H6V10.5H8.4375V8.29688C8.4375 5.79063 9.93043 4.40625 12.2146 4.40625C13.3087 4.40625 14.4531 4.60156 14.4531 4.60156V7.0625H13.1921C11.9499 7.0625 11.5625 7.83334 11.5625 8.62416V10.5H14.3359L13.88 13.5H11.5625V20.3785C11.1582 20.442 10.7459 20.4813 10.327 20.4948Z" fill="#1877F2" data-v-54bf6a48=""></path></g></svg> Sign in with Facebook</button>
              <button class="btn w-100 social-btn" id="googleSignIn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" role="presentation" data-v-54bf6a48=""><g fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.6 10.2273C19.6 9.51825 19.5364 8.83643 19.4182 8.18188H10V12.0501H15.3818C15.15 13.3001 14.4455 14.3592 13.3864 15.0682V17.5773H16.6182C18.5091 15.8364 19.6 13.2728 19.6 10.2273Z" fill="#4285F4"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.99984 19.9999C12.6998 19.9999 14.9635 19.1044 16.618 17.5772L13.3862 15.0681C12.4907 15.6681 11.3453 16.0226 9.99984 16.0226C7.39529 16.0226 5.19075 14.2635 4.40439 11.8999H1.06348V14.4908C2.70893 17.759 6.09075 19.9999 9.99984 19.9999Z" fill="#34A853"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.40455 11.8999C4.20455 11.2999 4.09091 10.659 4.09091 9.99994C4.09091 9.34085 4.20455 8.69994 4.40455 8.09994V5.50903H1.06364C0.386364 6.85903 0 8.38631 0 9.99994C0 11.6136 0.386364 13.1409 1.06364 14.4909L4.40455 11.8999Z" fill="#FBBC05"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.99984 3.97727C11.468 3.97727 12.7862 4.48182 13.8226 5.47273L16.6907 2.60455C14.9589 0.990909 12.6953 0 9.99984 0C6.09075 0 2.70893 2.24091 1.06348 5.50909L4.40439 8.1C5.19075 5.73636 7.39529 3.97727 9.99984 3.97727Z" fill="#EA4335"></path></g></svg> Sign in with Google</button>
              <button class="btn w-100 social-btn" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Use email</button>
              <button class="btn w-100" data-bs-target="#exampleModalCenter" data-bs-toggle="modal" data-bs-dismiss="modal">Already a member? Log in</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button class="close btn" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="bi bi-x-lg"></i></span>
              </button>
              <h5 class="modal-title" id="exampleModalLongTitle">Sign up</h5>
            </div>
            <div class="modal-body" id="signUpBody">
            <div class="alert alert-danger mt-2" id="danger-credit">
              <span>Please enter valid credentials.</span>
            </div>
              <form id="signupForm"> 
                <div class="form-group"> 
                  <input type="text" placeholder="Username" class="form-control" id="fullName"/>
                  <div class="alert alert-danger mt-2" id="danger-username">
                    <span>Username must be at least 3 characters long.</span>
                  </div>
                </div>
                <div class="form-group mt-2"> 
                  <input type="text" placeholder="Email address" class="form-control" id="username"/>
                  <div class="alert alert-danger mt-2" id="danger-email">
                    <span>Enter Valid Email</span>
                  </div>
                </div>
                <div class="form-group mt-2"> 
                  <input type="password" placeholder="Password" class="form-control" id="password"/>
                  <div class="alert alert-danger mt-2" id="danger-password">
                    <span>Password Length must be at least 6 characters long.</span>
                  </div>
                </div>
                <div class="form-group mt-2"> 
                  <button class="btn __btn-primary w-100" type="submit">Sign up</button>
                </div>
              </form>
              <div class="form-group mt-2"> 
                <button class="btn w-100" data-bs-target="#exampleModalCenter" data-bs-toggle="modal" data-bs-dismiss="modal">Already a member? Log in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("app-signup-modal", Modal);
