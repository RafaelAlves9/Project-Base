import { Fragment } from "react";
import RoutesApp from "./routes/RoutesApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "@shared/Loading/Loading";

const App = () => {
  
  return (
    <Fragment>
      <Loading />
      <ToastContainer />
      <RoutesApp />
    </Fragment>
  );
};

export default App;
