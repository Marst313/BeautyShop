import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useAtom } from 'jotai';

import { cartsStorage } from '../utils/store';
import Table from '../components/Table';
import { useAuth0 } from '@auth0/auth0-react';

const Cart = () => {
  const [carts, setCarts] = useAtom(cartsStorage);
  const [data, setData] = useState([...carts]);

  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  const [totalPrice, setTotalPrice] = useState(0);
  const [productsPrice, setProductsPrice] = useState(0);

  const handleOnClick = () => {
    console.log('hello guys');
  };

  useEffect(() => {
    if (data.length !== 0) {
      const total = data
        .map((item) => +(item.price * item.quantity + 20))
        .reduce((acc, curr) => {
          setProductsPrice((acc + curr - 20).toFixed(2));
          return acc + curr;
        }, 0)
        .toFixed(1);
      setTotalPrice(total);
    }
  }, [data]);

  useEffect(() => {
    const getItemLocal = JSON.parse(localStorage.getItem('carts'));
    setData(getItemLocal);
  }, []);

  if (data.length === 0) {
    return (
      <section className="main-container mt-20 flex flex-col">
        <h2>There is no Items in cart</h2>
        <Link className="btn-primary hover:bg-opacity-90" to="/products">
          Fill the cart
        </Link>
      </section>
    );
  }

  return (
    <main>
      <section className="cart-container">
        <h3>
          {user?.name || 'User'} Cart {data.length} items
        </h3>

        <Table setCarts={setCarts} setData={setData} data={data} />

        <div className="payment-container">
          <div>
            <h3>
              Product Price : <span>${productsPrice}</span>
            </h3>
            <h3>
              Shipping : <span>$20</span>
            </h3>
            <h2 className="font-bold text-lg font-Quicksand flex justify-between">
              Total : <span>${totalPrice}</span>
            </h2>
            <button onClick={() => (isAuthenticated ? handleOnClick() : loginWithRedirect())} className={`btn-primary lg:mb-0 hover:bg-opacity-90`}>
              {!isAuthenticated ? 'Login' : 'Pay Now !'}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
