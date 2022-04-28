import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Quiz } from "./components/Pages/Quiz";
import { Contact } from "./components/Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Home />
      </Router>
    </>
  );
}

export default App;
