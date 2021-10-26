import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Academic from "./components/Academic";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Content from "./components/Content";

let lname = 25;
let marks = 40;
function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/academic" component={Academic}/>
          <Route exact path="/experience" component={Experience}/>
        </Switch>
      </div>
      <Footer />
      <Content fname= "anju" lname={lname} marks={marks} />
    </Router>
  );
}

export default App;
