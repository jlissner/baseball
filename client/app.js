import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Players from './players/PlayersContainer'
import store from './redux';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Players} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)