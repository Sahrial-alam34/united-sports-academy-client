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
import { motion } from 'framer-motion'
import { Fade } from 'react-awesome-reveal';
const queryClient = new QueryClient()
import { HelmetProvider } from 'react-helmet-async';
import router from './Routes/Routes';
import AuthProvider from './providers/AuthProvider';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Fade>
          <HelmetProvider>
            <QueryClientProvider client={queryClient}>
              <div className='max-w-screen-xl mx-auto'>
                <RouterProvider router={router} />
              </div>
            </QueryClientProvider>

          </HelmetProvider>
        </Fade>
      </motion.div>

    </AuthProvider>
  </React.StrictMode>,
)
