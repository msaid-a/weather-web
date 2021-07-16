import React from 'react';
import logo from './logo.svg';
import './App.css';
import './static/styles/tailwind.css';
import {ROUTE_PATH} from './Route/index'
import {AsyncPage} from './Component'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const {HOME, ALBUM, PHOTOS, USERS} = ROUTE_PATH


const ROUTES = [
  { path: HOME, exact: true, page: 'Main' },
  { path: ALBUM, exact: true, page: 'Album' },
  { path: PHOTOS, exact: true, page: 'Photos' },
  { path: USERS, exact: true, page: 'Users' }


]

function App() {
  return (
    <Router>
        <Switch>
          {ROUTES.map((route, i) => (
            <Route 
              key={i}
              path={route.path}
              exact={route.exact}
              render={() => <AsyncPage page={route.page} /> }
            />
          ) )}
          <Route component={() => <p>Not Found</p>} />
        </Switch>
    </Router>
  );
}

export default App;

