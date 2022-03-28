import "./Blog.scss";
import { useState } from "react";
const AddNewBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmitbtn = (event) => {
    event.preventDefault();
    if (!title) {
      alert("empty title");
      return;
    }
    if (!content) {
      alert("empty content");
      return;
    }
    console.log("check data: title:", title, "|| content:", content);
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
