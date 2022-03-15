import logo from "./logo.svg";
import "./App.scss";
import Navigation from "./views/Navigation";
import {useState} from "react";
const App = () => {
  const handleOnClick =() =>{
    setName(address)
  }
  const handleOnChangeInput =(event) =>{
    setAddress(event.target.value)
  }
  //name : phan tu, setName: bien de su dung khi xu ly thay doi
  let [name,setName]=useState("trong"); // [a1,b1, ...c1]
  const [address,setAddress]=useState("");
  let number = 69;
  let obj = { name: "Trong", id: "123" };
  let link = "https://duckduckgo.com/";
  //re-render
  return (
    <div className="App">
      <Navigation />
      {/* {console.log("Obj:", obj)} */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello {name} - {number}
          <br />
          <a href={link} target="_blank" rel="noreferrer" >
            Use duckduckgo
          </a>
        </h1>
        {/* <p>{JSON.stringify(obj)}</p> */}
        <input type="text" value={address} onChange={(event) =>handleOnChangeInput(event)}/>
        <button type="submit" onClick={(event)=>handleOnClick(event)}>Click me</button>
      </header>
    </div>
  );
};
export default App;
