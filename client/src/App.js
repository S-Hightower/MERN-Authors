import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Main from './views/Main';
import Create from './views/Create';

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

      </Switch>
    </div>
  );
}

export default App;
