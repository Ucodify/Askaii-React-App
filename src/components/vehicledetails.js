import React from 'react'
import logo from '../content/img/skaiii.png'
export default function Vehicledetails() {
    return (
        <>
            <div class="container-fluid">
                <div class="row">

                    <div class="col-lg-3 col-md-3 p-0 ">
                        <div class="side-navbar" id="side-navbar-color">
                            <div class="logo">
                                <a href="/"><img src={logo} alt="logo" /></a>
                            </div>

                            <div class="menu mt-4">

                                <ul class="list-iteams">

                                    <li>
                                        <div class="row d-block">
                                            <button class="btn-3 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                                data-bs-toggle="collapse" data-bs-target="#Dashboards-collapse" aria-expanded="false">
                                                <div class="col-lg-10 col-md-10">

                                                    <a href="/" > <i class="fa-solid fa-gauge"></i> Dashboards </a>

                                                </div>
                                                <div class="col-lg-2 col-md-2">
                                                </div>
                                            </button>
                                            <div class="collapse" id="Dashboards-collapse" >
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="row d-block">
                                            <button class="btn-3 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed "
                                                data-bs-toggle="collapse" data-bs-target="#Bookings-collapse" aria-expanded="false">
                                                <div class="col-lg-10 col-md-10">
                                                    <i class="fa-brands fa-app-store-ios"></i>Bookings
                                                </div>
                                                <div class="col-lg-2 col-md-2">
                                                    <i class="fa-solid fa-chevron-down float-end"></i>
                                                </div>
                                            </button>
                                            <div class="collapse" id="Bookings-collapse" >
                                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                    <li><a href="/activebooking" class="link-body-emphasis d-inline-flex text-decoration-none rounded">- Active Bookings</a></li>
                                                    <li><a href="/cancelledbookings" class="link-body-emphasis d-inline-flex text-decoration-none rounded">- Cancelled Bookings</a></li>
                                                    <li><a href="/completedbookings" class="link-body-emphasis d-inline-flex text-decoration-none rounded">- Completed Bookings</a></li>
                                                    <li><a href="/quotes" class="link-body-emphasis d-inline-flex text-decoration-none rounded">- Quotes</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="row d-block">
                                            <button class="btn-3 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                                data-bs-toggle="collapse" data-bs-target="#Admin-Portal-collapse" aria-expanded="false">
                                                <div class="col-lg-10 col-md-10">
                                                    <i class="fa-solid fa-address-book"></i> Admin Portal
                                                </div>
                                                <div class="col-lg-2 col-md-2">
                                                    <i class="fa-solid fa-chevron-down float-end"></i>
                                                </div>
                                            </button>
                                            <div class="collapse" id="Admin-Portal-collapse" >
                                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                    <li><a href="/configuration" class="link-body-emphasis d-inline-flex text-decoration-none rounded">- Configuration</a></li>
                                                    <li><a href="/faq" class="link-body-emphasis d-inline-flex text-decoration-none rounded">- FAQs</a></li>
                                                    <li><a href="/testimonials" class="link-body-emphasis d-inline-flex text-decoration-none rounded">- Testimonials</a></li>

                                                    <li><a href="/garage" class="link-body-emphasis d-inline-flex text-decoration-none rounded">- Garage</a></li>
                                                    <li><a href="/captains" class="link-body-emphasis d-inline-flex text-decoration-none rounded">- Captains </a></li>


                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="row d-block">
                                            <button class="btn-3 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                                data-bs-toggle="collapse" data-bs-target="#User-Registration-collapse" aria-expanded="false">
                                                <div class="col-lg-10 col-md-10">
                                                    <i class="fa-solid fa-user" ></i> User Registration
                                                </div>
                                                <div class="col-lg-2 col-md-2">
                                                    <i class="fa-solid fa-chevron-down float-end"></i>
                                                </div>
                                            </button>
                                            <div class="collapse" id="User-Registration-collapse">
                                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                    <li><a href="/inactiveusers" class="link-body-emphasis d-inline-flex text-decoration-none rounded">- In Active Users</a></li>
                                                    <li><a href="/blockedusers" class="link-body-emphasis d-inline-flex text-decoration-none rounded">- Blocked Users</a></li>
                                                    <li><a href="/roles" class="link-body-emphasis d-inline-flex text-decoration-none rounded">- Roles</a></li>
                                                    <li><a href="/module" class="link-body-emphasis d-inline-flex text-decoration-none rounded">- Modules</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="row d-block">
                                            <button class="btn-3 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                                data-bs-toggle="collapse" data-bs-target="#User-Management-collapse" aria-expanded="false">
                                                <div class="col-lg-10 col-md-10">
                                                    <i class="fa-solid fa-list-check"></i> User Management</div>
                                                <div class="col-lg-2 col-md-2">
                                                    <i class="fa-solid fa-chevron-down float-end"></i>
                                                </div>
                                            </button>
                                            <div class="collapse" id="User-Management-collapse">
                                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                    <li><a href="/user" class="link-body-emphasis d-inline-flex text-decoration-none rounded ">- Users</a></li>
                                                    <li><a href="/usertype" class="link-body-emphasis d-inline-flex text-decoration-none rounded">- User Types</a></li>

                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="row d-block">
                                            <button class="btn-3 btn-toggle d-inline-flex rounded border-0 collapsed" data-bs-toggle="collapse"
                                                data-bs-target="#Airport-collapse" aria-expanded="false">
                                                <div class="col-lg-10 col-md-10">
                                                    <i class="fa-solid fa-plane-up"></i> Airport
                                                </div>
                                                <div class="col-lg-2 col-md-2">
                                                    <i class="fa-solid float-end fa-chevron-down"></i>
                                                </div>
                                            </button>
                                            <div class="collapse" id="Airport-collapse" >
                                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                    <li><a href="/airport" class="link-body-emphasis d-inline-flex text-decoration-none rounded">- Airports</a></li>
                                                    <li><a href="/testimonials" class="link-body-emphasis d-inline-flex text-decoration-none rounded">- Terminals</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="row d-block">
                                            <button class="btn-3 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed Active"
                                                data-bs-toggle="collapse" data-bs-target="#Vehicle-Configuration-collapse" aria-expanded="false">
                                                <div class="col-lg-10 col-md-10">
                                                    <i class="fa-solid fa-paperclip" ></i> Vehicle Configuration</div>
                                                <div class="col-lg-2 col-md-2">
                                                    <i class="fa-solid fa-chevron-down float-end"></i>
                                                </div>
                                            </button>
                                            <div class="collapse show" id="Vehicle-Configuration-collapse">
                                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                    <li><a href="/vehicldetails" class="link-body-emphasis d-inline-flex text-decoration-none rounded Active">- Vehicle Make</a></li>
                                                    <li><a href="/vehiclemodel" class="link-body-emphasis d-inline-flex text-decoration-none rounded">- Vehicle Model</a></li>
                                                    <li><a href="/vehiclecolor" class="link-body-emphasis d-inline-flex text-decoration-none rounded">- Vehicle Color</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="row d-block">
                                            <button class="btn-3 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                                data-bs-toggle="collapse" data-bs-target="#Services-collapse" aria-expanded="false">
                                                <div class="col-lg-10 col-md-10">
                                                    <i class="fa-brands fa-line"></i> Services </div>
                                                <div class="col-lg-2 col-md-2">
                                                    <i class="fa-solid fa-chevron-down float-end"></i>
                                                </div>
                                            </button>
                                            <div class="collapse" id="Services-collapse" >
                                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                    <li><a href="/services" class="link-body-emphasis d-inline-flex text-decoration-none rounded">- Services </a></li>

                                                    <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">- E-Charge </a></li>
                                                    <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">- Car Wash </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="row d-block">
                                            <button class="btn-3 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                                data-bs-toggle="collapse" data-bs-target="#News-Letter-collapse" aria-expanded="false">
                                                <div class="col-lg-10 col-md-10">
                                                    <i class="fa-brands fa-line"></i>News Letter</div>
                                                <div class="col-lg-2 col-md-2">
                                                    <i class="fa-solid fa-chevron-down float-end"></i>
                                                </div>
                                            </button>
                                            <div class="collapse" id="News-Letter-collapse" >
                                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">

                                                    <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">- News Letter </a></li>

                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>



                    <div class="col-lg-9 col-md-9  col-12">
                        <div class="top-right-navbar">

                            <div class="top-navbar row justify-content-between align-items-center">

                                <div class="col-lg-4 col-md-4 col-4">
                                    <div class="search-input">
                                        <input type="search" class="form-control" id="exampleFormControlInput1" placeholder=" search..." />
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-4 col-6">

                                    <div class="icons d-flex justify-content-center align-items-center">


                                        <button type="button" class="btn-2 btn-icon btn-topbar btn-ghost-secondary rounded-circle shadow-none"
                                            data-toggle="fullscreen">
                                            <i class="fa-solid fa-layer-group"></i>
                                        </button>

                                        <button type="button" class="btn-2  btn-icon btn-topbar btn-ghost-secondary rounded-circle shadow-none"
                                            data-toggle="fullscreen">
                                            <i class="fa-solid fa-expand"></i>
                                        </button>

                                        <button type="button" class="btn-2  btn-icon btn-topbar btn-ghost-secondary rounded-circle shadow-none"
                                            data-toggle="fullscreen">
                                            <i class="fa-regular fa-moon"></i>

                                        </button>

                                        <button type="button" class="btn-2   position-relative">
                                            <i class="fa-solid fa-bag-shopping"></i>
                                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                                                5
                                                <span class="visually-hidden">unread messages</span>
                                            </span>
                                        </button>

                                        <button type="button" class="btn-2  position-relative">
                                            <i class="fa-regular fa-bell"></i>
                                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                99+
                                                <span class="visually-hidden">unread messages</span>
                                            </span>
                                        </button>

                                    </div>
                                </div>

                                <div class="col-lg-2 col-md-3 col-2">

                                    <div class="dropdown profile-main">
                                        <button class="profile-btn dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <a href="#">
                                                <div class="profile d-flex justify-content-between align-items-center">
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
                                        <ul class="dropdown-menu profile-dropdown">

                                            <li><a href="/login"> <h6>Welcome Anna!</h6></a></li>

                                            <li><a href="#"> <i class="fa-regular fa-user"></i> Profile</a></li>

                                            <li><a href="#"> <i class="fa-regular fa-message"></i>Messages</a></li>

                                            <li><a href="#"> <i class="fa-regular fa-calendar"></i>Taskboard</a></li>

                                            <li><a href="#"> <i class="fa-regular fa-life-ring"></i>Help</a></li>

                                            <li><a href="#"> <i class="fa-solid fa-gear"></i>Setting</a></li>

                                            <li><a href="#"> <i class="fa-solid fa-lock"></i> Lock Screen</a></li>

                                            <li><a href="#"> <i class="fa-solid fa-arrow-right-from-bracket"></i> LogOut</a></li>

                                        </ul>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div class="section-1">

                            <div class="row">
                                <div class="col-lg-4 col-md-4">
                                    <div class="left">
                                        <button type="button" class="btn site-btn" data-bs-toggle="modal" data-bs-target="#modelMake">
                                            Add New Make
                                        </button>
                                        <div class="modal fade" id="modelMake" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">Add New Make</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <form>
                                                            <div class="mb-3">
                                                                <label for="txtMake" class="form-label">Make Name</label>
                                                                <input type="text" class="form-control" id="txtMake" placeholder="Make Name" />
                                                            </div>


                                                            <div class="mb-3">
                                                                <label for="txtMakeType" class="form-label">Make Type</label>
                                                                <input type="text" class="form-control" id="txtMakeType" placeholder="Make Type" />
                                                            </div>

                                                            <div class="mb-3">
                                                                <label for="txtMake" class="form-label">Created On</label>
                                                                <input type="text" class="form-control" id="txtMake" placeholder="Created On" />
                                                            </div>

                                                            <div class="mb-3">
                                                                <label for="txtDescription" class="form-label">Description</label>
                                                                <textarea class="form-control" id="txtDescription" rows="3"></textarea>
                                                            </div>

                                                        </form>
                                                    </div>

                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" class="btn  site-btn">Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div class="col-lg-8 col-md-8 mb-3">
                                    <div class="right d-flex justify-content-between align-items-center">
                                        <label class="mx-1">From: </label>
                                        <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="date" />
                                        <label class="mx-1">To: </label>
                                        <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="date" />
                                    </div>
                                </div>
                            </div>



                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="font">Cr#</th>
                                            <th scope="col">Make Name</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Created On</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Honda</td>
                                            <td>Honda is a japanies brand</td>
                                            <td>Honda</td>
                                            <td>2024-06-10</td>
                                            <td>
                                                <button type="button" class="btn btn-primary">Edit</button>
                                                <button type="button" class="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Honda</td>
                                            <td>Honda is a japanies brand</td>
                                            <td>Honda</td>
                                            <td>2024-06-10</td>
                                            <td>
                                                <button type="button" class="btn btn-primary">Edit</button>
                                                <button type="button" class="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Corrola</td>
                                            <td>Honda is a japanies brand</td>
                                            <td>Honda</td>
                                            <td>2024-06-10</td>
                                            <td>
                                                <button type="button" class="btn btn-primary">Edit</button>
                                                <button type="button" class="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>


                            <nav aria-label="Page navigation example" class="mt-3">
                                <ul class="pagination justify-content-end">
                                    <li class="page-item disabled">
                                        <a class="page-link">Previous</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">Next</a>
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
