import React from 'react'
import logo from '../content/img/skaiii.png'


export default function Dashboard() {

    return (
        <>
            <div className="container-fluid" id="back-color">

                <div className="row">

                    <div className="col-lg-3 col-md-3 p-0 ">
                        <div className="side-navbar" id="side-navbar-color">
                            <div className="logo">
                                <a href="/"><img src={logo} alt="logo" /></a>
                            </div>

                            <div className="menu mt-4">

                                <ul className="list-iteams">

                                    <li>
                                        <div className="row d-block">
                                            <button className="btn-3 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                                data-bs-toggle="collapse" data-bs-target="#Dashboards-collapse" aria-expanded="false">
                                                <div className="col-lg-10 col-md-10">

                                                    <a href="/" className="Active"> <i className="fa-solid fa-gauge"></i> Dashboards </a>

                                                </div>
                                                <div className="col-lg-2 col-md-2">
                                                </div>
                                            </button>
                                            <div className="collapse" id="Dashboards-collapse" >
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="row d-block">
                                            <button className="btn-3 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed "
                                                data-bs-toggle="collapse" data-bs-target="#Bookings-collapse" aria-expanded="false">
                                                <div className="col-lg-10 col-md-10">
                                                    <i className="fa-brands fa-app-store-ios"></i>Bookings
                                                </div>
                                                <div className="col-lg-2 col-md-2">
                                                    <i className="fa-solid fa-chevron-down float-end"></i>
                                                </div>
                                            </button>
                                            <div className="collapse" id="Bookings-collapse" >
                                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                    <li><a href="/activebooking" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Active Bookings</a></li>
                                                    <li><a href="/cancelledbookings" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Cancelled Bookings</a></li>
                                                    <li><a href="/completedbookings" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Completed Bookings</a></li>
                                                    <li><a href="/quotes" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Quotes</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="row d-block">
                                            <button className="btn-3 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                                data-bs-toggle="collapse" data-bs-target="#Admin-Portal-collapse" aria-expanded="false">
                                                <div className="col-lg-10 col-md-10">
                                                    <i className="fa-solid fa-address-book"></i> Admin Portal
                                                </div>
                                                <div className="col-lg-2 col-md-2">
                                                    <i className="fa-solid fa-chevron-down float-end"></i>
                                                </div>
                                            </button>
                                            <div className="collapse" id="Admin-Portal-collapse" >
                                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                    <li><a href="/configuration" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Configuration</a></li>
                                                    <li><a href="/faq" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- FAQs</a></li>
                                                    <li><a href="/testimonials" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Testimonials</a></li>

                                                    <li><a href="/garage" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Garage</a></li>
                                                    <li><a href="/captains" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Captains </a></li>


                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="row d-block">
                                            <button className="btn-3 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                                data-bs-toggle="collapse" data-bs-target="#User-Registration-collapse" aria-expanded="false">
                                                <div className="col-lg-10 col-md-10">
                                                    <i className="fa-solid fa-user" ></i> User Registration
                                                </div>
                                                <div className="col-lg-2 col-md-2">
                                                    <i className="fa-solid fa-chevron-down float-end"></i>
                                                </div>
                                            </button>
                                            <div className="collapse" id="User-Registration-collapse">
                                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                    <li><a href="/inactiveusers" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- In Active Users</a></li>
                                                    <li><a href="/blockedusers" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Blocked Users</a></li>
                                                    <li><a href="/roles" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Roles</a></li>
                                                    <li><a href="/module" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Modules</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="row d-block">
                                            <button className="btn-3 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                                data-bs-toggle="collapse" data-bs-target="#User-Management-collapse" aria-expanded="false">
                                                <div className="col-lg-10 col-md-10">
                                                    <i className="fa-solid fa-list-check"></i> User Management</div>
                                                <div className="col-lg-2 col-md-2">
                                                    <i className="fa-solid fa-chevron-down float-end"></i>
                                                </div>
                                            </button>
                                            <div className="collapse" id="User-Management-collapse">
                                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                    <li><a href="/user" className="link-body-emphasis d-inline-flex text-decoration-none rounded ">- Users</a></li>
                                                    <li><a href="/usertype" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- User Types</a></li>
                                                    {/* <li><a href="/inactiveusers" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- In Active Users</a></li>
              <li><a href="/blockedusers" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Blocked Users</a></li>
              <li><a href="/module" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Modules</a></li>
              <li><a href="/roles" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Roles</a></li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="row d-block">
                                            <button className="btn-3 btn-toggle d-inline-flex rounded border-0 collapsed" data-bs-toggle="collapse"
                                                data-bs-target="#Airport-collapse" aria-expanded="false">
                                                <div className="col-lg-10 col-md-10">
                                                    <i className="fa-solid fa-plane-up"></i> Airport
                                                </div>
                                                <div className="col-lg-2 col-md-2">
                                                    <i className="fa-solid float-end fa-chevron-down"></i>
                                                </div>
                                            </button>
                                            <div className="collapse" id="Airport-collapse" >
                                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                    <li><a href="/airport" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Airports</a></li>
                                                    <li><a href="/testimonials" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Terminals</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="row d-block">
                                            <button className="btn-3 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                                data-bs-toggle="collapse" data-bs-target="#Vehicle-Configuration-collapse" aria-expanded="false">
                                                <div className="col-lg-10 col-md-10">
                                                    <i className="fa-solid fa-paperclip" ></i> Vehicle Configuration</div>
                                                <div className="col-lg-2 col-md-2">
                                                    <i className="fa-solid fa-chevron-down float-end"></i>
                                                </div>
                                            </button>
                                            <div className="collapse" id="Vehicle-Configuration-collapse">
                                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                    <li><a href="/vehicldetails" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Vehicle Make</a></li>
                                                    <li><a href="/vehiclemodel" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Vehicle Model</a></li>
                                                    <li><a href="/vehiclecolor" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Vehicle Color</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="row d-block">
                                            <button className="btn-3 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                                data-bs-toggle="collapse" data-bs-target="#Services-collapse" aria-expanded="false">
                                                <div className="col-lg-10 col-md-10">
                                                    <i className="fa-brands fa-line"></i> Services </div>
                                                <div className="col-lg-2 col-md-2">
                                                    <i className="fa-solid fa-chevron-down float-end"></i>
                                                </div>
                                            </button>
                                            <div className="collapse" id="Services-collapse" >
                                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                    <li><a href="/services" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Services </a></li>

                                                    <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- E-Charge </a></li>
                                                    <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Car Wash </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="row d-block">
                                            <button className="btn-3 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                                data-bs-toggle="collapse" data-bs-target="#News-Letter-collapse" aria-expanded="false">
                                                <div className="col-lg-10 col-md-10">
                                                    <i className="fa-brands fa-line"></i>News Letter</div>
                                                <div className="col-lg-2 col-md-2">
                                                    <i className="fa-solid fa-chevron-down float-end"></i>
                                                </div>
                                            </button>
                                            <div className="collapse" id="News-Letter-collapse" >
                                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">

                                                    <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- News Letter </a></li>

                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>


                    <div className="col-lg-9 col-md-9  col-12 ">
                        <div className="top-right-navbar">
                            <div className="top-navbar row justify-content-between align-items-center" id="top-navbar-color">
                                <div className="col-lg-4 col-md-4 col-4">
                                    <div className="search-input" id="border-color">
                                        <input type="search" className="form-control" placeholder=" search..." id="input-color" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-4 col-6">
                                    <div className="icons d-flex justify-content-center align-items-center">

                                        <button type="button" className="btn-2 btn-icon btn-topbar btn-ghost-secondary rounded-circle shadow-none">
                                            <i className="fa-solid fa-layer-group"></i>
                                        </button>

                                        <button type="button" className="btn-2  btn-icon btn-topbar btn-ghost-secondary rounded-circle shadow-none"
                                            data-toggle="fullscreen">
                                            <i className="fa-solid fa-expand"></i>
                                        </button>

                                        <button type="button" className="btn-2  btn-icon btn-topbar btn-ghost-secondary rounded-circle shadow-none" id="btnSwitch">
                                            <i className="fa-regular fa-moon" id="btnMoon"></i>
                                            {/*  <i className="fa-regular fa-sun " id="btnSun"></i> */}
                                        </button>

                                        <button type="button" className="btn-2   position-relative">
                                            <i className="fa-solid fa-bag-shopping"></i>
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                                                5
                                                <span className="visually-hidden">unread messages</span>
                                            </span>
                                        </button>

                                        <button type="button" className="btn-2  position-relative">
                                            <i className="fa-regular fa-bell"></i>
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                99+
                                                <span className="visually-hidden">unread messages</span>
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                <div className="col-lg-2 col-md-3 col-2">
                                    <div className="dropdown profile-main">
                                        <button className="profile-btn dropdown-toggle " type="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <a href="#">
                                                <div className="profile d-flex justify-content-between align-items-center" id="profile-color">
                                                    <div>
                                                        <img src="content/img/profile-img.jpg" alt="profile" />
                                                    </div>
                                                    <div>
                                                        <p>Anna Adame</p>
                                                        <p>Founder</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </button>
                                        <ul className="dropdown-menu profile-dropdown">
                                            <li>
                                                <a href="/login">
                                                    <h6>Welcome Anna!</h6>
                                                </a>
                                            </li>
                                            <li><a href="#"> <i className="fa-regular fa-user"></i> Profile</a></li>
                                            <li><a href="#"> <i className="fa-regular fa-message"></i>Messages</a></li>
                                            <li><a href="#"> <i className="fa-regular fa-calendar"></i>Taskboard</a></li>
                                            <li><a href="#"> <i className="fa-regular fa-life-ring"></i>Help</a></li>
                                            <li><a href="#"> <i className="fa-solid fa-gear"></i>Setting</a></li>
                                            <li><a href="#"> <i className="fa-solid fa-lock"></i> Lock Screen</a></li>
                                            <li><a href="#"> <i className="fa-solid fa-arrow-right-from-bracket"></i> LogOut</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-1">

                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <div className="left">
                                        <h3>Good Morning, Anna!</h3>
                                        <p>Here's what's happening with your store today.</p>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8">
                                    <div className="right d-flex justify-content-between align-items-center">
                                        <label className="mx-1">From: </label>
                                        <input type="date" className="form-control" placeholder="date" />
                                        <label className="mx-1">To: </label>
                                        <input type="date" className="form-control" placeholder="date" />
                                        <div>
                                            <a href="#" className="site-btn">Add Product</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-2">

                            <div className="card-main row justify-content-between align-items-center">
                                <div className="col-lg-3 col-md-6 p-2">
                                    <div className="card-1 card-animate" id="card-a">
                                        <div className="card-head d-flex justify-content-between align-items-center">
                                            <div className="card-1-left">
                                                <h3 > Number of Quotes</h3>
                                            </div>
                                            <div className="card-1-right d-flex justify-content-between align-items-center">
                                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                                <p> +6.4 %</p>
                                            </div>
                                        </div>
                                        <div className="card-body d-flex justify-content-between align-items-center">
                                            <div className="card-body-left">
                                                <a href="#">View net Quotes</a>
                                            </div>
                                            <div className="card-body-right">
                                                <i className="fa-solid fa-circle-dollar-to-slot"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6  p-2">
                                    <div className="card-1  card-animate" id="card-b">
                                        <div className="card-head d-flex justify-content-between align-items-center">
                                            <div className="card-1-left">
                                                <h3 > Number of Bookings</h3>
                                            </div>
                                            <div className="card-1-right d-flex justify-content-between align-items-center">
                                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                                <p>-3.5%</p>
                                            </div>
                                        </div>
                                        <div className="card-body d-flex justify-content-between align-items-center">
                                            <div className="card-body-left">
                                                <a href="#">View all Bookings</a>
                                            </div>
                                            <div className="card-body-right bg-color ">
                                                <i className="fa-solid fa-circle-dollar-to-slot"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6  p-2">
                                    <div className="card-1  card-animate" id="card-c">
                                        <div className="card-head d-flex justify-content-between align-items-center">
                                            <div className="card-1-left">
                                                <h3 >Number of customer</h3>
                                            </div>
                                            <div className="card-1-right d-flex justify-content-between align-items-center">
                                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                                <p>+2.8% </p>
                                            </div>
                                        </div>
                                        <div className="card-body d-flex justify-content-between align-items-center">
                                            <div className="card-body-left">
                                                <a href="#">View net customer</a>
                                            </div>
                                            <div className="card-body-right bg-color-2">
                                                <i className="fa-solid fa-circle-dollar-to-slot"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6  p-2">
                                    <div className="card-1  card-animate" id="card-d">
                                        <div className="card-head d-flex justify-content-between align-items-center">
                                            <div className="card-1-left">
                                                <h3 > Total Earnings</h3>
                                            </div>
                                            <div className="card-1-right d-flex justify-content-between align-items-center">
                                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                                <p> +16.24 %</p>
                                            </div>
                                        </div>
                                        <div className="card-body d-flex justify-content-between align-items-center">
                                            <div className="card-body-left">
                                                <a href="#">View net earnings</a>
                                            </div>
                                            <div className="card-body-right bg-color-3">
                                                <i className="fa-solid fa-circle-dollar-to-slot"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-8 col-md-12">
                                    <div className="left-side">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h3>Revenue</h3>
                                            <div className="d-flex justify-content-between">
                                                <div className="min-btn">
                                                    <a href="#">ALL</a>
                                                </div>
                                                <div className="min-btn">
                                                    <a href="#">1M</a>
                                                </div>
                                                <div className="min-btn">
                                                    <a href="#">6M</a>
                                                </div>
                                                <div className="min-btn colorless">
                                                    <a href="#">1Y</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 pe-lg-0 pe-md-0">
                                            <div className="tab-1">
                                                <h3>7,585</h3>
                                                <p>Order</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-6 p-lg-0 ps-md-0">
                                            <div className="tab-1">
                                                <h3>$22.89k</h3>
                                                <p>Earnings</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-6 p-lg-0 pe-md-0">
                                            <div className="tab-1">
                                                <h3>367</h3>
                                                <p>Refunds</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-6 ps-lg-0 ps-md-0">
                                            <div className="tab-1">
                                                <h3 className="green-color">18.92%</h3>
                                                <p>Conversation Ratio</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="map-div">

                                        <div className="simple-bar-chart">

                                            <div className="item" style={{ '--clr': 'rgba(10, 179, 156, 0.9)', '--val': '80' }}>
                                                <div className="label">jan</div>
                                                <div className="value">80%</div>
                                            </div>

                                            <div className="item" style={{ '--clr': 'rgba(10, 179, 156, 0.9)', '--val': '35' }}>
                                                <div className="label">feb</div>
                                                <div className="value">50%</div>
                                            </div>

                                            <div className="item" style={{ '--clr': 'rgba(10, 179, 156, 0.9)', '--val': '45' }}>
                                                <div className="label">mar</div>
                                                <div className="value">100%</div>
                                            </div>

                                            <div className="item" style={{ '--clr': 'rgba(10, 179, 156, 0.9)', '--val': '15' }}>
                                                <div className="label">apr</div>
                                                <div className="value">15%</div>
                                            </div>

                                            <div className="item" style={{ '--clr': 'rgba(10, 179, 156, 0.9)', '--val': '5' }}>
                                                <div className="label">May</div>
                                                <div className="value">1%</div>
                                            </div>

                                            <div className="item" style={{ '--clr': 'rgba(10, 179, 156, 0.9)', '--val': '100' }}>
                                                <div className="label">jun</div>
                                                <div className="value">90%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="right-side " id="right-side-color">
                                        <div className="border-bottom d-flex justify-content-between align-items-center">
                                            <h4>Sales by Locations</h4>
                                            <div className="Export-btn">
                                                <a href="#">Export Report</a>
                                            </div>
                                        </div>
                                        <div className="map-photo">
                                            <img src="content/img/right-side-map.png" alt="map" />
                                        </div>
                                        <div className="range">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p>Canada</p>
                                                <output>75%</output>
                                            </div>
                                            <input type="range" value="75%" min="1" max="100" oninput="this.nextElementSibling.value = this.value" />
                                        </div>
                                        <div className="range">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p>Russia </p>
                                                <output>82%</output>
                                            </div>
                                            <input type="range" value="82%" min="1" max="100" oninput="this.nextElementSibling.value = this.value" />
                                        </div>
                                        <div className="range">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p>Greenland </p>
                                                <output>47%</output>
                                            </div>
                                            <input type="range" value="47%" min="1" max="100" oninput="this.nextElementSibling.value = this.value" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-3">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-6">
                                    <div className="section-3-left">
                                        <div className="section-3-left-head d-flex justify-content-between align-items-center">
                                            <h4>Best Selling Products</h4>
                                            <div>
                                                <div className="dropdown ">
                                                    <button className="section-3-btn dropdown-toggle " type="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        <a href="#"> <span>Sort by:</span> Today
                                                            <i className="fa-solid fa-chevron-down"></i></a>
                                                    </button>
                                                    <ul className="dropdown-menu section-3-ul">
                                                        <li><a href="#">Today</a></li>
                                                        <li><a href="#">Yesterday</a></li>
                                                        <li><a href="#"> Last 7 Days</a></li>
                                                        <li><a href="#"> Last 30 Days</a></li>
                                                        <li><a href="#">This Month</a></li>
                                                        <li><a href="#"> Last Month</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="section-3-left-table">
                                            <table className="table table-sm  ">
                                                <tr>
                                                    <td><a href="#">Branded T-Shirts</a>
                                                        <p>24 Apr 2021</p>
                                                    </td>
                                                    <td><a href="#">$29.00</a>
                                                        <p>Price</p>
                                                    </td>
                                                    <td><a href="#">62</a>
                                                        <p>Orders</p>
                                                    </td>
                                                    <td><a href="#">510</a>
                                                        <p>Stock</p>
                                                    </td>
                                                    <td><a href="#">$1,798</a>
                                                        <p>Amount</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#">Bentwood Chair</a>
                                                        <p>19 Mar 2021</p>
                                                    </td>
                                                    <td><a href="#">$29.00</a>
                                                        <p>Price</p>
                                                    </td>
                                                    <td><a href="#">62</a>
                                                        <p>Orders</p>
                                                    </td>
                                                    <td><a href="#"><span>Out of stock</span></a>
                                                        <p>Stock</p>
                                                    </td>
                                                    <td><a href="#">$1,798</a>
                                                        <p>Amount</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#">Borosil Paper Cup</a>
                                                        <p>01 Mar 2021</p>
                                                    </td>
                                                    <td><a href="#">$29.00</a>
                                                        <p>Price</p>
                                                    </td>
                                                    <td><a href="#">62</a>
                                                        <p>Orders</p>
                                                    </td>
                                                    <td><a href="#">510</a>
                                                        <p>Stock</p>
                                                    </td>
                                                    <td><a href="#">$1,798</a>
                                                        <p>Amount</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#">One Seater Sofa</a>
                                                        <p>24 Apr 2021</p>
                                                    </td>
                                                    <td><a href="#">$29.00</a>
                                                        <p>Price</p>
                                                    </td>
                                                    <td><a href="#">62</a>
                                                        <p>Orders</p>
                                                    </td>
                                                    <td><a href="#"><span>Out of stock</span></a>
                                                        <p>Stock</p>
                                                    </td>
                                                    <td><a href="#">$1,798</a>
                                                        <p>Amount</p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="section-3-left">
                                        <div className="section-3-left-head d-flex justify-content-between align-items-center">
                                            <h4>Top Sellers</h4>
                                            <div>
                                                <div className="dropdown ">
                                                    <button className="section-3-btn dropdown-toggle " type="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        <a href="#"> Report
                                                            <i className="fa-solid fa-chevron-down"></i> </a>
                                                    </button>
                                                    <ul className="dropdown-menu section-3-ul">
                                                        <li><a href="#">Today</a></li>
                                                        <li><a href="#">Yesterday</a></li>
                                                        <li><a href="#"> Last 7 Days</a></li>
                                                        <li><a href="#"> Last 30 Days</a></li>
                                                        <li><a href="#">This Month</a></li>
                                                        <li><a href="#"> Last Month</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="section-3-left-table">
                                            <table className="table table-sm  ">
                                                <tr>
                                                    <td><a href="#">Branded T-Shirts</a>
                                                        <p>24 Apr 2021</p>
                                                    </td>

                                                    <td><a href="#">$29.00</a>
                                                        <p>Price</p>
                                                    </td>
                                                    <td><a href="#">62</a>
                                                        <p>Orders</p>
                                                    </td>
                                                    <td><a href="#">510</a>
                                                        <p>Stock</p>
                                                    </td>
                                                    <td><a href="#">$1,798</a>
                                                        <p>Amount</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#">Bentwood Chair</a>
                                                        <p>19 Mar 2021</p>
                                                    </td>
                                                    <td><a href="#">$29.00</a>
                                                        <p>Price</p>
                                                    </td>
                                                    <td><a href="#">62</a>
                                                        <p>Orders</p>
                                                    </td>
                                                    <td><a href="#"><span>Out of stock</span></a>
                                                        <p>Stock</p>
                                                    </td>
                                                    <td><a href="#">$1,798</a>
                                                        <p>Amount</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#">Borosil Paper Cup</a>
                                                        <p>01 Mar 2021</p>
                                                    </td>
                                                    <td><a href="#">$29.00</a>
                                                        <p>Price</p>
                                                    </td>
                                                    <td><a href="#">62</a>
                                                        <p>Orders</p>
                                                    </td>
                                                    <td><a href="#">510</a>
                                                        <p>Stock</p>
                                                    </td>
                                                    <td><a href="#">$1,798</a>
                                                        <p>Amount</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#">One Seater Sofa</a>
                                                        <p>24 Apr 2021</p>
                                                    </td>
                                                    <td><a href="#">$29.00</a>
                                                        <p>Price</p>
                                                    </td>
                                                    <td><a href="#">62</a>
                                                        <p>Orders</p>
                                                    </td>
                                                    <td><a href="#"><span>Out of stock</span></a>
                                                        <p>Stock</p>
                                                    </td>
                                                    <td><a href="#">$1,798</a>
                                                        <p>Amount</p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}
