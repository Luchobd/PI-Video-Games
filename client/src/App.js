import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LadingPage";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
// import Detail from "./components/Detail";
import VideoGameCreate from "./components/VideoGameCreate";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path={"/"} component={LandingPage} />
          <Route path={"/home"} component={Home} />
          {/* <Route path={"/game/:id"} component={Detail} /> */}
          <Route path={"/videogame"} component={VideoGameCreate} />
        </Switch>
      </div>
    </>
  );
}

export default App;
