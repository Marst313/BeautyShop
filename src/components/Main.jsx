import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { Curology, Hero, logoToner } from '../assets/images';
const Main = () => {
  return (
    <section className="main-container main">
      <div>
        <h2>Enchanting Transformations & Empowering Beauty</h2>
        <button className="btn">
          discover more
          <Icon icon="solar:arrow-right-linear" />
        </button>

        <div className="container-card">
          <div className="card-preview">
            <img src={Curology} alt="Curology Products" />
            <h5>Curology</h5>
          </div>
          <div className="card-preview">
            <img src={logoToner} alt="Curology Products" />
            <h5>Hyaluronic</h5>
          </div>
        </div>
      </div>

      <div>
        <img src={Hero} alt="beauty women image" />
        <div>
          <h3>
            <strong>Effortless</strong> Elegance, <strong>Radiate</strong> Confidence,
          </h3>

          <div>
            <p>Embrace Effortless Elegance and Radiate Confidence with our curated collection of beauty products, designed to enhance your natural charm and boost your self-assurance.</p>

            <Link>
              SHOP NOW
              <Icon icon="solar:arrow-right-linear" className="w-7 h-7" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
