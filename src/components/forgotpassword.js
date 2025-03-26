import React from 'react'
// import "../forgotpassword.css"
// import logo from '../content/img/skaiii.png'
export default function Forgotpassword() {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="forgot-wrapper">
            <div className="forgot-page">
              <div className="left">
                <h2>
                  Forgot Password
                </h2>
                <label for="exampleFormControlInput1" className="form-label">User Name <span>*</span></label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="users name" />
                <div className="mt-5">
                  <a href="/register" className="site-btn">Forgot Password</a>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}
