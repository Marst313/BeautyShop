import React, { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useAuth0 } from '@auth0/auth0-react';

import { navLinks } from '../utils/links';
import { Loading } from './';

const Navbar = () => {
  const { isLoading, isAuthenticated, loginWithRedirect, logout } = useAuth0();
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

  if (isLoading) {
    return <Loading />;
  }
  return (
    <nav className="main-container hidden " ref={navRef}>
      <h1>Beauty</h1>
      <ul>
        {navLinks.map((link) => {
          return (
            <li key={link.id}>
              <NavLink to={link.path} className={({ isActive }) => (isActive ? 'border-b-primaryPink border-b-2' : 'hover:border-b-2 hover:border-primaryPink/50 transition-all')}>
                {link.name}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <div>
        <Link to="cart">
          <p>Cart</p>
          <Icon icon="mdi:cart" />
          <div>
            <p className="text-primaryWhite">1</p>
          </div>
        </Link>

        {isAuthenticated ? (
          <Link onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            <p>Logout</p>
            <Icon icon="majesticons:login" />
          </Link>
        ) : (
          <Link onClick={() => loginWithRedirect()}>
            <p>Login</p>
            <Icon icon="majesticons:login" className="rotate-180" />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
