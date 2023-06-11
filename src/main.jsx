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
           animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
           transition={{
               duration: 1,
               delay: 0.3,
               ease: [0.5, 0.71, 1, 1.5],
           }}
           initial={{ opacity: 0, scale: 0.5 }}
          
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
