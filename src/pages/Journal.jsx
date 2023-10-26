import React from 'react';
import { PageHeader } from '../components/';
import { DevelopmenImg } from '../assets/images/';

const Journal = () => {
  return (
    <main>
      {/* <PageHeader title="journal" /> */}

      <section className="main-container w-full text-center flex items-center mt-32 justify-center flex-col">
        <img src={DevelopmenImg} alt="Development" />
        <h4 className="font-bold text-primaryPink text-3xl mt-5">Under Development !!!</h4>
      </section>
    </main>
  );
};

export default Journal;
