import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BookProvider } from "./utils/BookContext";
import Search from "./pages/Search";

function App() {
  return (
    <BookProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/recommended">
            <h1>Recommended</h1>
          </Route>
        </Switch>
      </Router>
    </BookProvider>
  );
}

export default App;
