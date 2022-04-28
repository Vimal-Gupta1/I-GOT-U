import "./App.css";
import React from "react";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Blog from "./components/Pages/Blog";
import Contact from "./components/Pages/Contact";
import NavBar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Home />
        <About />
        <Blog />
        <Contact />
      </Router>
    </>
  );
}

export default App;
