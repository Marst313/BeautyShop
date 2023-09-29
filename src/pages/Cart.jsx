import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useAtom } from 'jotai';

import { cartsStorage } from '../utils/store';
import Table from '../components/Table';

const Cart = () => {
  const [carts, setCarts] = useAtom(cartsStorage);
  const [data, setData] = useState([...carts]);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('carts'));
    setData(item);
  }, []);

  useEffect(() => {
    if (data.length !== 0) {
      const total = data
        .map((item) => +(item.price * item.quantity + 20))
        .reduce((acc, curr) => acc + curr, 0)
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
      <section className="main-container flex justify-center items-center mt-20 flex-col">
        <h3 className="font-bold text-xl lg:mt-10">Dharma Cart {data.length} items</h3>

        <Table setCarts={setCarts} setData={setData} data={data} />

        <section className="w-full mt-10 flex justify-end text-base">
          <div className="w-72  bg-bgPrimaryPink p-3 flex flex-col gap-2 rounded-sm ">
            <h3 className="flex justify-between ">
              Total Products : <span>{data.length}</span>
            </h3>
            <h3 className="flex justify-between ">
              Shipping : <span>$20</span>
            </h3>
            <h3 className="flex justify-between font-bold">
              Total : <span>${totalPrice}</span>
            </h3>
            <button className="btn-primary  lg:mb-0">Pay Now !</button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Cart;
