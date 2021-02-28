import React from "react";
import DetailScreen from './screens/DetailScreen/DetailScreen'
import GlobalState from "./global/GlobalState";
import HomeScreen from './screens/HomeScreen/HomeScreen'
import Router from './routers/Router'

function App() {
  return (
    <GlobalState>
        <Router />
    </GlobalState>
  );
}

export default App;
