import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'https://api.airtable.com/v0/appzVOjZfskIn64DJ/beauty%20products',
  headers: {
    Authorization: 'Bearer keyhmJNRUmzTD4ctS',
  },
});

export default customFetch;
