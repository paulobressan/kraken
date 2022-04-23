const Home = () => import("../views/Home");

export const namedRoutes = {
  home: "home",
};

export default [
  {
    path: "/",
    name: namedRoutes.home,
    component: Home,
  },
];
