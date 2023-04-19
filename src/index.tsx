import React from 'react';
import ReactDOM from 'react-dom/client';
import "./fonts/IBM_Plex_Mono/IBMPlexMono-Bold.ttf"
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
 </React.StrictMode>

);

