import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Styles
import './index.css'
import './tailwind-compiled.css'
// Redux
import { store, persister } from './redux/store.jsx'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
