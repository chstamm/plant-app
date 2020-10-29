import React from "react";
import { Button, Dialog, TextField } from "@material-ui/core";
//import { makeStyles } from "@material-ui/core/styles";

const SignupDialog = (props) => {

  const { open, onClose } = props
  const handleClose = () => {
      onClose()
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <form noValidate autoComplete="off">
          <TextField
            required
            id="outlined-required"
            label="Full Name"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
            type="email"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Password"
            type="password"
            variant="outlined"
          />
          <Button onClick={handleClose}>Save</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </form>
      </Dialog>
    </div>
  );
};

export default SignupDialog
