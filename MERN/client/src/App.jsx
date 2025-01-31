import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  AllJobs,
  Profile,
  Admin,
  Stats,
} from './pages';

import {action as registerAction} from './pages/Register'
import { action as loginAction } from './pages/Login';
import {loader as dashboardLoader} from './pages/DashboardLayout'

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('isDarkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
}

const isDarkThemeEnabled = checkDefaultTheme();


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
      },
      {
        path: 'login',
        element: <Login />,
        action : loginAction,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled}/>,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
          },
          {
            path: 'stats',
            element: <Stats />,

          },
          {
            path: 'all-jobs',
            element: <AllJobs />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'admin',
            element: <Admin />,
          },
        ]
      },
      {
        index : true,
        element: <Landing />,
      },
    ]
  },
]);

const App = () => {
  return <RouterProvider router={router} />
}


export default App