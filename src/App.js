import logo from "./images/freecodecamp-logo.png";
import "./App.css";
import Tasklist from "./components/TaskList/Tasklist";

function App() {
  return (
    <div className="App">
      <div className="logocontainer">
        <img src={logo} className="logo" />
      </div>
      <div className="tasklst">
        <h1>Mis tareas</h1>
        <Tasklist />
      </div>
    </div>
  );
}

export default App;
