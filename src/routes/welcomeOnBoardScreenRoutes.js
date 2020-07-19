import { Slide1, Slide2, Slide3 } from "screens/OnBoard";

// import { Slide1, Slide2, Slide3 } from "screens";

const welcomeOnBoardScreenRoutes = [
  {
    name: 'slide1',
    component: Slide1,
    options: {
      title: 'Slide 1'
    }
  },
  {
    name: 'slide2',
    component: Slide2,
    options: {
      title: 'Slide 2'
    }
  },
  {
    name: 'slide3',
    component: Slide3,
    options: {
      title: 'Slide 3'
    }
  },
];

export default welcomeOnBoardScreenRoutes;