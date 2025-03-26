import React from 'react'
import logo from '../content/img/skaiii.png'
import { Link, NavLink } from 'react-router-dom'
export default function Captains() {

return (
<>
<div className="container-fluid">
<div className="row">

<div className="col-lg-3 col-md-3 p-0 ">
<div className="side-navbar" id="side-navbar-color">

<div className="logo">
<NavLink href="/"><img src={logo} alt="logo" /></NavLink>
</div>

<div className="menu mt-4">

<ul className="list-iteams">

<li>
<div className="row d-block">
<button className="btn-3 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
    data-bs-toggle="collapse" data-bs-target="#Dashboards-collapse" aria-expanded="false">
    <div className="col-lg-10 col-md-10">

        <NavLink href="/" > <i className="fa-solid fa-gauge"></i> Dashboards </NavLink>

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
        <li><NavLink href="/activebooking" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Active Bookings</NavLink></li>
        <li><NavLink href="/cancelledbookings" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Cancelled Bookings</NavLink></li>
        <li><NavLink href="/completedbookings" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Completed Bookings</NavLink></li>
        <li><NavLink href="/quotes" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Quotes</NavLink></li>
    </ul>
</div>
</div>
</li>

<li>
<div className="row d-block">
<button className="btn-3 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed Active"
    data-bs-toggle="collapse" data-bs-target="#Admin-Portal-collapse" aria-expanded="false">
    <div className="col-lg-10 col-md-10">
        <i className="fa-solid fa-address-book"></i> Admin Portal
    </div>
    <div className="col-lg-2 col-md-2">
        <i className="fa-solid fa-chevron-down float-end"></i>
    </div>
</button>
<div className="collapse show" id="Admin-Portal-collapse" >
    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
        <li><NavLink href="/configuration" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Configuration</NavLink></li>
        <li><NavLink href="/faq" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- FAQs</NavLink></li>
        <li><NavLink href="/testimonials" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Testimonials</NavLink></li>

        <li><NavLink href="/garage" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Garage</NavLink></li>
        <li><NavLink href="/captains" className="link-body-emphasis d-inline-flex text-decoration-none rounded Active">- Captains </NavLink></li>


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
        <li><NavLink href="/inactiveusers" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- In Active Users</NavLink></li>
        <li><NavLink href="/blockedusers" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Blocked Users</NavLink></li>
        <li><NavLink href="/roles" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Roles</NavLink></li>
        <li><NavLink href="/module" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Modules</NavLink></li>
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
        <li><NavLink href="/user" className="link-body-emphasis d-inline-flex text-decoration-none rounded ">- Users</NavLink></li>
        <li><NavLink href="/usertype" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- User Types</NavLink></li>
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
        <li><NavLink href="/airport" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Airports</NavLink></li>
        <li><NavLink href="/testimonials" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Terminals</NavLink></li>
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
        <li><NavLink href="/vehicldetails" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Vehicle Make</NavLink></li>
        <li><NavLink href="/vehiclemodel" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Vehicle Model</NavLink></li>
        <li><NavLink href="/vehiclecolor" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Vehicle Color</NavLink></li>
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
        <li><NavLink href="/services" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Services </NavLink></li>

        <li><NavLink href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- E-Charge </NavLink></li>
        <li><NavLink href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- Car Wash </NavLink></li>
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

        <li><NavLink href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">- News Letter </NavLink></li>

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
<Link href="#">
    <div className="profile d-flex justify-content-between align-items-center">
        <div>
            <img src="content/img/profile-img.jpg" alt="profile" />
        </div>
        <div>
            <p>Anna Adame</p>
            <p>Founder</p>
        </div>
    </div>
</Link>
</button>
<ul className="dropdown-menu profile-dropdown">

<li><Link href="/login"> <h6>Welcome Anna!</h6></Link></li>

<li><Link href="#"> <i className="fa-regular fa-user"></i> Profile</Link></li>

<li><Link href="#"> <i className="fa-regular fa-message"></i>Messages</Link></li>

<li><Link href="#"> <i className="fa-regular fa-calendar"></i>Taskboard</Link></li>

<li><Link href="#"> <i className="fa-regular fa-life-ring"></i>Help</Link></li>

<li><Link href="#"> <i className="fa-solid fa-gear"></i>Setting</Link></li>

<li><Link href="#"> <i className="fa-solid fa-lock"></i> Lock Screen</Link></li>

<li><Link href="#"> <i className="fa-solid fa-arrow-right-from-bracket"></i> LogOut</Link></li>

</ul>

</div>

</div>

</div>

</div>

<div className="section-1">

<div className="row">
<div className="col-lg-4 col-md-4">
<div className="left">
<button type="button" className="btn site-btn" data-bs-toggle="modal" data-bs-target="#modelMake">
Add New Captains
</button>

<div className="modal fade" id="modelMake" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
    <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Captain Details </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <form>
                <div className="mb-3">
                    <label for="txtMake" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="txtMake" placeholder="Full Name" />
                </div>

                <div className="mb-3">
                    <label for="txtMakeType" className="form-label">Captain rate </label>
                    <input type="text" className="form-control" id="txtMakeType" placeholder="Captain rate" />
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
<th scope="col">Captain Name</th>
<th scope="col">Captain rate</th>
<th scope="col">Captains total bookings</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>John</td>
<td><i className="fa-regular fa-star"></i>
    <i className="fa-regular fa-star"></i>
    <i className="fa-regular fa-star"></i>
    <i className="fa-regular fa-star"></i>
    <i className="fa-regular fa-star"></i></td>
<td>
    <button type="button" className="btn btn-primary" >Edit</button>
    <button type="button" className="btn btn-danger">Delete</button>
</td>
</tr>
<tr>
<td>2</td>
<td>Adame</td>
<td><i className="fa-regular fa-star"></i>
    <i className="fa-regular fa-star"></i>
    <i className="fa-regular fa-star"></i>
    <i className="fa-regular fa-star"></i>
    <i className="fa-regular fa-star"></i></td>
<td>
    <button type="button" className="btn btn-primary">Edit</button>
    <button type="button" className="btn btn-danger">Delete</button>
</td>
</tr>
<tr>
<td>3</td>
<td>Anna</td>
<td><i className="fa-regular fa-star"></i>
    <i className="fa-regular fa-star"></i>
    <i className="fa-regular fa-star"></i>
    <i className="fa-regular fa-star"></i>
    <i className="fa-regular fa-star"></i></td>
<td>
    <button type="button" className="btn btn-primary">Edit</button>
    <button type="button" className="btn btn-danger">Delete</button>
</td>
</tr>
</tbody>
</table>
</div>

</div>

<nav aria-label="Page navigation example">
<ul className="pagination justify-content-end">
<li className="page-item disabled">
<Link className="page-link">Previous</Link>
</li>
<li className="page-item"><Link className="page-link" href="#">1</Link></li>
<li className="page-item"><Link className="page-link" href="#">2</Link></li>
<li className="page-item"><Link className="page-link" href="#">3</Link></li>
<li className="page-item">
<Link className="page-link" href="#">Next</Link>
</li>
</ul>
</nav>

</div>

</div>
</div>
</>
)
}
