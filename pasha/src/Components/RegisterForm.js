import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    height: "100%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 200,
  },
  formControll: {
    marginTop: 10,
  },
  formInput: {
    width: "100%",
  },
  registerButton: {
    marginTop: 15,
    width: "100%",
  },
}));

const RegisterForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const register = () => {
    history.push("/home");
  };
  return (
    <Grid container className={classes.root}>
      <Grid item xl={3} xs={3}>
        <Grid className={classes.formControll}>
          <Typography variant="h2">Register</Typography>
        </Grid>
        <Grid className={classes.formControll}>
          <TextField
            id="outlined-error-helper-text"
            label="Login"
            variant="outlined"
            className={classes.formInput}
          />
        </Grid>
        <Grid className={classes.formControll}>
          <TextField
            id="outlined-error-helper-text"
            label="Password"
            placeholder="Password"
            variant="outlined"
            className={classes.formInput}
          />
          <Button
            onClick={register}
            variant="contained"
            color="primary"
            className={classes.registerButton}
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RegisterForm;
