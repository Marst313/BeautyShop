import React, { useEffect, useState } from 'react';
import { atom, useAtom } from 'jotai';

import { Error, Products } from '../pages/';
import { CardGrid, CardList, Loading } from './';
import { filtersAtom } from '../pages/Products';
import { useFetchProduct } from '../utils/reactQuerryCustomHooks';

export const AllTypesAtom = atom([]);
export const AllBrandsAtom = atom([]);
export const LargestPriceAtom = atom([]);

export const AllItemsAtom = atom([]);
export const PositionAtom = atom({ start: 0, end: 10 });

const AllProducts = ({ listType }) => {
  const [filters] = useAtom(filtersAtom);

  const [item, setItem] = useAtom(AllItemsAtom);
  const [position, setPosition] = useAtom(PositionAtom);
  const [end, setEnd] = useState(10);

  const { data: products, isError, isLoading } = useFetchProduct();
  const [allTypes, setAllTypes] = useAtom(AllTypesAtom);
  const [allBrands, setAllBrands] = useAtom(AllBrandsAtom);
  const [allPrice, setAllPrice] = useAtom(LargestPriceAtom);

  const itemProducts = (products) => {
    const filteredProduct = products.records
      .map((item) => item)
      .filter((item) => {
        if (filters.type === 'All') return item;
        return item.fields.type === filters.type;
      })
      .filter((item) => {
        if (filters.brand === 'All') return item;
        return item.fields.brand === filters.brand;
      })
      .filter((item) => {
        return item.fields.rating >= filters.rating;
      })
      .filter((item) => {
        return item.fields.price >= filters.price;
      })
      .sort((a, b) => {
        if (filters.sort === 'lowest') return a.fields.price - b.fields.price;
        if (filters.sort === 'highest') return b.fields.price - a.fields.price;
      });

    setItem(filteredProduct.slice(position.start, position.end));
  };

  useEffect(() => {
    if (products) {
      // Filtered
      itemProducts(products);
    }
  }, [filters]);

  useEffect(() => {
    if (products) {
      // get all types
      const dataTypes = products.records.map((item) => item.fields.type).sort();
      const types = ['All', ...new Set(dataTypes)];
      setAllTypes(types);

      // get all brands
      const dataBrands = products.records.map((item) => item.fields.brand).sort();
      const brands = ['All', ...new Set(dataBrands)];
      setAllBrands(brands);

      // get all price
      const dataPrice = products.records.map((item) => item.fields.price).sort();
      const price = [...new Set(dataPrice)];

      const largestPrice = price.reduce((acc, current) => {
        return Math.max(acc, current);
      }, price[0]);

      setAllPrice(largestPrice);
    }
  }, [isLoading]);

  // Initial products
  useEffect(() => {
    if (!isLoading) {
      itemProducts(products);
    }
  }, [isLoading, position.end]);

  /* Load More Page */
  const handleMorePages = () => {
    setPosition((oldValue) => {
      const newValue = oldValue.end + 10;

      return { ...oldValue, end: newValue };
    });
  };

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (item.length === 0) {
    return <h2 className=" text-primaryPink mt-10">There is no products !!!</h2>;
  }

  return (
    <>
      <h2 className="my-5 font-Quicksand font-semibold lg:text-lg">
        Total Products : <span className="font-semibold font-Quicksand">{item.length}</span>
      </h2>
      <ul className={`${listType === 'grid' ? 'container-products_grid' : 'container-products_list'}`}>
        {item?.map((product) => {
          if (listType === 'grid') {
            return <CardGrid key={product.id} {...product} />;
          }

          return <CardList key={product.id} {...product} />;
        })}
      </ul>
      {item.length === position.end && (
        <button className="text-primaryPink mt-5" onClick={handleMorePages}>
          Load More...
        </button>
      )}
    </>
  );
};

export default AllProducts;
