import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Layout from '../layout/workspace';
import History from '../pages/history';
import Main from '../pages/main';

export default function () {
  return (
    <Router>
      <Layout>
        <Switch>
          <Redirect from="/" to="/main" exact></Redirect>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/history">
            <History />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
