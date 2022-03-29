import "./Blog.scss";
import { useState } from "react";
import axios from "axios";
const AddNewBlog = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmitbtn = async (event) => {
    event.preventDefault();
    if (!title) {
      alert("empty title");
      return;
    }
    if (!content) {
      alert("empty content");
      return;
    }
    let data = {
      title: title,
      body: content,
      userId: 1,
    };
    let res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );
    if (res && res.data) {
      let newBlog = res.data;
      props.handleAddNew(newBlog);
    }
  };
  return (
    <div className="add-new-container">
      <form onSubmit={handleSubmitbtn}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label>Content:</label>
          <input
            type="text"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
          <br />
          <button tpye="submit"> Submit </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewBlog;
