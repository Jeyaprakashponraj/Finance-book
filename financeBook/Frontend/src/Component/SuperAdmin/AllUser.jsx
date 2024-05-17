import React, { useEffect, useState } from "react";
import axios from "axios";

const AllUser = () => {
  const url = "http://localhost:3000/users";
  const [userData, setUserData] = useState([]);
  const [checkStatus, setCheckStatus] = useState("pending");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setUserData(res.data);
        const foundStatus = res.data.find((x) => x.status === "pending");
        setCheckStatus(foundStatus ? "pending" : "approved");
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='card__container'>
      {userData.map((x) => (
        <>
          <div key={x.id} className='card userCard'>
            {/* <div key={x.id} className={`card userCard ${checkStatus === "pending" ? "loader" : checkStatus === "rejected" ? "rejected" : "success"} */}
            <div className='image'>
              <img
                width='94'
                height='94'
                src='https://img.icons8.com/3d-fluency/94/guest-male--v1.png'
                alt='guest-male--v1'
              />
            </div>
            <div className='data'>
              <div
                className={`status ${x.status === "pending" ? "loader" : ""}  `}
              />
              <h2>{x.name}</h2>
              <p>{x.city}</p>
              <p>{x.number}</p>
              <p>{x.email}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default AllUser;
