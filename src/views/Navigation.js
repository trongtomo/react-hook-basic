import "./Navigation.scss";
import { Link, NavLink } from "react-router-dom";

const Navigaton = () => {
  return (
    <div className="topnav">
      <NavLink activeClassName="active1" exact to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active1" to="/timer">
        Timer App
      </NavLink>
      <NavLink activeClassName="active1" to="/todo">
        Todo App
      </NavLink>
      <NavLink activeClassName="active1" to="/blog">
        Blog App
      </NavLink>
      <NavLink activeClassName="active1" to="/secret">
        Youtube
      </NavLink>
    </div>
  );
};
export default Navigaton;
