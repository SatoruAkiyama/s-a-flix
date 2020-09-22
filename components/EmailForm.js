import { useState } from "react";

import { TextField, Grid, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: 0,
      height: "60px",
    },
    "& .MuiInputLabel-filled": {
      color: "#8c8c8c",
    },
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& .MuiFormHelperText-contained": {
      marginLeft: 0,
      position: "absolute",
      bottom: "-20px",
    },
  },
  btn: {
    height: "60px",
    borderRadius: 0,
    width: "100% !important",
    fontSize: "1.25rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: "30px",
      fontSize: "1rem",
    },
  },
}));

export default function FormPropsTextFields({ id }) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [helperText, setHelper] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    let valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
      e.target.value
    );
    if (e.target.value === "") {
      setHelper("Email is required!");
    } else if (!valid) {
      setHelper("Please enter a valid email address");
    } else {
      setHelper("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
    if (email === "") {
      setHelper("Email is required!");
    } else if (!valid) {
      setHelper("Please enter a valid email address");
    } else {
      console.log(email);
      setHelper("");
      setEmail("");
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Typography align="center" variant="h3" style={{ marginBottom: "1em" }}>
        Ready to watch? Enter your email to create or restart your membership.
      </Typography>
      <Grid container justify="center">
        <Grid item xs={12} sm={8}>
          <TextField
            id={`id_email_${id}`}
            label="Email adress"
            type="email"
            variant="filled"
            value={email}
            onChange={handleChange}
            error={helperText !== ""}
            helperText={helperText}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            // disabled={helperText !== "" || email === ""}
            className={classes.btn}
            type="submit"
          >
            GET STARTED
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
