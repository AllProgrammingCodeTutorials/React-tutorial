import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/Contact";
function App() {
    return (
        <Router>
            <Navbar/>
          <div>
            <Switch>
            <Route path="/">
                <Home />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>
        </Router>
      );
}

export default App;