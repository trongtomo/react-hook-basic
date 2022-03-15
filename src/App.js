import logo from "./logo.svg";
import "./App.scss";
import Navigation from "./views/Navigation";
import {useState,useEffect} from "react";
import Todo from "./views/Todo";
const App = () => {
  const deleteDataTodo =(id)=>{
    let currentTodos= todos
    currentTodos=currentTodos.filter(item=>item.id!==id)
    setTodos(currentTodos)
  }
  const handleOnClick =() =>{
    if(!address) {
      alert("empty output")
      return;
    }

    //hook not merge state
    //... spread synstax
    let ids=Math.floor(Math.random() * 1000);
    let newTodo={id:ids,title:address, type:"Work"}
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
    {id:'todo4',title:'Eat',type:'Activities'}
  ]);
  //giao dien re render se goi use effect
  useEffect(()=>{
    //giao dien re render se goi use effect
    console.log("Use effect")
  });
  let number = 69;
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
        deleteDataTodo={deleteDataTodo}
        />
         <Todo
        todos={todos.filter(item=>item.type==="Work")}
        title={`Work Type`}
        deleteDataTodo={deleteDataTodo}
        />
        <Todo
        todos={todos.filter(item=>item.type==="Activities")}
        title={`Activities Type`}
        deleteDataTodo={deleteDataTodo}
        />
        <input type="text" value={address} onChange={(event) =>handleOnChangeInput(event)}/>
        <button type="submit" onClick={(event)=>handleOnClick(event)}>Click me</button>
      </header>
    </div>
  );
};
export default App;
