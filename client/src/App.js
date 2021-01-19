import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/recommended">
          <h1>Recommended</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
