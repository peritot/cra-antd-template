import Root from '@/views/Root';
import Home from '@/views/Home';

const routes = [
  {
    title: 'Cra Antd Template',
    component: Root,
    routes: [
      {
        path: ['/home', '/'],
        exact: true,
        component: Home,
      },
    ],
  },
];

export default routes;
