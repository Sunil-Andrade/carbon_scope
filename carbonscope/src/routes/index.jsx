import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

import Home from '../pages/Home/Home'
import Dashboard from '../pages/Dashboard/Dashboard'
import Register from '../pages/Register/Register'
import SubmitAction from '../pages/SubmitAction/SubmitAction'
import VerificationStatus from '../pages/VerificationStatus/VerificationStatus'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'register', element: <Register /> },
      { path: 'submit', element: <SubmitAction /> },
      { path: 'status', element: <VerificationStatus /> },
    ],
  },
])