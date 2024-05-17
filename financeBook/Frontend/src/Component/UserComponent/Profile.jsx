import React, { useEffect, useState } from "react";
import { useAuth } from "../Utills/Auth";
import axios from "axios";

const Profile = () => {
  const auth = useAuth();
  const [serverData, setServerData] = useState([]);
  const [userData, setUserData] = useState(null);
  const [updateData, setUpdateData] = useState({});
  const [errors, setErrors] = useState({});
  const [loan, setLoan] = useState(false);
  const [status, setStatus] = useState("pending");

  const url = "http://localhost:3000/users";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setServerData(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const fetchId = serverData.find((X) => X.id === auth.userId);

    if (fetchId) {
      setUserData(fetchId);
    }
  }, [serverData, auth.userId]);

  const handlelogOut = () => {
    auth.logout();
  };

  const handleLoadRequest = (e) => {
    e.preventDefault();
    let validationErrors = {};
    const mergeUpdateData = { ...userData, ...updateData, status };

    // Validation
    if (!updateData.loanAmount || updateData.loanAmount.length < 5) {
      validationErrors.loanAmount = "Minimum loan amount 10000";
    }
    if (
      !updateData.loanDescription ||
      updateData.loanDescription.trim() === ""
    ) {
      validationErrors.loanDescription = "Plese Fill this field";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      axios
        .put(`${url}/${userData.id}`, mergeUpdateData)
        .then((res) => res.data)
        .catch((err) => console.log(err));

      alert("updated successfully");

      console.log(mergeUpdateData);
    }
  };

  const handleLoanChanges = (e) => {
    e.preventDefault();
    setUpdateData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLoan = () => {
    setLoan(!loan);
  };
  return (
    <div>
      <button onClick={handleLoan}>Get Loan</button>

      {loan && (
        <div className='Login__container'>
          <form className='signUp__box' onSubmit={handleLoadRequest}>
            <input
              type='text'
              name='name'
              className='input'
              value={userData.name}
              readOnly={true}
              disabled={true}
            />

            <input
              type='email'
              name='email'
              className='input'
              value={userData.email}
              readOnly={true}
              disabled={true}
            />

            <input
              type='number'
              name='number'
              className='input'
              value={userData.number}
              readOnly={true}
              disabled={true}
            />

            <input
              type='text'
              name='city'
              className='input'
              value={userData.city}
              readOnly={true}
              disabled={true}
            />

            <input
              type='number'
              name='loanAmount'
              className='input'
              placeholder='Enter your amount'
              onChange={handleLoanChanges}
              required={true}
            />
            {errors.loanAmount && <p className='error'>{errors.loanAmount}</p>}

            <textarea
              name='loanDescription'
              className='input'
              placeholder='Which Purpose Do you need the money for...'
              onChange={handleLoanChanges}
              required={true}
            />
            {errors.loanDescription && (
              <p className='error'>{errors.loanDescription}</p>
            )}

            <button className='button' type='submit'>
              Loan Request
            </button>
          </form>
        </div>
      )}
      <button onClick={handlelogOut}>Log Out</button>
    </div>
  );
};

export default Profile;
