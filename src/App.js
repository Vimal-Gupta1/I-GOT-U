import "./App.css";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
function App() {
  return (
    <>
      <Router>
        <NavBar />
      </Router>
      <Home />
    </>
  );
}

export default App;
