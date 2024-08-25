import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { storage } from './app/store.js'
import { createRoot } from 'react-dom/client'


createRoot(document.getElementById('root')).render(
  <Provider store={storage}>
    <App />
  </Provider>,
)
