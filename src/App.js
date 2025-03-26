import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useState } from 'react';
import axios from 'axios';
import Login from './components/login.js'
import Dashboard from './components/dashboard.js'
import Activebooking from './components/activebooking.js'
import Airport from './components/airport.js'
import Blockedusers from './components/blockedusers.js'
import Cancelledbookings from './components/cancelledbookings.js'
import Completedbookings from './components/completedbookings.js'
import Configuration from './components/configuration.js'
import User from './components/user.js'
import Usertype from './components/usertype.js'
import Vehiclecolor from './components/vehiclecolor.js'
import Vehicledetails from './components/vehicledetails.js'
import Vehiclemodel from './components/vehiclemodel.js'
import Testimonials from './components/testimonials.js'
import Roles from './components/roles.js'
import Inactiveusers from './components/inactiveusers.js'
import Quotes from './components/quotes.js'
import Module from './components/module.js'
import Faq from './components/faq.js'
import Garage from './components/garage.js';
import Captains from './components/captains.js';
import Services from './components/services.js';
import Forgotpassword from './components/forgotpassword.js';
import Register from './components/register.js';
export default function App() {
  const [cName, setCName] = useState("");
  const [data, setData] = useState([]);
  let submitHandler = async (e) => {
    e.preventDefault();
    console.log("I am submit handler function");

    try {
      let response = await axios.get(``)
      console.log("response: ", response);
      setData(response.data.list)
    }
    catch (error) {
      console.log("error in api call: ", error);
    }
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/activebooking" element={<Activebooking />} />
        <Route path="/airport" element={<Airport />} />
        <Route path="/blockedusers" element={<Blockedusers />} />
        <Route path="/cancelledbookings" element={<Cancelledbookings />} />
        <Route path="/completedbookings" element={<Completedbookings />} />
        <Route path="/configuration" element={<Configuration />} />
        <Route path="/user" element={<User />} />
        <Route path="/usertype" element={<Usertype />} />
        <Route path="/inactiveusers" element={<Inactiveusers />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/module" element={<Module />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/services" element={<Services />} />
        <Route path="/vehiclecolor" element={<Vehiclecolor />} />
        <Route path="/vehicledetails" element={<Vehicledetails />} />
        <Route path="/vehiclemodel" element={<Vehiclemodel />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/garage" element={<Garage />} />
        <Route path='/captains' element={<Captains />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}
