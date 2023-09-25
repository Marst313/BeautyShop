import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';

import { useFetchSingleProduct } from '../utils/reactQuerryCustomHooks';
import { Loading, PageHeader } from '../components';

import { Error } from '.';
import { atom, useAtom } from 'jotai';

export const cartsAtoms = atom([]);
export const itemsAtoms = atom({ name: '', items: '', brand: '', quantity: 0, price: 0, img: '' });

const SingleProduct = () => {
  const { id } = useParams();

  const [cart, setCart] = useAtom(cartsAtoms);

  const { isLoading, data: product, isError } = useFetchSingleProduct(id);
  const [imageActive, setImageActive] = useState(0);
  const [totalProduct, setTotalProduct] = useState(1);

  const handleAddToCart = (e) => {
    e.preventDefault();
    const { id, fields } = product;
    const newItem = { id, items: fields.description, brand: fields.brand, price: fields.price, img: fields.icon[0] };

    if (cart.length > 0) {
      const itemsId = cart.find((item) => {
        console.log(item.id);
        console.log(newItem.id);
      });
    }

    setCart([...cart, newItem]);
  };

  const handleOnClick = (type) => {
    if (type === 'inc') {
      setTotalProduct((old) => {
        const newValue = old + 1;

        return newValue;
      });
    }

    if (type === 'dec') {
      setTotalProduct((old) => {
        let newValue = old - 1;

        if (newValue < 1) newValue = 1;

        return newValue;
      });
    }
  };
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <main>
      <PageHeader title={product.fields?.name} product />

      <section className="main-container container-single_products ">
        <Link className="btn-secondary " to="/products">
          Back To Products
        </Link>

        <div>
          <div>
            <img src={product.fields?.image[`${imageActive}`].url} alt={product.fields.name} />

            <ul>
              {product.fields.image?.map((image, index) => {
                return (
                  <li key={image.id} onClick={() => setImageActive(index)}>
                    <img src={image.url} alt="" className={`${imageActive === index ? 'opacity-100' : 'opacity-60 hover:scale-110'} w-16 cursor-pointer rounded-sm `} />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="products-description">
            <h2>{product.fields?.name}</h2>

            <div className="container-stars">
              <Icon icon="ic:round-star" />
              <h5>{product.fields?.rating}</h5>
            </div>

            <p>{product.fields?.sold} Pieces Sold</p>

            <h4>$ {product.fields?.price}</h4>
            <p className="description">{product.fields?.description.slice(0, 250)}...</p>

            <form className="products-button" onSubmit={handleAddToCart}>
              <button type="button" onClick={() => handleOnClick('dec')} className="btn-click">
                <Icon icon="ic:round-minus" />
              </button>

              <p>{totalProduct}</p>
              <button type="button" onClick={() => handleOnClick('inc')} className="btn-click">
                <Icon icon="ic:round-plus" />
              </button>

              <button type="submit" className="btn-secondary ">
                Add To Cart
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleProduct;
