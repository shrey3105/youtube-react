import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Body from "./components/Body";

function App() {
  return (
    <div>
      <Header></Header>
      <div>
        <SideBar></SideBar>
        <Body></Body>
      </div>
    </div>
  );
}

export default App;
