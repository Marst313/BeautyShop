import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const AllTypesAtom = atom([]);
export const AllBrandsAtom = atom([]);
export const LargestPriceAtom = atom([]);

export const AllItemsAtom = atom([]);
export const PositionAtom = atom({ start: 0, end: 10 });

export const filtersAtom = atom({
  price: 0,
  rating: 0,
  sort: 'lowest',
  brand: 'All',
  type: 'All',
});

export const cartsStorage = atomWithStorage('carts', []);
export const listTypeAtom = atom('grid');
