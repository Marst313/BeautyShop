import axios from 'axios';

const customFetch = axios.create({
  baseURL: `https://api.airtable.com/v0/${import.meta.env.VITE_APP_AIRTABLE_BASE}/beauty%20products`,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_APP_AIRTABLE_API_KEY}`,
  },
});

export default customFetch;
