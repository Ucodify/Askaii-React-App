import React from 'react'
// import "../register.css";
// import logo from '../content/img/skaiii.png'
export default function Register() {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="forgot-wrapper">
            <div className="forgot-page">
              <div className="left">
                <h2>
                  Register Account Form
                </h2>

                <label for="exampleFormControlInput1" className="form-label">Full Name <span>*</span></label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full Name" />


                <label for="exampleFormControlInput1" className="form-label">Email<span>*</span></label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@gmail.com" />


                <label for="exampleFormControlInput1" className="form-label">password<span>*</span></label>
                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="password" />

                <div className="mt-5">
                  <a href="#" className="site-btn"> Register</a>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}
