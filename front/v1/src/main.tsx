import './root.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App';
import { Provider } from 'react-redux';
import { store } from './7_redux/store';
import { RouterProvider } from 'react-router-dom';
import {router} from './0_routes/router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
);
