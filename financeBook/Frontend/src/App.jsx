import React from "react";
import NavBar from "./Component/UserComponent/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/UserComponent/Home";
import About from "./Component/UserComponent/About";
import Service from "./Component/UserComponent/Service";
import Contact from "./Component/UserComponent/Contact";
import NotFound from "./Component/UserComponent/NotFound";
import Authentication from "./Component/Utills/Authentication";
import Profile from "./Component/UserComponent/Profile";
import Login from "./Component/LoginAuthentication/Login";
import SignUp from "./Component/LoginAuthentication/SignUp";
import SuperAdmin from "./Component/SuperAdmin/SuperAdmin";
import { Auth } from "./Component/Utills/Auth";
import AllUser from "./Component/SuperAdmin/AllUser";
import AllAdmin from "./Component/SuperAdmin/AllAdmin";
import AcceptedUser from "./Component/SuperAdmin/AcceptedUser";
import RejectedUser from "./Component/SuperAdmin/RejectedUser";
import Email from "./Component/UserComponent/Email";

const App = () => {
  return (
    <div>
      <Auth>
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />}>
            <Route index element={<Email />} />
            <Route path='email' element={<Email />} />
          </Route>
          <Route
            path='/profile'
            element={
              <Authentication>
                <Profile />
              </Authentication>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/superAdmin' element={<SuperAdmin />}>
            <Route path='allUser' element={<AllUser />} />
            <Route path='allAdmin' element={<AllAdmin />} />
            <Route path='acceptedUser' element={<AcceptedUser />} />
            <Route path='rejectedUser' element={<RejectedUser />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Auth>
    </div>
  );
};

export default App;
