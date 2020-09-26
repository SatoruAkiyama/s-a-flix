import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useState } from "react";
import Layout from "components/layout/Layout";
import Link from "components/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(/main.jpg) `,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `none`,
    },
    "& .MuiFilledInput-root": {
      backgroundColor: "rgb(51, 51, 51)",
      borderRadius: "4px",
      height: "60px",
      [theme.breakpoints.down("xs")]: {
        height: "50px",
      },
    },
    "& .MuiInputLabel-filled": {
      color: "rgb(140, 140, 140)",
      fontSize: "16px",
    },
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& .MuiFormHelperText-contained": {
      marginLeft: 0,
      position: "absolute",
      bottom: "-20px",
    },
    "& .MuiFilledInput-input": {
      color: "#fff",
    },
  },
  inner: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage:
      "linear-gradient(to top,rgb(0 0 0/ 50%) 0,rgb(0 0 0 / 40%) 40%,rgb(0 0 0 / 75%) 100%)",
  },
  card: {
    maxWidth: "450px",
    height: "600px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    backgroundColor: "rgba(0,0,0, 0.7)",
    padding: "60px 68px",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "600px",
      overflowY: "auto",
      padding: "100px 40px",
    },
  },
  btn: {
    width: "100%",
    height: "60px",
    fontSize: "20px",
    height: "60px",
    [theme.breakpoints.down("xs")]: {
      height: "45px",
    },
  },
  link: {
    "&:hover": {
      borderBottom: "1px solid #fff",
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = form;

  const [helperText, setHelper] = useState({
    emailHelper: "",
    passwordHelper: "",
  });
  const { emailHelper, passwordHelper } = helperText;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    // setEmail(e.target.value);

    if (name === "email") {
      let valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
      if (value === "") {
        setHelper({ ...helperText, emailHelper: "Email is required!" });
      } else if (!valid) {
        setHelper({
          ...helperText,
          emailHelper: "Please enter a valid email address",
        });
      } else {
        setHelper({ ...helperText, emailHelper: "" });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
    if (email === "") {
      setHelper({ ...helperText, emailHelper: "Email is required!" });
    } else if (!valid) {
      setHelper({
        ...helperText,
        emailHelper: "Please enter a valid email address",
      });
    } else {
      console.log(email, password);
      setHelper({
        emailHelper: "",
        passwordHelper: "",
      });
      setForm({
        email: "",
        password: "",
      });
    }
  };

  return (
    <Layout
      title="S-A-flix | Netflix Clone"
      description="This is a Netflix Clone Application."
    >
      <div className={classes.root}>
        <div className={classes.inner}>
          <Grid
            container
            className={classes.card}
            direction="column"
            spacing={3}
          >
            <Grid item>
              <Typography variant="h2">Sign In</Typography>
            </Grid>
            <Grid item>
              <TextField
                id={`email_login`}
                label="Email adress"
                type="email"
                variant="filled"
                name="email"
                value={email}
                onChange={handleChange}
                error={emailHelper !== ""}
                helperText={emailHelper}
              />
            </Grid>
            <Grid item>
              <TextField
                id={`passward_login`}
                label="Password"
                type="password"
                variant="filled"
                name="password"
                value={password}
                onChange={handleChange}
                error={passwordHelper !== ""}
                helperText={passwordHelper}
              />
            </Grid>
            <Grid item style={{ margin: "40px 0 20px" }}>
              <Button className={classes.btn} onClick={handleSubmit}>
                Sign In
              </Button>
            </Grid>
            <Grid item container justify="space-between">
              <Grid item>
                <Typography variant="body2" style={{ color: "#757575" }}>
                  New to S-A-flix?
                </Typography>
              </Grid>
              <Grid item>
                <Link href="/signup">
                  <Typography variant="body2" className={classes.link}>
                    Sign up now
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
      <div style={{ marginBottom: "100vh" }} />
    </Layout>
  );
};

export default Login;
