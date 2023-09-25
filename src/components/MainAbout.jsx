import React from 'react';
import { MainAboutImg } from '../assets/images/';

const MainAbout = () => {
  return (
    <section className="main-container lg:flex justify-between mt-5 ">
      <div className="w-full lg:w-1/2">
        <h5 className="text-primaryPink font-semibold text-xs lg:text-lg">Passionate community dedicated to bringing beauty.</h5>
        <h2>Empower Authentic & Beauty Discovery.</h2>
      </div>
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:flex justify-end">
        <img src={MainAboutImg} alt="hero about" />
      </div>
    </section>
  );
};

export default MainAbout;
