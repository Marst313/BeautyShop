import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { logoToner } from '../assets/images';

const CardGrid = (product) => {
  const {
    fields: { brand, name, rating, price, type, icon, id },
  } = product;

  return (
    <li>
      <div className="group">
        <img src={icon[0].url} alt={name} />
        <Link className="group-hover:opacity-100" to={`/products/${product.id}`}>
          <Icon icon="ic:round-search" />
        </Link>
      </div>

      <article>
        <h4>$ {price}</h4>
        <h5>{name.slice(0, 20)}</h5>
        <p>{brand || '-'}</p>
        <div>
          <button disabled>
            <Icon icon="ic:round-star" />
            <p>{rating || '-'}</p>
          </button>

          <div></div>

          <p>{type.replace('_', ' ')}</p>

          <button>
            <Icon icon="mdi:cart-outline" />
          </button>
        </div>
      </article>
    </li>
  );
};

export default CardGrid;
