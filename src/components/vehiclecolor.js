import React from 'react'
import logo from '../content/img/skaiii.png'
export default function Vehiclecolor() {
    return (
        <>
            <div className="container-fluid">
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

                                                    <a href="/" > <i className="fa-solid fa-gauge"></i> Dashboards </a>

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
                                            <button className="btn-3 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed Active"
                                                data-bs-toggle="collapse show" data-bs-target="#Vehicle-Configuration-collapse" aria-expanded="false">
                                                <div className="col-lg-10 col-md-10">
                                                    <i className="fa-solid fa-paperclip" ></i> Vehicle Configuration</div>
                                                <div className="col-lg-2 col-md-2">
                                                    <i className="fa-solid fa-chevron-down float-end"></i>
                                                </div>
                                            </button>
                                            <div className="collapse show" id="Vehicle-Configuration-collapse">
                                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                    <li><a href="/vehicldetails" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Vehicle Make</a></li>
                                                    <li><a href="/vehiclemodel" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Vehicle Model</a></li>
                                                    <li><a href="/vehiclecolor" className="link-body-emphasis d-inline-flex text-decoration-none rounded Active">- Vehicle Color</a></li>
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

                    <div className="col-lg-9 col-md-9  col-12">
                        <div className="top-right-navbar">

                            <div className="top-navbar row justify-content-between align-items-center">

                                <div className="col-lg-4 col-md-4 col-4">
                                    <div className="search-input">
                                        <input type="search" className="form-control" id="exampleFormControlInput1" placeholder=" search..." />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-4 col-6">

                                    <div className="icons d-flex justify-content-center align-items-center">


                                        <button type="button" className="btn-2 btn-icon btn-topbar btn-ghost-secondary rounded-circle shadow-none"
                                            data-toggle="fullscreen">
                                            <i className="fa-solid fa-layer-group"></i>
                                        </button>

                                        <button type="button" className="btn-2  btn-icon btn-topbar btn-ghost-secondary rounded-circle shadow-none"
                                            data-toggle="fullscreen">
                                            <i className="fa-solid fa-expand"></i>
                                        </button>

                                        <button type="button" className="btn-2  btn-icon btn-topbar btn-ghost-secondary rounded-circle shadow-none"
                                            data-toggle="fullscreen">
                                            <i className="fa-regular fa-moon"></i>

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
                                        <button className="profile-btn dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <a href="#">
                                                <div className="profile d-flex justify-content-between align-items-center">
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

                                            <li><a href="/login"> <h6>Welcome Anna!</h6></a></li>

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
                                        <button type="button" className="btn site-btn" data-bs-toggle="modal" data-bs-target="#mColor">
                                            Add New Model
                                        </button>

                                        <div className="modal fade" id="mColor" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Add New Color</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <form>

                                                            <div className="mb-3">
                                                                <label for="txtColor" className="form-label">Color</label>
                                                                <input type="text" className="form-control" id="txtColor" placeholder="Color" />
                                                            </div>


                                                            <div className="mb-3">
                                                                <label for="txtColor" className="form-label">Created On</label>
                                                                <input type="text" className="form-control" id="txtColor" placeholder="Created On" />
                                                            </div>

                                                            <div className="mb-3">
                                                                <label for="txtDescription" className="form-label">Description</label>
                                                                <textarea className="form-control" id="txtDescription" rows="3"></textarea>
                                                            </div>

                                                        </form>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn site-btn">Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="col-lg-8 col-md-8 mb-3">
                                    <div className="right d-flex justify-content-between align-items-center">
                                        <label className="mx-1">From: </label>
                                        <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="date" />
                                        <label className="mx-1">To: </label>
                                        <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="date" />
                                    </div>
                                </div>
                            </div>



                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="font">Cr#</th>
                                            <th scope="col">Color</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Created On</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>White</td>
                                            <td>White</td>
                                            <td>2024-06-10</td>
                                            <td>
                                                <button type="button" className="btn btn-primary">Edit</button>
                                                <button type="button" className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Silver</td>
                                            <td>Silver</td>
                                            <td>2024-06-10</td>
                                            <td>
                                                <button type="button" className="btn btn-primary">Edit</button>
                                                <button type="button" className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Grey</td>
                                            <td>Grey</td>
                                            <td>2024-06-10</td>
                                            <td>
                                                <button type="button" className="btn btn-primary">Edit</button>
                                                <button type="button" className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>


                            <nav aria-label="Page navigation example" className="mt-3">
                                <ul className="pagination justify-content-end">
                                    <li className="page-item disabled">
                                        <a className="page-link">Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>


                    </div>

                </div>

            </div>




        </>
    )
}
