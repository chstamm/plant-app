import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Button,
} from "@material-ui/core";
import { NavLink } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';



const Navbar = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Button>
          <NavLink to="/signup">Sign Up</NavLink>
          </Button>
          <Button>
          <NavLink to="/">Plants</NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
