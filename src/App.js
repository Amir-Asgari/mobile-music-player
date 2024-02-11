import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AlbumList from "./componets/Album/AlbumList";
import albumsData from "./songs.json";
import HomePage from "./componets/HomePage/HomePage";
import AlbumPlayingList from "./componets/AlbumPlayingList/AlbumPlayingList";
import BottomAppBar from "./componets/AppBar/AppBar";

function App() {
  return (
    <div>
      <Router>
      <BottomAppBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/HomePage" component={HomePage} />
          <Route
            exact
            path="/album"
            component={AlbumList}
            // render={(props) => <AlbumList {...props} albums={albumsData} />}
          />
          <Route
            exact
            path="/album/:id"
            component={AlbumPlayingList}
            // render={(props) => (
            //   <AlbumPlayingList {...props} albums={albumsData} />
            // )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
