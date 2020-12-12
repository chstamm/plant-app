import React, { useState, useContext } from "react";
import { AppBar, Toolbar, Button, makeStyles } from "@material-ui/core";
import Login from "../Login/Login";
import { AuthContext } from "../../contexts/AuthContext";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  // set to true if you want dialog to open first
  const authContext = useContext(AuthContext);

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
    links: {
      textDecoration: "none",
      color: "white",
    },
  }));

  const classes = useStyles();

  const handleAuth = () => {
    if (authContext.isAuth) {
      authContext.logout();
      setLoginOpen(false);
      return;
    }
    if (!authContext.isAuth) {
      if (!loginOpen) {
        setLoginOpen(true);
        return;
      }
      setLoginOpen(false);
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className="navBackground">
        <Toolbar>
          {authContext.isAuth ? (
            <Button color="inherit" onClick={handleAuth}>
              {" "}
              Logout{" "}
            </Button>
          ) : (
            <Button color="inherit" onClick={handleAuth}>
              {" "}
              Login{" "}
            </Button>
          )}
          <Button>
            <NavLink className={classes.links} to="/">
              Home
            </NavLink>
          </Button>
          <Button>
            <NavLink className={classes.links} to="/plants">
              Plants
            </NavLink>
          </Button>
          <Button>
            <NavLink className={classes.links} to="/favorites">
              Favorites
            </NavLink>
          </Button>
        </Toolbar>
        <Login open={loginOpen} onClose={handleAuth} />
      </AppBar>
    </div>
  );
};

export default Navbar;
