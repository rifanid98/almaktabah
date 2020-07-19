import { Login, Signup } from "screens";

const mainScreenRoutes = [
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

export default mainScreenRoutes;