import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Blog = (props) => {
  const params = useParams();
  const id = params.id;
  return (
    <>
      <h2>Blog Detail - {params.id} </h2>
      <Link to={`/blogs/${parseInt(id) + 1}`}>Go to next page</Link>
    </>
  );
};

export default Blog;
