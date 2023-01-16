import { Outlet } from "react-router-dom";
import classes from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className={classes.container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
