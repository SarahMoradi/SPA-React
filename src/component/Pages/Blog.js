import { useParams } from "react-router-dom";

const Blog = (props) => {
  const params = useParams();
  console.log(params.id);
  return <>Blog Detail - {params.id} </>;
};

export default Blog;
