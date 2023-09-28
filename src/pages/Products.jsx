import React from 'react';
import { atom, useAtom } from 'jotai';

import { AllFilter, Caraousel, PageHeader } from '../components';

export const filtersAtom = atom({
  price: 0,
  rating: 0,
  sort: 'lowest',
  brand: 'All',
  type: 'All',
});
export const cartsAtoms = atom([]);

const Products = () => {
  return (
    <main>
      <PageHeader title="products" />
      <Caraousel />
      {/* <CategoryProducts /> */}
      <AllFilter />

      <footer className="p-5 mt-10 text-center bg-bgPrimaryProducts">
        <h5 className="font-bold font-Quicksand">Copyright I Nyoman Dharma © 2023. All right reserved </h5>
      </footer>
    </main>
  );
};

export default Products;
