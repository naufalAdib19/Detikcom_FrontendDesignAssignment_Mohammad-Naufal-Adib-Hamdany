import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './custom.scss'
import Provider from './helper/context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
     <App />
    </Provider>
  </React.StrictMode>,
)
