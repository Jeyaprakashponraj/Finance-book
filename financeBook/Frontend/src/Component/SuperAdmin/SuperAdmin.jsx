import React, { useState } from "react";
import axios from "axios";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const SuperAdmin = () => {
  const [errors, setErrors] = useState({});
  const [adminData, setAdminData] = useState({});
  const [isShow, setIsShow] = useState(false);
  const cities = ["Kovai", "Chennai", "Madurai", "Salem", "Thirupur"];

  const url = "http://localhost:3000/Admin";

  const navigate = useNavigate();

  const CreateAdmin = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!adminData.name || adminData.name.trim() === "") {
      validationErrors.name = "Please enter your name";
    }
    if (!adminData.email || !/\S+@\S+\.\S+/.test(adminData.email)) {
      validationErrors.email = "Please enter a valid email";
    }
    if (!adminData.password || adminData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
    }
    if (adminData.password !== adminData.cpassword) {
      validationErrors.cpassword = "Passwords do not match";
    }
    if (!adminData.number || !/^\d{10}$/.test(adminData.number)) {
      validationErrors.number = "Please enter a valid 10-digit contact number";
    }
    if (!adminData.city) {
      validationErrors.city = "Please select a city";
    }
    if (!adminData.financeName || adminData.financeName.trim() === "") {
      validationErrors.financeName = "Please fill this field";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      axios
        .post(url, adminData)
        .then((res) => {
          console.log(res.data);
          alert("Admin created successfully");
        })
        .catch((err) => {
          console.error("Error creating admin:", err);
          alert("Error creating admin. Please try again.");
        });
    }
  };

  const handleAdminChange = (e) => {
    e.preventDefault();
    setAdminData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div>
      <div className='navigateContainer'>
        <button onClick={() => navigate("allAdmin")}>All Admin</button>
        <button onClick={() => navigate("allUser")}>All USer</button>
        <button onClick={() => navigate("acceptedUser")}>Accepted USer</button>
        <button onClick={() => navigate("rejectedUser")}>Rejected USer</button>
        <button onClick={() => setIsShow(!isShow)}>Create Admin</button>
      </div>

      {isShow && (
        <div className='Login__container'>
          <form className='signUp__box' onSubmit={CreateAdmin}>
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Enter your name'
              required
              onChange={handleAdminChange}
            />
            {errors.name && <p className='error'>{errors.name}</p>}

            <input
              type='email'
              name='email'
              className='input'
              placeholder='Enter your email'
              required
              onChange={handleAdminChange}
            />
            {errors.email && <p className='error'>{errors.email}</p>}

            <input
              type='password'
              name='password'
              className='input'
              placeholder='Enter your password'
              required
              onChange={handleAdminChange}
            />
            {errors.password && <p className='error'>{errors.password}</p>}

            <input
              type='password'
              name='cpassword'
              className='input'
              placeholder='Confirm your password'
              required
              onChange={handleAdminChange}
            />
            {errors.cpassword && <p className='error'>{errors.cpassword}</p>}

            <input
              type='number'
              name='number'
              className='input'
              placeholder='Enter your number'
              required
              onChange={handleAdminChange}
            />
            {errors.number && <p className='error'>{errors.number}</p>}

            <label htmlFor='city'>Select a city:</label>
            <select
              className='input select'
              name='city'
              id='city'
              onChange={handleAdminChange}
              required
            >
              <option value=''>Select a city</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.city && <p className='error'>{errors.city}</p>}

            <input
              type='text'
              name='financeName'
              className='input'
              placeholder='Enter your Finance name'
              onChange={handleAdminChange}
            />
            {errors.financeName && (
              <p className='error'>{errors.financeName}</p>
            )}

            <button className='button' type='submit'>
              Create
            </button>
          </form>
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default SuperAdmin;
