import useFetch from "../customize/fetch";
import "./Blog.scss";
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddNewBlog from "./AddNewBlog";
const Blog = () => {
  const [newData, setNewData] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    data: dataBlogs,
    isLoading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);

  useEffect(() => {
    if (dataBlogs && dataBlogs.length > 0) {
      let data = dataBlogs.slice(0, 9);
      setNewData(data);
    }
  }, [dataBlogs]);

  const handleAddNew = (blog) => {
    let data = newData;
    data.unshift(blog);
    setShow(false);
    setNewData(data);
  };
  const deletePost = (id) => {
    let data = newData;
    data = data.filter((item) => item.id !== id);
    setNewData(data);
  };
  return (
    <>
      <>
        <Button variant="primary" className="my-3" onClick={handleShow}>
          Add New Blog
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Blog</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddNewBlog handleAddNew={handleAddNew} />
          </Modal.Body>
        </Modal>
      </>
      <div className="blogs-container">
        {isLoading === false &&
          newData &&
          newData.length > 0 &&
          newData.map((item) => {
            return (
              <div className="single-blog" key={item.id}>
                <div className="title">
                  Title:<span>{item.title}</span>
                  <span
                    style={{ color: "blue" }}
                    onClick={() => deletePost(item.id)}
                  >
                    X
                  </span>
                </div>
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
