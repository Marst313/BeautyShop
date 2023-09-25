import React from 'react';
import heroError from '../assets/images/heroError.png';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/');
  };
  return (
    <section className="p-5 text-center justify-center items-center w-full h-full  flex flex-col mt-5">
      <h1>Error</h1>

      <img src={heroError} alt="" className="w-1/3" />

      <h4 className="font-bold text-primaryPink text-3xl ">SOMETHING WENT WRONG !!!</h4>
      <button type="button" onClick={handleOnClick} className="btn">
        Back To Home
      </button>
    </section>
  );
};

export default Error;
