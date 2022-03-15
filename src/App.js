import logo from "./logo.svg";
import "./App.scss";
import Navigation from "./views/Navigation";
const App = () => {
  const handleOnClick =() =>{
    alert("Clicked!")
  }
  let name = "trong";
  let number = 69;
  let obj = { name: "Trong", id: "123" };
  let link = "https://duckduckgo.com/";
  return (
    <div className="App">
      <Navigation />
      {/* {console.log("Obj:", obj)} */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello {name} - {number}
          <br />
          <a href={link} target="_blank">
            Use duckduckgo
          </a>
        </h1>
        <p>{JSON.stringify(obj)}</p>
        <button type="submit" onClick={(event)=>handleOnClick(event)}>Click me</button>
      </header>
    </div>
  );
};
export default App;
