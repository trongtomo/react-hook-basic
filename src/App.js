import logo from "./logo.svg";
import "./App.scss";
import Navigation from "./views/Navigation";
import {useState} from "react";
const App = () => {
  const handleOnClick =() =>{
    if(!address) {
      alert("empty output")
      return;
    }

    //hook not merge state
    //... spread synstax
    let newTodo={id:'abc',title:address}
    setTodos([...todos,newTodo])
    setAddress("");
  }
  const handleOnChangeInput =(event) =>{
    setAddress(event.target.value)
  }
  //name : phan tu, setName: bien de su dung khi xu ly thay doi
  let [name,setName]=useState("trong"); // [a1,b1, ...c1]
  const [address,setAddress]=useState("");
  const [todos,setTodos]=useState([
    {id:'todo1', title:'Homework'},
    {id:'todo2',title:'Work'},
    {id:'todo3',title:'Sleep'}
  ]);
  let number = 69;
  let link = "https://duckduckgo.com/";
  //re-render
  // for lap theo index, map tra? ra array moi
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello {name} - {number}
        </h1>
        <div className="todos-container">
          {todos.map(todo =>{
            return(
              <li className="todos-child" key={todo.id}>{todo.title}</li>
            )
          })}
        </div>
        <input type="text" value={address} onChange={(event) =>handleOnChangeInput(event)}/>
        <button type="submit" onClick={(event)=>handleOnClick(event)}>Click me</button>
      </header>
    </div>
  );
};
export default App;
