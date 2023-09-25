import React from 'react';
import { useAtom } from 'jotai';
import { filtersAtom } from '../pages/Products';

const InputFilter = ({ type, name, max }) => {
  const [filters, setFilters] = useAtom(filtersAtom);
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    const newValue = (filters[name] = value);

    setFilters({ ...filters, name: newValue });
  };

  return (
    <div className={`form-control `}>
      <h5>{name}</h5>
      <input type={type} id={name} value={filters[name]} name={name} max={max} onChange={handleChange} />
      <label htmlFor={name}>{name === 'price' ? `$${filters[name]}` : filters[name]}</label>
    </div>
  );
};

export default InputFilter;
