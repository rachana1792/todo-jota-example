import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider, createStore } from "jotai"; //importing Provider

const myStore = createStore()

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode store={myStore}>
    <Provider>
      <App />
    </Provider>
    
  </React.StrictMode>,
)
