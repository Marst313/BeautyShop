import React from 'react';
import { Beyou, Lumin, TheOrdinary } from '../assets/images';

const Arrival = () => {
  return (
    <section className="main-container lg:mt-20 lg:flex-col ">
      <h2 className="self-start">Introducing Our Newest Arrivals</h2>

      <ul className="card-arrival-container">
        <li>
          <img src={Beyou} alt="Beyou" />
          <h5>Beyou</h5>
        </li>
        <li className="ml-10">
          <img src={TheOrdinary} alt="Beyou" className=" lg:-mt-10 " />
          <h5>The Ordinary</h5>
        </li>
        <li className="ml-20 lg:ml-10">
          <img src={Lumin} alt="Beyou" className=" lg:-mt-20" />
          <h5>Lumin</h5>
        </li>
      </ul>
    </section>
  );
};

export default Arrival;
