import AboutUs from './AboutUs'
import HomePage from './HomePage'
import NotFound from './NotFound'

const routes = [
    {path: "/", element: <HomePage />},
    {path: "/about-us", element: <AboutUs />},
    {path: "/not-found", element: <NotFound />}
]

export default routes