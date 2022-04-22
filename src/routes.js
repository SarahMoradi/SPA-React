import AboutUs from "./component/Pages/AboutUs";
import Blog from "./component/Pages/Blog";
import BlogsPage from "./component/Pages/BlogsPage";
import HomePage from "./component/Pages/HomePage";
import NotFound from "./component/Pages/NotFound";
import Posts from "./component/Pages/Posts";
import Profile from "./component/Pages/Profile";

const routes = [
  { path: "/", element: <HomePage />, exact: "true" },
  { path: "/blogs", element: <BlogsPage /> },
  { path: "/blogs/:id", element: <Blog /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/posts", element: <Posts /> },
  { path: "/profile", element: <Profile /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
