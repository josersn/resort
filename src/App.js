import React from 'react';
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import SingleRoom from "./pages/SingleRoom"
import ErrorPage from "./pages/ErrorPage"

import Navbar from "./components/Navbar";

function App() {
  return (
  <>
  <Navbar />
   <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/rooms" component={Rooms}/>
    <Route path="/room/:slug" component={SingleRoom}/>
    <Route component={ErrorPage}/>
   </Switch>
  </>
  )
}

export default App;
