import { useParams } from "react-router-dom";

const Posts = (props) => {
  const params = useParams();
  const id = params.id || 1
  return (
    <>
      <h2>Post Page - {id}</h2>
      <p>{JSON.stringify(props.params)}</p>
    </>
  );
};

export default Posts;
