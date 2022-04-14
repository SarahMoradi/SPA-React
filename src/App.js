import "./App.css";

import { Route, Routes } from "react-router-dom";

import Layout from '../src/component/Layout/Layout'
import routes from "./routes";

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
