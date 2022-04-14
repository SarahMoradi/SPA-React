import AboutUs from "./component/Pages/AboutUs";
import HomePage from "./component/Pages/HomePage";
import NotFound from "./component/Pages/NotFound";

const routes = [
  { path: "/", element: <HomePage />, exact: true },
  { path: "/about-us", element: <AboutUs /> },
  { element: <NotFound /> },
];

export default routes;
