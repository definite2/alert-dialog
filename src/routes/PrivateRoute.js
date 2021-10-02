import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

export function PrivateRoutes() {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Redirect from="/auth" to="/dashboard" />
      <Redirect exact from="/" to="/dashboard" />
      <Redirect to="dashboard" />
    </Switch>
  );
}
