import React from 'react';
import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom';

const CardList = (product) => {
  const {
    fields: { brand, name, rating, price, type, icon, description },
  } = product;
  return (
    <li>
      <div className="group">
        <img src={icon[0].url} alt="products" />

        <div className="rating">
          <Icon icon="ic:round-star" />
          <p>{rating || '-'}</p>
        </div>

        <Link className="group-hover:opacity-100" to={`/products/${product.id}`}>
          <Icon icon="ic:round-search" />
        </Link>
      </div>

      <article>
        <h5>{name}</h5>
        <p>Brand : {brand || '-'}</p>
        <p>Type : {type.replace('_', ' ')}</p>

        <div className="pricing">
          <p>$ {price}</p>
          <button>
            <Icon icon="mdi:cart-outline" />
          </button>
        </div>
      </article>
    </li>
  );
};

export default CardList;
