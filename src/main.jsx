import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
import { HelmetProvider } from 'react-helmet-async';
import router from './Routes/Routes';
import AuthProvider from './providers/AuthProvider';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>

      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
