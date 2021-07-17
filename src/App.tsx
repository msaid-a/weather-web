import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./static/styles/index.scss";
import { ROUTE_PATH } from "./Route/index";
import { AsyncPage, Layout } from "./Component";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

const { HOME, Search } = ROUTE_PATH;

const ROUTES = [
  { path: HOME, exact: true, page: "Main" },
  { path: Search, exact: true, page: "Search" },
];

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          {ROUTES.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={() => <AsyncPage page={route.page} />}
            />
          ))}
          <Route component={() => <p>Not Found</p>} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
