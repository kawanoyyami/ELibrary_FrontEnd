import SearchBook from '../../Pages/AllBooks';
import Authors from '../../Pages/Authors';
import Books from '../../Pages/Books';
import Home from '../../Pages/Home';
import NotFound from '../../Pages/NotFound';
import Profile from '../../Pages/Profile';
import SignUp from '../../Pages/SignUp';
import SignIn from '../../Pages/SingIn.tsx';
import Subscription from '../../Pages/Subscription';

export default () => [
  {
    path: '/',
    exact: true,
    component: Home,
    error: 'Custom error for home page',
    meta: {
      noAuth: true
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
    path: '/SearchBook',
    exact: true,
    component: SearchBook,
    meta: {
      noAuth: true,
    }
  },
  {
    path: '/Profile',
    exact: true,
    component: Profile,
    meta: {
      noAuth: true,
    }
  },
  {
    path: '/Auhtors',
    exact: true,
    component: Authors,
    meta: {
      noAuth: true,
    }
  },
  {
    path: '/Books',
    exact: true,
    component: Books,
    meta: {
      noAuth: true,
    }
  },
  {
    path: '/Subscription',
    exact: true,
    component: Subscription,
    meta: {
      noAuth: true,
    }
  },
  {
    path: '/*',
    component: NotFound,
    ignoreGlobal: true,
    meta: {
      noAuth: true,
    }
  },
];
