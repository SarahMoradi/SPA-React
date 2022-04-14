import "./App.css";

import {Route, Routes} from "react-router-dom";

import AboutUs from "./component/AboutUs";
import HomePage from "./component/HomePage";
import NotFound from "./component/NotFound";

function App() {
  return (
        <Routes>
          <Route path="/" exact={true} element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
  );
}

export default App;
