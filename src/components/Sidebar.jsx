import React from 'react';
import { Icon } from '@iconify/react';
import { navLinks } from '../utils/links';
import { Link, NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Loading } from './';

const Sidebar = ({ openNav, setOpenNav }) => {
  const { isLoading, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <aside className={`${openNav ? 'translate-x-0' : '-translate-x-full'} aside`}>
      <div>
        <h1>Beauty</h1>
        <button type="button" onClick={() => setOpenNav(false)}>
          <Icon icon="lucide:x" />
        </button>
      </div>

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
            <p>1</p>
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
    </aside>
  );
};

export default Sidebar;
