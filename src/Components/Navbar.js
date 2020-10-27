import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";


const Navbar = () => {
  return (
    
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>

  );
};

export default Navbar;
