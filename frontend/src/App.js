import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigation from "./components/Navigation";
import Offer from "./components/Offer";
import Characteristics from "./components/Characteristics";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container-fluid p-4">
        {/* <Route path="/" exact component={NotesList} /> */}
        <div className="row">
          <div className="col-3">
            <Route path="/" exact component={Offer} />
          </div>
          <div className="col-6">
            <Route path="/" exact component={Characteristics} />
          </div>
          <div className="col-3">
            {/* <Route path="/" exact component={Questions} /> */}
          </div>
        </div>
        {/* <Route path="/edit/:id" component={CreateUser} />
				<Route path="/results" component={Results} />
				<Route path="/user" component={CreateUser} /> */}
      </div>
    </Router>
  );
}

export default App;
