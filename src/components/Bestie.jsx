import React from 'react';
import { Icon } from '@iconify/react';
import { HeroAbout, Pattern } from '../assets/images/';

const Bestie = () => {
  return (
    <section className="main-container bestie-container">
      <div>
        <h1>
          <span>Our</span> Bestie
        </h1>
        <h2>Nurturing Beauty and Skin</h2>
        <p>Empowering Beauty Through Passion, Expertise, and DedicationOur Commitment to Your Radiant Confidence.</p>
        <button className="btn">
          LEARN THE BESTIE WAY
          <Icon icon="solar:arrow-right-linear" />
        </button>
      </div>

      <div>
        <div>
          <img src={Pattern} alt="pattern" className="h-full w-full " />
        </div>
        <img src={HeroAbout} alt="Hero Bestie" className="w-80 h-96" />
      </div>
    </section>
  );
};

export default Bestie;
