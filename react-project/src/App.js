import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Academic from "./components/Academic";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
    </Router>
  );
}

export default App;
