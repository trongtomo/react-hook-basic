import { useParams, useHistory } from "react-router-dom";
const DetailBlog = () => {
  let history = useHistory();
  const handleBackData = () => {
    history.push("/blog");
  };
  let { id } = useParams();
  return (
    <>
      <div>DetailBlog with id = {id}</div>
      <div>
        <span onClick={handleBackData}>BACK </span>{" "}
      </div>
    </>
  );
};

export default DetailBlog;
