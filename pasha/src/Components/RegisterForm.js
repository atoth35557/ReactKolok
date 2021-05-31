import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
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
  selectForm: {
    width: "50%",
    minWidth: 120,
  },
}));

const RegisterForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const register = () => {
    history.push("/home");
  };
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
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
          <Grid spacing={1} className={classes.formControll}>
            <FormControl className={classes.selectForm} variant="outlined">
              <InputLabel id="demo-simple-select-outlined-label">
                Sound
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                onChange={handleChange}
                label="Sound"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.selectForm} variant="outlined">
              <InputLabel id="demo-simple-select-outlined-label">
                Image
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                onChange={handleChange}
                label="Image"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
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
