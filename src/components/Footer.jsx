import React from 'react';
import { Icon } from '@iconify/react';
import { helpsLinks, navLinks, socialsLinks } from '../utils/links';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="main-container w-screen mt-32 bg-bgPrimaryPink flex flex-col gap-10">
      <div className="flex items-center flex-col lg:flex-row lg:justify-between w-full">
        <div className="w-full lg:w-1/2">
          <h1>Beauty</h1>
          <p className="text-xs mt-5 leading-relaxed lg:max-w-xs lg:text-sm">Experience transformation with our premium beauty products. Radiate confidence and embrace timeless elegance.</p>
        </div>

        <div className="w-full lg:w-1/2 mt-10 flex flex-col lg:flex-row gap-10">
          <ul className="font-Quicksand text-primaryBlack/80 flex-col flex gap-2 text-xs ">
            <h4 className="font-semibold mb-5 lg:text-lg">Navigation</h4>
            {navLinks.map((link) => {
              return (
                <li key={link.id}>
                  <Link className="flex justify-between w-1/2 lg:w-full hover:text-primaryBlack xl:text-sm" to={link.path}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="font-Quicksand text-primaryBlack/80 flex-col flex gap-2 text-xs ">
            <h4 className="font-semibold mb-5 lg:text-lg">Contact Us</h4>
            {socialsLinks.map((social) => {
              return (
                <li key={social.id}>
                  <Link className="flex justify-between w-1/2 lg:w-full hover:text-primaryBlack xl:text-sm">
                    {social.name}
                    <Icon icon={social.icon} className="lg:w-4 lg:h-4" />
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="font-Quicksand text-primaryBlack/80 flex-col flex gap-2 text-xs ">
            <h4 className="font-semibold mb-5 lg:text-lg">Help Center</h4>
            {helpsLinks.map((help) => {
              return (
                <li key={help.id}>
                  <Link className="flex justify-between w-1/2 lg:w-full hover:text-primaryBlack xl:text-sm">{help.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <h4 className="lg:self-start text-center">Copyright I Nyoman Dharma © 2023. All right reserved </h4>
    </footer>
  );
};

export default Footer;
