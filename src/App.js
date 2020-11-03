import React from "react";
import Movies from "./component/movie";
import Customer from "./component/comman/customer";
import Rental from "./component/comman/rental";
import NotFound from "./component/comman/notFound";
import MoviesDetails from "./component/movieDetails";
//import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./component/comman/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Switch>
          <Route path="/customer" component={Customer} />
          <Route path="/rental" component={Rental} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/movieDetails/:id" component={MoviesDetails} />
          <Route path="/" component={Movies} />
        </Switch>
    </div>
  );
}

export default App;
