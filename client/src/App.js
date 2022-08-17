import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Thanks from "./components/Thanks";
import Detail from "./components/Detail";
import VideoGameCreate from "./components/VideoGameCreate";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <div className="App">
        <Switch>
          <Route exact path={"/"} component={LandingPage} />
          <Route path={"/home"} component={Home} />
          <Route exact path={"/videogame"} component={VideoGameCreate} />
          <Route exact path={"/videogame/:idVideogame"} component={Detail} />
          <Route path={"/thanks"} component={Thanks} />
          <Route path={"*"} component={NotFound} />
        </Switch>
      </div>
    </>
  );
}

export default App;
