import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AlbumList from "./componets/Album/AlbumList";
import albumsData from "./songs.json";
import HomePage from "./componets/HomePage/HomePage";
import AlbumPlayingList from "./componets/AlbumPlayingList/AlbumPlayingList";
import BottomAppBar from "./componets/AppBar/AppBar";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div>
      <BottomAppBar />
      <Router>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/HomePage" component={HomePage} />
          <Route path="/album" render={() => <AlbumList albums={albumsData} />} />
          <Route path="/album/:id" component={AlbumPlayingList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
