import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './Store/Store.jsx'
import axios from "axios";
axios.defaults.baseURL='http://localhost:8050'


ReactDOM.createRoot(document.getElementById('root')).render(

  
    <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
    </BrowserRouter>
  ,
)
