import useFetch from "../customize/fetch";
import "./Blog.scss";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Blog = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>

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
