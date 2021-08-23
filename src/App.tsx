import React, {useEffect, useState} from "react";
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

  const [location, setLocation] = useState<any>({})

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success => {
      setLocation({latitude : success.coords.latitude, longtitude: success.coords.longitude})
    })
  }, [])

  return (
    <Router>
        <Layout>
          <Switch>
            {ROUTES.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                exact={route.exact}
                render={() => <AsyncPage page={route.page} location={route.page === "Main" ? location : ''} />}
              />
            ))}
            <Route component={() => <p>Not Found</p>} />
          </Switch>
        </Layout>
    </Router>
  );
}

export default App;
