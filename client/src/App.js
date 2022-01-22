import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Main from './views/Main';
import Create from './views/Create';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/api/new">
          <Create />
        </Route>

        <Route exact path="/api/authors/:id/edit">
          <Update />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
