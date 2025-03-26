import React from 'react'
// import "../login.css";
// import logo from '../content/img/skaiii.png'
export default function Login() {
    return (
        <>
            <section>
                <div class="container-fluid">
                    <div class="login-wrapper">
                        <div class="login-page">
                            <div class="head">
                                <img src="content/img/image.png" alt="logo" />
                            </div>
                            <div class="body">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="left">
                                            <img src="content/img/login-img.webp" alt="image" />
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="right">
                                            <h2>
                                                log <span>In</span>
                                            </h2>


                                            <div class="input-side">

                                                <label for="exampleFormControlInput1" class="form-label">User Name</label>
                                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="User Name" />

                                                <label for="exampleFormControlInput1" class="form-label">Password</label>
                                                <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="**********" />

                                                <div class="Forgotpassword">
                                                    <a href="/forgotpassword">Forgotpassword?</a>
                                                </div>

                                                <div class="mt-4">
                                                    <a href="#" class="site-btn">Log In</a>
                                                </div>

                                                <p>
                                                    OR
                                                </p>

                                                <div class="register">
                                                    <a href="/register">Register</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
