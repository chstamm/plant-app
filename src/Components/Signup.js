import React from 'react';
import { Container, TextField, } from "@material-ui/core"

const Signup = () => {
    return (
        <Container>
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
          //defaultValue="Hello World"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          type="password"
          //defaultValue="Hello World"
          variant="outlined"
        />
           
        </Container>
    )
}

export default Signup