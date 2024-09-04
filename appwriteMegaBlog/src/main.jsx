import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store.js'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
<React.StrictMode>
<Provider store={store}>
    <App />
  </Provider>
</React.StrictMode>,
)
