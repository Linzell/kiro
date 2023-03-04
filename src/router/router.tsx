import MainLayout from '§/layouts/mainLayout';
import Home from '&/home';
import About from '&/about';
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
    ],
  },
];

export default routes;
