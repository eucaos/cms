import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Layout } from "./features/layout";

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Layout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
