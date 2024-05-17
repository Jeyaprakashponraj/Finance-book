import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../Utills/Auth";

const Login = () => {
  const url = "http://localhost:3000/users";

  const [inputData, setInputData] = useState({});
  const [serverData, setServerData] = useState([]);
  const [errors, setErrors] = useState("");
  const adminMail = "Admin@gmail.com";
  const adminPassword = "111111";
  const navigate = useNavigate();

  const auth = useAuth();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setServerData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleInputData = (e) => {
    e.preventDefault();
    setInputData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePostInput = (e) => {
    e.preventDefault();

    const checkuser = serverData.find((x) => x.email === inputData.email);

    if (
      adminMail.toLowerCase() === inputData.email.toLowerCase() &&
      adminPassword === inputData.password.toString()
    ) {
      navigate("/superAdmin");
    } else if (checkuser) {
      if (checkuser.password === inputData.password) {
        navigate("/profile");
        auth.login(checkuser.name, checkuser.id);
      } else {
        setErrors("Password Not Match ");
      }
    } else {
      setErrors("User Not Found");
    }
  };

  return (
    <div className='Login__container'>
      <form className='login__box' onSubmit={handlePostInput}>
        <input
          type='email'
          name='email'
          className='input'
          placeholder='enter ur email'
          onChange={handleInputData}
        />
        <input
          type='password'
          name='password'
          className='input'
          placeholder='enter ur password'
          onChange={handleInputData}
        />
        {errors && <p className='error'>{errors}</p>}

        <button className='button' type='submit'>
          Log In
        </button>

        <p className='login'>
          I Don't have an account &nbsp;
          <NavLink className='navigate' to='/signUp'>
            Sign up ?
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
