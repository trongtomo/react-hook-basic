import logo from "./logo.svg";
import "./App.scss";

const App = () => {
  let name = "trong";
  let number = 69;
  let obj = { name: "Trong", id: "123" };
  let link = "https://duckduckgo.com/";
  return (
    <div className="App">
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
      </header>
    </div>
  );
};
export default App;
