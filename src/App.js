import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header></Header>
        <div className="flex">
          <SideBar></SideBar>
          <Body></Body>
        </div>
      </div>
    </Provider>
  );
}

export default App;
