import { useParams } from "react-router-dom";
const DetailBlog = () => {
  let { id } = useParams();
  return <div>DetailBlog with id = {id}</div>;
};

export default DetailBlog;
