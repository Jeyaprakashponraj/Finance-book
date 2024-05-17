import React from "react";
import { Logo } from "../../assets/Image";
import { NavData } from "../../Component/Utills/NavData";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Utills/Auth";

const NavBar = () => {
  const auth = useAuth();

  const navigate = useNavigate()
  return (
    <>
      <div className='navBar__Container'>
        <div className='nav__logo'>
          <img src={Logo} className='nav__image' alt='logo' />
        </div>

        <div className='nav__items'>
          {NavData.map((x, index) => (
            <NavLink className={x.class} to={x.path} key={index}>
              {x.title}
            </NavLink>
          ))}

          {/* {auth.user && <NavLink to='/profile'>Profile</NavLink>} */}
        </div>

        <div className='nav__btn'>
          <button onClick={()=>navigate('/login')}>
            <span>Log In</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
