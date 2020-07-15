import Login from './Login'
import Signup from './Signup'

export {
  Login,
  Signup
}

export const screenRoutes = [
  {
    name: 'Login',
    component: Login,
    options: {
      title: 'Login Page'
    }
  },
  {
    name: 'Signup',
    component: Signup,
    options: {
      title: 'Signup Page'
    }
  }
];