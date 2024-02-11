import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AlbumList from "./componets/Album/AlbumList";
import albumsData from "./songs.json";
import HomePage from "./componets/HomePage/HomePage";
import AlbumPlayingList from "./componets/AlbumPlayingList/AlbumPlayingList";
import BottomAppBar from "./componets/AppBar/AppBar";
import MyMusicFy from "./componets/AppBar/AppBarComponents/myMusicFy/MyMusicFy";
import Playlists from "./componets/AppBar/AppBarComponents/playLists/Playlists";
import Search from "./componets/AppBar/AppBarComponents/search/Search";
import Downloads from "./componets/AppBar/AppBarComponents/downloads/Downloads";

function App() {
  return (
    <div>
      <Router>
      <BottomAppBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/HomePage" component={HomePage} />
          <Route exact path="/myMusicFy" component={MyMusicFy} />
          <Route exact path="/playLists" component={Playlists} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/downloads" component={Downloads} />
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
