import { useHistory } from "react-router-dom";
const NotFound = () => {
  let history = useHistory();
  const handleClickBtn = () => {
    history.push("/");
  };
  return (
    <div className="not-found-container">
      <h4>404 Not Found</h4>
      <h5>The link maybe broken</h5>
      <button className="btn btn-primary" onClick={handleClickBtn}>
        Go to Home Page
      </button>
    </div>
  );
};
export default NotFound;
