import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  TextField,
  DialogContent,
  DialogActions,
  makeStyles,
} from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";


const SignupDialog = (props) => {

  const useStyles = makeStyles({
    root: {
      Width: 500,
    }
  });

  const classes = useStyles()

  const { open, onClose } = props;
  const handleClose = () => {
    onClose();
  };

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .required ("Must Enter a Name"),
    email: Yup.string()
      .required("Email Required")
      .email("Please Put Valid Email")
      .max(50, "Congrats on world's longest email"),
    password: Yup.string()
      .required("Password Required")
      .min(8, "Password too short")
      .max(30, "Password too long"),
  });

  return (
    <div>
      <Dialog
        className={classes.root}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="simple-dialog-title">Sign Up</DialogTitle>
        <Formik
          initialValues={{
            name: "John Smith",
            email: "test@email.com",
            password: "password1234",
            submit: null,
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            try {
              console.log(values.name, values.email, values.password);
              handleClose();
            } catch (error) {
              console.error(error);
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <DialogContent>
                <TextField
                  required
                  name="name"
                  label="Full Name"
                  variant="filled"
                  margin="normal"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                />
                {errors.name && touched.name && errors.name}
                <TextField
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  label="Email"
                  type="email"
                  name="email"
                  variant="filled"
                  margin="normal"
                  fullWidth
                />
                {errors.email && touched.email && errors.email}
                <TextField
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  label="Password"
                  type="password"
                  name="password"
                  variant="filled"
                  margin="normal"
                  fullWidth
                />
                {errors.password && touched.password && errors.password}
              </DialogContent>
              <DialogActions>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={handleClose}
                >
                  Save
                </Button>
                <Button onClick={handleClose}>Cancel</Button>
              </DialogActions>
            </form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};

export default SignupDialog;
