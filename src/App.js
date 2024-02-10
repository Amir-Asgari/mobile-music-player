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
      <BottomAppBar />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route  path="/HomePage" component={HomePage} />
          <Route
            
            path="/album"
            render={(props) => <AlbumList {...props} albums={albumsData} />}
          />
          <Route
            
            path="/album/:id"
            render={(props) => (
              <AlbumPlayingList {...props} selectedAlbum={albumsData} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
