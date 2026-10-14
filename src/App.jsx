import { Outlet } from "react-router-dom";
import GeneralContextProvider from "./context/GeneralContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <>
      <GeneralContextProvider>
        <Outlet />
      </GeneralContextProvider>
    </>
  );
}

export default App;
