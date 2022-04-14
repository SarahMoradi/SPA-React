import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  const items = [
    { name: "Home", to: "/", exact: true },
    { name: "About us", to: "/about-us" },
    { name: "Blogs", to: "/blogs" },
  ];
  return (
    <>
      <nav>
        <ul>
          {items.map((item) => {
            return (
              <div key={item.to}>
                <NavLink to={item.to}>{item.name}</NavLink>
              </div>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
