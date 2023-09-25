import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/style/index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <Auth0Provider
      domain={import.meta.env.VITE_APP_DOMAIN_AUTH0}
      clientId={import.meta.env.VITE_APP_CLIENTID_AUTH0}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </Auth0Provider>
  </QueryClientProvider>
);
