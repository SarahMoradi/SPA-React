import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return ( <aside>
        <ul >
          <div className='nav-item'>
            <NavLink to="/profile/dashboard" activeClassName="activeTab">Dashboard</NavLink>
          </div>
          <div className='nav-item'>
            <NavLink to="/profile/downloads">Downloads</NavLink>
          </div>
        </ul>
      </aside> );
}
 
export default Sidebar;