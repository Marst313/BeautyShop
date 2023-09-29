import React from 'react';
import { Icon } from '@iconify/react';
import { atom, useAtom } from 'jotai';

import { AllProducts, InputFilter } from './';
import { AllBrandsAtom, AllTypesAtom, LargestPriceAtom, PositionAtom } from '../utils/store';
import { filtersAtom } from '../utils/store';

export const listTypeAtom = atom('grid');

const AllFilter = () => {
  const [filters, setFilters] = useAtom(filtersAtom);
  const [listType, setListType] = useAtom(listTypeAtom);
  const [allTypes] = useAtom(AllTypesAtom);
  const [allBrands] = useAtom(AllBrandsAtom);
  const [largetsPrice] = useAtom(LargestPriceAtom);
  const [position, setPosition] = useAtom(PositionAtom);

  const handleChangeFilter = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleChangeListType = (type) => {
    setListType(type);
  };
  const handleClearFilter = () => {
    setPosition({ start: 0, end: 10 });
    setFilters({ price: 0, rating: 0, sort: 'lowest', brand: 'All', type: 'All' });
  };

  return (
    <main className="main-container all-filters relative ">
      <div>
        <h3>Filter</h3>

        <form onSubmit={(e) => e.preventDefault()}>
          <InputFilter type="range" name="price" max={largetsPrice} />

          <InputFilter type="range" name="rating" max="5" onChange={handleChangeFilter} />

          <div className="form-control">
            <h5>Sort By</h5>
            <select name="sort" onChange={handleChangeFilter} value={filters.sort}>
              <option value="lowest">Price (Lowest)</option>
              <option value="highest">Price (Highest)</option>
            </select>
          </div>

          <div className="form-control">
            <h5>Types</h5>
            <select name="type" onChange={handleChangeFilter} value={filters.type}>
              {allTypes?.map((item) => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-control">
            <h5>Brands</h5>
            <select name="brand" onChange={handleChangeFilter} value={filters.brand}>
              {allBrands?.map((item) => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>

          <button type="button" className="btn-primary" onClick={handleClearFilter}>
            CLEAR FILTERS
          </button>
        </form>
      </div>

      <div>
        <div>
          <button onClick={() => handleChangeListType('grid')}>
            <Icon icon="ep:menu" className={`${listType === 'grid' ? 'active' : ''}  `} />
          </button>
          <button onClick={() => handleChangeListType('list')}>
            <Icon icon="ph:list-fill" className={`${listType === 'list' ? 'active' : ''}  `} />
          </button>
        </div>

        <AllProducts listType={listType} />
      </div>
    </main>
  );
};

export default AllFilter;
