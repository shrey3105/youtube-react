import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchVideo from "./components/WatchVideo";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Body></Body>,
    },
    {
      path: "/watch",
      element: <WatchVideo></WatchVideo>,
    },
  ]);

  return (
    <Provider store={appStore}>
      <div>
        <Header></Header>
        <div className="flex">
          <SideBar></SideBar>
          <RouterProvider router={routes}></RouterProvider>
        </div>
      </div>
    </Provider>
  );
}

export default App;
