import React from "react";
import DetailScreen from './screens/DetailScreen/DetailScreen'
import GlobalState from "./global/GlobalState";
import HomeScreen from './screens/HomeScreen/HomeScreen'

function App() {
  return (
    <GlobalState>
        <HomeScreen />
    </GlobalState>
  );
}

export default App;
