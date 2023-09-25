import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, product }) => {
  return (
    <section className="page-header">
      <h3>
        <Link to="/">Home </Link>
        {product && <Link to="/products">/ Products </Link>}/ {title}
      </h3>
    </section>
  );
};

export default PageHeader;
