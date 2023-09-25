import React, { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { Sidebar } from './';

const SmallNavbar = () => {
  const [openNav, setOpenNav] = React.useState(0);

  const navRef = useRef(null);

  useEffect(() => {
    const handleOnScroll = () => {
      if (window.scrollY > 0) {
        navRef.current.classList.add('nav');
      } else {
        navRef.current.classList.remove('nav');
      }
    };

    window.addEventListener('scroll', handleOnScroll);

    return () => removeEventListener('scroll', handleOnScroll);
  }, []);

  return (
    <nav className="flex items-center justify-between px-5 lg:hidden py-5  z-20 w-full " ref={navRef}>
      <h1 className="shadow-text">Beauty</h1>
      <button type="button" onClick={() => setOpenNav(true)}>
        <Icon icon="fontisto:nav-icon-a" className="w-6 h-6 text-primaryBlack/80" />
      </button>

      {/* SIDEBAR SMALL */}
      <Sidebar openNav={openNav} setOpenNav={setOpenNav} />
    </nav>
  );
};

export default SmallNavbar;
