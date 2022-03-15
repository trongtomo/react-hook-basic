import logo from "./logo.svg";
import "./App.scss";
import Navigation from "./views/Navigation";
import {useState} from "react";
import Todo from "./views/Todo";
const App = () => {
  const handleOnClick =() =>{
    if(!address) {
      alert("empty output")
      return;
    }

    //hook not merge state
    //... spread synstax
    let newTodo={id:'abc',title:address, type:"Work"}
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
    {id:'todo1', title:'Homework',type:'Work'},
    {id:'todo2',title:'Work',type:'Work'},
    {id:'todo3',title:'Sleep',type:'Activities'},
    {id:'todo3',title:'Eat',type:'Activities'}
  ]);
  let number = 69;
  let link = "https://duckduckgo.com/";
  //re-render
  // for lap theo index, map tra? ra array moi
  return (
    <div className="App">
      <header className="App-header">
      <Navigation />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello {name} - {number}
        </h1>
        <Todo
        // ten props = giatri
        todos={todos}
        title={"All title"}
        />
         <Todo
        todos={todos.filter(item=>item.type=="Work")}
        title={`Work Type`}
        />
        <Todo
        todos={todos.filter(item=>item.type=="Activities")}
        title={`Activities Type`}
        />
        <input type="text" value={address} onChange={(event) =>handleOnChangeInput(event)}/>
        <button type="submit" onClick={(event)=>handleOnClick(event)}>Click me</button>
      </header>
    </div>
  );
};
export default App;
