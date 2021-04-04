import App from './App';
import LoginPage from './pages/login';
import SignUpPage from './pages/signUp';

const headerRoutes = [
  {
    path: '/',
    component: App,
    name: 'Home',
  },
  {
    path: '/signin',
    component: LoginPage,
    name: 'Login',
  },
  {
    path: '/signup',
    component: SignUpPage,
    name: 'Sign up',
  },
];

const dropdownRoutes = [
  {
    name: 'Profile',
    href: '/profile',
  },
  {
    name: 'Sign out',
    href: '/signout',
  },
];

export { dropdownRoutes, headerRoutes };
