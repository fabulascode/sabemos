import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import LocationPage from "./LocationPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/:locationId"
            children={({ match }) => (
              <LocationPage id={match!.params.locationId} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
