import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <>
      <nav>
        <ul>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/about-us">About us</Link>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
