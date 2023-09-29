import React from 'react';
import { AllFilter, Caraousel, PageHeader } from '../components';

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
