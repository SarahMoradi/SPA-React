import "./App.css";

import { Route, Routes } from "react-router-dom";

import Layout from './component/Layout/Layout'
import routes from "./component/routes";

function App() {
  return (
    <Layout>
      <Routes>
      {routes.map((route) => (
        <Route { ...route } />
      ))}
    </Routes>
    </Layout>
  );
}

export default App;
