import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Fab from "@mui/material/Fab";
import SearchIcon from "@mui/icons-material/Search";
import SvgIcon from "@mui/material/SvgIcon";
import QueueMusicRoundedIcon from "@mui/icons-material/QueueMusicRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import {Outlet, Link } from "react-router-dom";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function BottomAppBar() {
  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          top: "auto",
          bottom: 0,
          bgcolor: "rgba(0, 0, 0, 0.911)",
          justifyContent: "space-between",
          alignContent: "space-between",
        }}
      >
        <nav>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <PersonOutlineRoundedIcon sx={{ fontSize: 100 }} />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />

          <IconButton color="inherit" aria-label="open drawer">
            <QueueMusicRoundedIcon sx={{ fontSize: 100 }} />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />

            <IconButton
              style={{ width: "250px", height: "150px" }}
              color="inherit"
              aria-label="add"
              // LinkComponent={HomePage}
              // to='/HomePage'
            >
              <HomeIcon sx={{ fontSize: 110 }} />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <SearchIcon sx={{ fontSize: 100 }} />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />

          <IconButton color="inherit">
            <DownloadRoundedIcon sx={{ fontSize: 100 }} />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
        </nav>
        <Outlet/>
      </AppBar>
    </React.Fragment>
  );
}
