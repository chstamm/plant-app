import React, {useContext} from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  TextField,
  DialogContent,
  DialogActions,
  makeStyles,
} from "@material-ui/core";
import {AuthContext} from "../contexts/AuthContext"
import { Formik } from "formik";
import * as Yup from "yup";



const SignupDialog = (props) => {

  const useStyles = makeStyles({
    root: {
      Width: 500,
    }
  });
  const authContext = useContext(AuthContext)
  const classes = useStyles()

  const { open, onClose } = props;
  const handleClose = () => {
    onClose(false);
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
            name: "",
            email: "",
            password: "",
            submit: null,
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, {setErrors, setStatus, setSubmitting,}) => {
            try {
              authContext.login()
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
                  placeholder="John Smith"
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
                  placeholder="test@email.com"
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
                  placeholder="********"
                  fullWidth
                />
                {errors.password && touched.password && errors.password}
              </DialogContent>
              <DialogActions>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={Boolean(errors.name || errors.email || errors.password)}
                >
                  Save
                </Button>
                <Button variant="contained" onClick={handleClose}>Cancel</Button>
              </DialogActions>
            </form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};

export default SignupDialog;
