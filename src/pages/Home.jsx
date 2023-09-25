import React, { useEffect } from 'react';

import { Arrival, Bestie, Footer, Journal, Main } from '../components';

const Home = () => {
  return (
    <main>
      <Main />
      <Arrival />
      <Bestie />
      <Journal />
      <Footer />
    </main>
  );
};

export default Home;
