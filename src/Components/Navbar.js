import React, {useState} from "react";
import {
  AppBar,
  Toolbar,
  Button,
  makeStyles,
} from "@material-ui/core";
import SignupDialog from './SignupDialog';




const Navbar = () => {
    const [signupOpen, setSignupOpen] = useState(false)

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

  const handleDialogToggle = () => {
      setSignupOpen(!signupOpen);
      console.log("it works!")
  }

  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
        
         <Button color='inherit' onClick={handleDialogToggle}>
            Sign Up!
         </Button>
    

        </Toolbar>
        <SignupDialog open={signupOpen} onClose={handleDialogToggle}/>
      </AppBar>
    </div>
  );
};

export default Navbar;
