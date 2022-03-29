import logo from "./logo.svg";
import "./App.scss";
import Navigation from "./views/Navigation";
import { useState, useEffect } from "react";
import Todo from "./views/Todo";
import Covid from "./views/Covid";
import Blog from "./views/Blog";
import AddNewBlog from "./views/AddNewBlog";
import NotFound from "./views/NotFound";
import DetailBlog from "./views/DetailBlog";
import { Countdown, NewCountDown } from "./views/Countdown";
import YoutubeSearch from "./views/YoutubeSearch";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const App = () => {
  const onTimeup = () => {
    alert("Tuan oc cho");
  };

  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter((item) => item.id !== id);
    setTodos(currentTodos);
  };
  const handleOnClick = () => {
    if (!address) {
      alert("empty output");
      return;
    }

    //hook not merge state
    //... spread synstax
    let ids = Math.floor(Math.random() * 1000);
    let newTodo = { id: ids, title: address, type: "Work" };
    setTodos([...todos, newTodo]);
    setAddress("");
  };
  const handleOnChangeInput = (event) => {
    setAddress(event.target.value);
  };
  //name : phan tu, setName: bien de su dung khi xu ly thay doi
  let [name, setName] = useState("trong"); // [a1,b1, ...c1]
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "Homework", type: "Work" },
    { id: "todo2", title: "Work", type: "Work" },
    { id: "todo3", title: "Sleep", type: "Activities" },
    { id: "todo4", title: "Eat", type: "Activities" },
  ]);
  //giao dien re render se goi use effect
  //component did update
  useEffect(() => {
    //giao dien re render se goi use effect
    // console.log("Use effect address")
  }, [address]);

  useEffect(() => {
    // console.log("Use effect todos")
  }, [todos]);
  let number = 69;
  //re-render
  // for lap theo index, map tra? ra array moi
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navigation />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/" exact>
            <Covid />
          </Route>
          <Route path="/timer">
            <NewCountDown onTimeup={onTimeup} />
            <span>---------------</span>
            <Countdown onTimeup={onTimeup} />
          </Route>
          <Route path="/todo">
            <Todo
              todos={todos}
              title={"All todo"}
              deleteDataTodo={deleteDataTodo}
            />
            <input
              type="text"
              value={address}
              onChange={(event) => handleOnChangeInput(event)}
            />
            <button type="button" onClick={(event) => handleOnClick(event)}>
              Click Me{" "}
            </button>
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/blog/:id">
            <DetailBlog />
          </Route>
          <Route path="/addnewblog/">
            <AddNewBlog />
          </Route>
          <Route path="/secret">
            <YoutubeSearch />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
