import Home from '../../Pages/Home';
import NotFound from '../../Pages/NotFound';
import SignUp from '../../Pages/SignUp';
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
    path: '/SignUp',
    exact: true,
    component: SignUp,
    meta: {
      noAuth: true
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
