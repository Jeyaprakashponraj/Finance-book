import React, { useState } from "react";

const Email = () => {
  const [errors, setErrors] = useState("");
  const [inputData, setInputData] = useState({});

  return (
    <div className='Login__container'>
      <form className='login__box'>
        <input
          type='text'
          name='name'
          className='input'
          placeholder='enter ur name'
        />
        <input
          type='password'
          name='password'
          className='input'
          placeholder='enter ur password'
        />

        <textarea name='query' placeholder='Enter ur query' className='input' />

        <button className='button' type='submit'>
          Send Mail
        </button>
      </form>
    </div>
  );
};

export default Email;
