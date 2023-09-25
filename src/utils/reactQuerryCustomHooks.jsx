import { useQuery } from '@tanstack/react-query';
import customFetch from './axios';
import { useState } from 'react';

export const useFetchProduct = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await customFetch.get('');
      return data;
    },
  });

  return { isLoading, data, isError };
};
// https://api.airtable.com/v0/appzVOjZfskIn64DJ/beauty%20products/reccrO8uOvLTPwAPR
export const useFetchSingleProduct = (id) => {
  const [isLoading, setLoading] = useState(true);

  const { data, isError } = useQuery({
    queryKey: ['single products'],
    queryFn: async () => {
      const { data } = await customFetch.get(`/${id}`);

      setLoading(false);
      return data;
    },
  });

  return { isLoading, data, isError };
};
