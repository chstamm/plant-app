import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const SignUp = () => {
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    cardCenter: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    card: {
      maxWidth: 300,
      maxHeight: 600,
    },
  });

  const classes = useStyles();

  return (
    <div>
      <Box className={classes.cardCenter}>
        <Card className={classes.card}>
          <CardHeader title="Sign Up Form" />
          <CardContent>
            <form noValidate autoComplete="off">
              <TextField id="filled-basic" label="Email" variant="filled" />
              <TextField id="filled-basic" label="Password" variant="filled" />
              <TextField
                id="filled-basic"
                label="Confirm Password"
                variant="filled"
              />
            </form>
            <Button variant="contained">Sign Up</Button>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default SignUp;
