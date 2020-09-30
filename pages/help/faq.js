import { Typography, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import Layout from "components/layout/Layout";
import Link from "components/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    "& h2, h3, p": {
      color: "#000",
    },
    "& h2": {
      fontWeight: "bold",
      fontSize: "1.75rem",
    },
    "& h3": {
      fontWeight: "bold",
      fontSize: "1.5rem",
    },
    "& p": {
      fontSize: "18px",
      color: "#221f1f",
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
}));

const HelpHome = () => {
  const classes = useStyles();

  return (
    <Layout
      title="FAQ - Help Center | S-A-FLIX"
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
                  <Typography variant="h2">What is Netflix?</Typography>
                </Grid>
                <Grid item container direction="column" spacing={3}>
                  <Grid item>
                    <Typography variant="body2">
                      Netflix is a subscription-based{" "}
                      <Link href="/help/faq" className={classes.link__text}>
                        streaming service
                      </Link>{" "}
                      that allows our members to watch TV shows and movies
                      without commercials on an internet-connected device.{" "}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      You can also{" "}
                      <Link href="/help/faq" className={classes.link__text}>
                        download TV shows and movies
                      </Link>{" "}
                      to your iOS, Android, or Windows 10 device and watch
                      without an internet connection.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      If you're already a member and would like to learn more
                      about using Netflix, visit{" "}
                      <Link href="/help/faq" className={classes.link__text}>
                        Getting started with Netflix
                      </Link>
                      .
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
                  <Typography variant="h2">TV Shows & Movies</Typography>
                </Grid>
                <Grid item container direction="column" spacing={3}>
                  <Grid item>
                    <Typography variant="body2">
                      Netflix content varies by region and may change over time.
                      You can watch from a wide variety of{" "}
                      <Link href="/help/faq" className={classes.link__text}>
                        award-winning Netflix Originals, TV shows, movies,
                        documentaries, and more
                      </Link>
                      .
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      The more you watch, the better Netflix gets at{" "}
                      <Link href="/help/faq" className={classes.link__text}>
                        recommending
                      </Link>{" "}
                      TV shows and movies we think you’ll enjoy.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      Before you sign up, you can{" "}
                      <Link href="/help/faq" className={classes.link__text}>
                        watch some of the content
                      </Link>{" "}
                      Netflix has to offer!
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
                  <Typography variant="h2">Supported Devices</Typography>
                </Grid>
                <Grid item container direction="column" spacing={3}>
                  <Grid item>
                    <Typography variant="body2">
                      You can watch Netflix through any{" "}
                      <Link href="/help/faq" className={classes.link__text}>
                        {" "}
                        internet-connected{" "}
                      </Link>
                      device that offers the Netflix app, including smart TVs,
                      game consoles, streaming media players, set-top boxes,
                      smartphones, and tablets. You can also watch Netflix on
                      your computer using an internet browser. You can review
                      the{" "}
                      <Link href="/help/faq" className={classes.link__text}>
                        {" "}
                        system requirements{" "}
                      </Link>{" "}
                      for web browser compatibility, and check our{" "}
                      <Link href="/help/faq" className={classes.link__text}>
                        {" "}
                        internet speed recommendations{" "}
                      </Link>{" "}
                      to achieve the best performance.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      Need help getting set up? Search our{" "}
                      <Link href="/help/faq" className={classes.link__text}>
                        {" "}
                        Help Center{" "}
                      </Link>{" "}
                      for the manufacturer of the device you're using.
                    </Typography>
                  </Grid>
                  <Grid item className={classes.quote}>
                    <Typography variant="body2">
                      <span style={{ fontWeight: 700 }}>NOTE:</span> The Netflix
                      app may come pre-loaded on certain devices, or you may
                      need to download the Netflix app onto your device. Netflix
                      app functionality may differ between devices.
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
                  <Typography variant="h2">Plans and Pricing</Typography>
                </Grid>
                <Grid item container direction="column" spacing={3}>
                  <Grid item>
                    <Typography variant="body2">
                      Each Netflix plan determines the number of devices you can
                      watch Netflix on at the same time and if you prefer to
                      view in Standard Definition (SD), High Definition (HD), or
                      Ultra High Definition (UHD).
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      <Link href="/help/faq" className={classes.link__text}>
                        Compare our plans and pricing{" "}
                      </Link>{" "}
                      to decide which one is right for you. You can easily{" "}
                      <Link href="/help/faq" className={classes.link__text}>
                        change your plan{" "}
                      </Link>{" "}
                      or{" "}
                      <Link href="/help/faq" className={classes.link__text}>
                        {" "}
                        cancel{" "}
                      </Link>{" "}
                      online at any time.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container direction="column" spacing={4}>
                <Grid item>
                  <Typography variant="h2">Get Started!</Typography>
                </Grid>
                <Grid item container direction="column" spacing={3}>
                  <Grid item>
                    <Typography variant="body2">
                      Follow these easy steps to start watching Netflix today:
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ lineHeight: 1.7 }}>
                      1. Visit{" "}
                      <Link href="/help/faq" className={classes.link__text}>
                        {" "}
                        netflix.com/signup
                      </Link>
                      .
                      <br />
                      2.{" "}
                      <Link href="/help/faq" className={classes.link__text}>
                        {" "}
                        Choose the plan{" "}
                      </Link>{" "}
                      that’s right for you.
                      <br />
                      3. Create an account by entering your email address and
                      creating a password. <br />
                      4. Enter a{" "}
                      <Link href="/help/faq" className={classes.link__text}>
                        {" "}
                        payment method{" "}
                      </Link>
                      . As a Netflix member, you are charged once a month on the
                      date you signed up.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      That's it. Enjoy Netflix!
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              spacing={3}
              className={classes.suggest__container}
              md={4}
            >
              <Grid item>
                <Typography variant="h3">Suggested Articles</Typography>
              </Grid>
              <Grid item>
                <Typography>
                  ・<Link href="/help/faq">Getting started with Netflix</Link>
                </Typography>
                <Typography>
                  ・<Link href="/help/faq">Billing and Payments</Link>
                </Typography>
                <Typography>
                  ・<Link href="/help/faq">Netflix Gift Cards</Link>
                </Typography>
                <Typography>
                  ・<Link href="/help/faq">I can't sign in to Netflix</Link>
                </Typography>
                <Typography>
                  ・
                  <Link href="/help/faq">How to create and edit profiles</Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Layout>
  );
};

export default HelpHome;
