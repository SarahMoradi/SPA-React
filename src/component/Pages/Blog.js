import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Blog = (props) => {
  const params = useParams();
  console.log(params.id);
  return (
    <>
      <h2>Blog Detail - {params.id} </h2>
      <Link to="/blogs">Go to homepage</Link>
    </>
  );
};

export default Blog;
