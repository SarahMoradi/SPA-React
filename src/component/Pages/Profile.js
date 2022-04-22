import "./index.css";

import Dashborad from "./Dashboard";
import Download from "./Download";
import { Route } from "react-router-dom";
import Sidebar from "./Sidebar";

const Profile = () => {
  return (
    <>
      <p>welcome to management panel</p>
      <Sidebar />
      <Route path="/profile/dashboard" element= {<Dashborad />} />
      <Route path="/profile/downloads" element={<Download /> } />
    </>
  );
};

export default Profile;
