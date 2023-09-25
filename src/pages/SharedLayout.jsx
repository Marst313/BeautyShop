import React, { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { Icon } from '@iconify/react';

import { Navbar, SmallNavbar } from '../components';

const SharedLayout = () => {
  const goToTopRef = useRef(null);

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        goToTopRef.current.style.transform = 'translateY(0px)';
      } else {
        goToTopRef.current.style.transform = 'translateY(200px)';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="pages">
      <SmallNavbar />
      <Navbar />
      <Outlet />

      <button type="button" className={`fixed btn-goToTop`} ref={goToTopRef} onClick={handleGoToTop}>
        <Icon icon="uil:arrow-up" />
      </button>
    </section>
  );
};

export default SharedLayout;
