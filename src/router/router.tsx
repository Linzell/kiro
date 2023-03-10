import MainLayout from '§/layouts/mainLayout';
import Home from '&/home';
import About from '&/about';
import Settings from '&/settings';
import ItemsTable from '&/itemsTable';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/items',
        element: <ItemsTable />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
    ],
  },
];

export default routes;
