import {
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { makeStyles } from "@material-ui/core/styles";

import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, selectErrorMessage } from "redux/user/userSelector";
import { googleSignInStart, emailSignInStart } from "redux/user/userActions";
import Layout from "components/layout/Layout";
import Link from "components/Link";
import existUser from "hoc/exsitUser.hoc";

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
    margin: "0 auto",
    height: "630px",
    position: "absolute",
    top: "52%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    backgroundColor: "rgba(0,0,0, 0.7)",
    padding: "40px 60px",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "600px",
      overflowY: "auto",
      padding: "70px 40px",
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
    fontSize: "18px",
    "&:hover": {
      borderBottom: "1px solid #fff",
    },
  },
  google: {
    cursor: "pointer",
    fontSize: "16px",
    color: "#fff",
    borderBottom: "1px solid transparent",
    "&:hover": {
      borderColor: "#fff",
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

  const [sending, setSending] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  const isCurrentUser = useSelector(selectCurrentUser);
  const errorMessage = useSelector(selectErrorMessage);

  //   form function

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
      setSending(true);
      dispatch(emailSignInStart(form));
    }
  };

  if (isCurrentUser) {
    router.push("/profiles");
  }

  return (
    <Layout
      title="Login | S-A-flix | Netflix Clone"
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
            <Grid item style={{ margin: "20px 0" }}>
              <span
                className="error-message"
                style={{
                  color: "#e50914",
                  fontSize: "16px",
                  lineHeight: "1.2",
                  marginBottom: "5px",
                }}
              >
                {errorMessage}
              </span>
              <Button
                style={{ margin: "10px 0 0" }}
                className={classes.btn}
                onClick={handleSubmit}
              >
                {errorMessage ? (
                  <>Sign In</>
                ) : sending ? (
                  <CircularProgress color="secondary" />
                ) : (
                  <>Sign In</>
                )}
              </Button>
            </Grid>
            <Grid item container alignItems="center" spacing={1}>
              <Grid item>
                <AccountBoxIcon color="secondary" />
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  className={classes.google}
                  onClick={() => dispatch(googleSignInStart())}
                >
                  Sign In With Google
                </Typography>
              </Grid>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item>
                <Typography
                  variant="body2"
                  style={{ color: "rgba(140,140,140)", fontSize: "18px" }}
                >
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

export default existUser(Login);
