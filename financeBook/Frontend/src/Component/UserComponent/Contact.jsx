import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='navigateContainer'>
        <button onClick={() => navigate("email")}>Email us</button>
      </div>
      <Outlet />
    </>
  );
};

export default Contact;
