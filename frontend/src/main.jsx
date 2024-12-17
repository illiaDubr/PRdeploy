import React from 'react';
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import '@style/normalize.scss'
import '@style/index.scss'
import {HelmetProvider} from "react-helmet-async";
import App from "./App.jsx";
import { Context } from "./api/store/storeContext.js";
import Store from "./api/store/store.js";


createRoot(document.getElementById('root')).render(
  <HelmetProvider>
     <BrowserRouter>
         <React.StrictMode>
             <Context.Provider value={{ store: new Store() }}>
                 <App />
             </Context.Provider>
         </React.StrictMode>
     </BrowserRouter>
  </HelmetProvider>
)