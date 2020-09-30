import { Typography, Container, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import SystemUpdateIcon from "@material-ui/icons/SystemUpdate";

import Layout from "components/layout/Layout";
import Link from "components/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    "& h2, h3, p": {
      color: "#221f1f",
    },
    "& h2": {
      fontWeight: "bold",
      fontSize: "2rem",
    },
    "& h3": {
      fontWeight: "bold",
      fontSize: "1.5rem",
    },
    "& p": {
      fontSize: "18px",
    },
    backgroundColor: "#fff",
    marginTop: "90px",
    padding: "40px 0 70px",
    [theme.breakpoints.down("md")]: {
      marginTop: "75px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "65px",
    },
  },
  link__text: {
    color: `${theme.palette.common.red} !important`,
    borderBottom: `1px solid #fff`,
    display: "inline",
    "&:hover": {
      borderColor: theme.palette.common.red,
    },
  },
  quote: {
    borderLeft: "4px solid #d5d4d1",
    padding: "0 12px",
    "& p": {
      fontSize: "16px",
    },
  },
  suggest__container: {
    marginTop: "50px",
    "& p": {
      marginBottom: "10px",
    },
    "& a": {
      color: "#221f1f !important",
      borderBottom: `1px solid #fff`,
      "&:hover": {
        color: `${theme.palette.common.red} !important`,
        borderColor: theme.palette.common.red,
      },
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  btn: {
    background: "#fff",
    margin: "0 10px",
    borderRadius: 0,
    border: "1px solid #8b8a88",
    padding: "16px !important",
    "&.MuiButton-root .MuiButton-label": {
      borderColor: "#8b8a88",
      color: "#4c4948 !important",
      fontSize: "16px",
      fontWeight: 700,
    },
    "&:hover": {
      "&.MuiButton-root:hover": {
        backgroundColor: `#f5f5f1 !important`,
      },
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: "10px 0",
    },
  },
}));

const ContactUs = () => {
  const classes = useStyles();

  return (
    <Layout
      title="Contact Us - Help Center | S-A-FLIX"
      description="This is a Netflix Clone Application."
    >
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Link href="/help">
            <Typography
              className={classes.link__text}
              style={{ fontSize: "16px" }}
            >
              &#8592; Back to Help Home
            </Typography>
          </Link>
          <Grid container style={{ marginTop: "60px" }} justify="space-between">
            <Grid item container direction="column" spacing={10} md={8}>
              <Grid
                item
                container
                direction="column"
                spacing={4}
                style={{
                  borderBottom: "1px solid #d5d4d1",
                  marginBottom: "20px",
                }}
              >
                <Grid item>
                  <Typography variant="h2">Contact Customer Service</Typography>
                </Grid>
                <Grid item container direction="column" spacing={3}>
                  <Grid item>
                    <Typography variant="h3">
                      Call us from the Netflix app
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      Contacting Netflix is now easier than ever when you
                      contact us from the Netflix app on your Android or iOS
                      phone or tablet! Calling through the app is free - all you
                      need is an internet or cellular connection.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      <span style={{ fontWeight: "bold" }}>
                        Download the Netflix app:
                      </span>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <GetAppIcon
                      color="primary"
                      fontSize="large"
                      style={{ cursor: "pointer" }}
                    />
                    <SystemUpdateIcon
                      color="primary"
                      fontSize="large"
                      style={{ cursor: "pointer" }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      Questions?{" "}
                      <Link href="#" className={classes.link__text}>
                        Learn how to contact us from the Netflix app!
                      </Link>{" "}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                container
                direction="column"
                spacing={4}
                style={{
                  borderBottom: "1px solid #d5d4d1",
                  marginBottom: "20px",
                }}
              >
                <Grid item>
                  <Typography variant="h3">Call us from any phone</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    You will need a landline or cellular phone service.
                  </Typography>
                </Grid>
                <Grid item>
                  <Link href="#">
                    <Button className={classes.btn}>CALL US</Button>
                  </Link>
                </Grid>
              </Grid>
              <Grid
                item
                container
                direction="column"
                spacing={4}
                style={{
                  borderBottom: "1px solid #d5d4d1",
                  marginBottom: "20px",
                }}
              >
                <Grid item>
                  <Typography variant="h3">Live Chat</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3">Call us from any phone</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    You will need a landline or cellular phone service.
                  </Typography>
                </Grid>
                <Grid item>
                  <Link href="#">
                    <Button className={classes.btn}>START LIVE CHAT</Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              spacing={4}
              className={classes.suggest__container}
              md={4}
            >
              <Grid item>
                <Typography variant="h3">Popular Questions</Typography>
              </Grid>
              <Grid item style={{ marginLeft: "24px" }}>
                <Typography>
                  <Link href="#">
                    <span style={{ display: "list-item" }}>
                      How do I reset my password?
                    </span>
                  </Link>
                </Typography>
                <Typography>
                  <Link href="#">
                    <span style={{ display: "list-item" }}>
                      How can I request a TV show or movie?
                    </span>
                  </Link>
                </Typography>
                <Typography>
                  <Link href="#">
                    <span style={{ display: "list-item" }}>
                      How do I cancel my account?
                    </span>
                  </Link>
                </Typography>
                <Typography>
                  <Link href="#">
                    <span style={{ display: "list-item" }}>
                      Why isn't Netflix Working?
                    </span>
                  </Link>
                </Typography>
                <Typography>
                  <Link href="/help/faq">
                    <span style={{ display: "list-item" }}>
                      What is Netflix?
                    </span>
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Layout>
  );
};

export default ContactUs;
