import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        {/* <Route path="/:location" component={Location} /> */}
      </div>
    </Router>
  );
}

export default App;
