import React from "react";
import Player from "./Player";
import './App.css';
import '../public/service-worker'

function App() {
  return (
    <div className="App">
      <div>
        <p>آهنگ های شاد عروسی</p>
      </div>
      <Player />
    </div>
  );
}

export default App;