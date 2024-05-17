import React, { useEffect, useState } from "react";
import axios from "axios";
import { Admin } from "../../assets/Image";

const AllAdmin = () => {
  const url = "http://localhost:3000/Admin";
  const [allAdmin, setAllAdmin] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setAllAdmin(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='card__container'>
      {allAdmin.map((x) => (
        <div className='card' key={x.id}>
          <div className='image'>
            <img src={Admin} alt='' />
          </div>
          <div className='data'>
            <h2>{x.name}</h2>
            <p>{x.city}</p>
            <p>{x.number}</p>
            <p>{x.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllAdmin;

{
  /* <img
            width='94'
            height='94'
            src='https://img.icons8.com/3d-fluency/94/guest-male--v1.png'
            alt='guest-male--v1'
          /> */
}
