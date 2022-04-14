import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h3>404</h3>
      <p>Not Found page 404 Error</p>
      <Link to="/">go to homepage</Link>
    </>
  );
};

export default NotFound;
