import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import MainLayout from './layouts/MainLayout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignIn from './pages/SignIn.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import TaskBoard from './pages/TaskBoard.jsx';
import PrivetRoute from './routers/PrivetRoute.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: (
          <PrivetRoute>
            <TaskBoard></TaskBoard>
          </PrivetRoute>
        ),
      },
      {
        path: '/sign-in',
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
