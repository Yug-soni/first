import React from "react";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Shop from "./Components/Shop";
import HomePage from "./Components/HomePage";
import ItemDetail from "./Components/ItemDetail";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/shop" exact component={Shop}></Route>
          <Route path="/shop/:id" component={ItemDetail}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
