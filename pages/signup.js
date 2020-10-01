import {
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  emailForSignup,
  selectSignUpErrorMessage,
} from "redux/user/userSelector";
import { signUpStart } from "redux/user/userActions";
import Layout from "components/layout/Layout";
import Link from "components/Link";
import existUser from "hoc/exsitUser.hoc";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "#fff",
    "& .MuiFilledInput-root": {
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
    "& .MuiFilledInput-input": {},
  },
  mb: {
    marginBottom: "100vh",
  },
  card: {
    maxWidth: "490px",
    width: "100%",
    margin: "0 auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
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
    color: "#000",
    borderBottom: "1px solid transparent",
    "&:hover": {
      borderColor: "#000",
    },
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const emailSignup = useSelector(emailForSignup);
  const errorMessage = useSelector(selectSignUpErrorMessage);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: emailSignup,
    password: "",
  });
  const { email, password } = form;

  const [helperText, setHelper] = useState({
    emailHelper: "",
    passwordHelper: "",
  });
  const { emailHelper, passwordHelper } = helperText;

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

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
    if (name === "password") {
      password.length < 5
        ? setHelper({
            ...helperText,
            passwordHelper: "Please use at least 6 characters",
          })
        : setHelper({ ...helperText, passwordHelper: "" });
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
    } else if (password.length < 5) {
      setHelper({
        ...helperText,
        passwordHelper: "Please use at least 6 characters",
      });
    } else {
      setSending(true);
      dispatch(signUpStart(form));
      setHelper({
        emailHelper: "",
        passwordHelper: "",
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout
      title="Sign up | S-A-flix | Netflix Clone"
      description="This is a Netflix Clone Application."
    >
      <div className={classes.root}>
        <Grid container className={classes.card} direction="column" spacing={3}>
          <Grid item>
            <Typography variant="h1" color="primary">
              Sign up
            </Typography>
          </Grid>
          <Grid item container justify="space-between">
            <Grid item>
              <Typography variant="body1" style={{ color: "#757575" }}>
                Create an account with Email and Password. This is a Netflix
                Clone Application and free of charge.
              </Typography>
            </Grid>
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
            <span
              className="error-message"
              style={{
                color: "#e50914",
                fontSize: "16px",
                lineHeight: "1.2",
                marginBottom: "10px",
              }}
            >
              {errorMessage}
            </span>
            <Button className={classes.btn} onClick={handleSubmit}>
              {errorMessage ? (
                <>Sign up</>
              ) : sending ? (
                <CircularProgress color="secondary" />
              ) : (
                <>Sign up</>
              )}
            </Button>
          </Grid>
          <Grid item container justify="space-between">
            <Grid item>
              <Typography variant="body2" style={{ color: "#757575" }}>
                Already have an account?
              </Typography>
            </Grid>
            <Grid item>
              <Link href="/login">
                <Typography variant="body2" className={classes.link}>
                  Sign In now
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className={classes.mb} />
    </Layout>
  );
};

export default existUser(SignUp);
