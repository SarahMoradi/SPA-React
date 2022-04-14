import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  const items = [
    { name: "Home", to: "/", exact: true },
    { name: "About-us", to: "/about-us", exact: true },
    { name: "Blogs", to: "/blogs", exact: true },
  ];
  return (
    <>
      <nav>
        <ul>
          {items.map((item) => {
            return (
              <div key={item.to}>
                <NavLink to={item.to} exact={item.exact || false}>
                  {item.name}
                </NavLink>
              </div>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
