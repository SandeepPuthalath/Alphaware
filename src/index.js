import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/app/store';
import MainPage from './pages/MainPage';
import WishlistPage from './pages/WishlistPage';

//Lazy rendering
const CartPage = React.lazy(() => import("./pages/CartPage"))

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: "/cart",
        element: <Suspense><CartPage/></Suspense>
      },
      {
        path: "/wishlist",
        element: <WishlistPage/>
      }
    ]
  }
])
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
