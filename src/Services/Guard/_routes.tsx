import Home from '../../Pages/Home';
import NotFound from '../../Pages/NotFound';
import SignIn from '../../Pages/SingIn.tsx';

export default () => [
  {
    path: '/',
    exact: true,
    component: Home,
    error: 'Custom error for home page',
    meta: {
        authOnly: true,
      }
  },
  {
    path: '/SignIn',
    exact: true,
    component: SignIn,
    meta: {
      noAuth: true,
    }
  },
  {
    path: '*',
    component: NotFound,
    ignoreGlobal: true,
    meta: {
      authOnly: true,
    }
  },
];
