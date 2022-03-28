import useFetch from "../customize/fetch";
import "./Blog.scss";
import { Link, useHistory } from "react-router-dom";
const Blog = () => {
  let history = useHistory();
  const handleAddNew = () => {
    history.push("/addnewblog");
  };
  const {
    data: dataBlogs,
    isLoading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);
  // console.log("check data", dataBlogs);
  let newData = [];
  if (dataBlogs && dataBlogs.length > 0) {
    newData = dataBlogs.slice(0, 10);
  }
  return (
    <>
      <div>
        <button className="btnAddNew" onClick={handleAddNew}>
          Add New Blog
        </button>
      </div>
      <div className="blogs-container">
        {isLoading === false &&
          newData &&
          newData.length > 0 &&
          newData.map((item) => {
            return (
              <div className="single-blog" key={item.id}>
                <div className="title">Title: {item.title}</div>
                <div className="content">{item.body}</div>
                <button>
                  <Link to={`/blog/${item.id}`}>View details</Link>
                </button>
              </div>
            );
          })}
        {isLoading === true && <div> Loading ... </div>}
      </div>
    </>
  );
};

export default Blog;
