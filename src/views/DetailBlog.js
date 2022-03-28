import { useParams, useHistory } from "react-router-dom";
import useFetch from "../customize/fetch";
import "./Blog.scss";
const DetailBlog = () => {
  let history = useHistory();
  let { id } = useParams();

  const handleBackData = () => {
    history.push("/blog");
  };
  const {
    data: dataBlogDetail,
    isLoading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);

  return (
    <>
      <div className="blog-detail">
        {dataBlogDetail && (
          <>
            <div className="title">
              Blog ID : {id} -
              {isLoading === true ? "Loading..." : dataBlogDetail.title}
            </div>
            <div className="content">{dataBlogDetail.body}</div>
          </>
        )}
      </div>
      <div>
        <span onClick={handleBackData}>BACK </span>{" "}
      </div>
    </>
  );
};

export default DetailBlog;
