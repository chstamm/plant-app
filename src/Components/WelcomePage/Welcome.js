import React from "react";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles" 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Welcome = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
      
        <Grid item lg={4}  md={6} xs={12}>
          <h1>Welcome To Plants</h1>
        
        </Grid>
        <Grid item lg={8} md={6} xs={12}>
          <h1>Sign Up!</h1>
          <Button></Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Welcome;
