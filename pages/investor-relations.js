import { Typography, Container, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import {
  RssFeed,
  Mic,
  PictureAsPdf,
  Description,
  EventAvailable,
  InsertChart,
  PermIdentity,
} from "@material-ui/icons";

import Layout from "components/layout/Layout";

const useStyles = makeStyles((theme) => ({
  root: {
    "& h2, h3, p": {
      color: "#221f1f",
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
    },
    backgroundColor: "#fff",
    marginTop: "85px",
    padding: "0 0 120px",
    [theme.breakpoints.down("md")]: {
      marginTop: "70px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "60px",
    },
  },
  link__text: {
    color: `#000`,
    cursor: "pointer",
    "&:hover": {
      color: `${theme.palette.common.red} !important`,
    },
  },
  profile__container: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: "url(https://i.imgur.com/1s4dtu8.png)",
    height: " 400px",
    padding: "16px",
    "& h2,  p": {
      color: "#fff",
    },
    "& p": {
      fontSize: "16px",
    },
  },
  divider: {
    background: "#e50914",
    width: "15%",
    height: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "50px",
    },
  },
  profile__container2: {
    padding: "40px 50px",
    background: "#221f1f",
    width: "85%",
    height: "400px",
    "&.MuiGrid-spacing-xs-2": {
      margin: 0,
    },
    "& h2 ,p": {
      color: "#fff",
    },
    "& .MuiTypography-body2": {
      fontSize: "16px",
      color: "#adadad",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "30px 40px",
    },
  },
  icon: {
    color: theme.palette.common.red,
    verticalAlign: "bottom",
  },
  card: {
    boxShadow: "0px 0px 6.02px 0.98px rgba(0, 0, 0, 0.17)",
    padding: "60px 34px",
    background: "#fff",
    minHeight: "480px",
  },
  releases__block: {
    background: "#eaeae6",
    marginTop: "120px",
    padding: "70px 16px",
  },
  releases__card: {
    boxShadow: "0px 0px 6.02px 0.98px rgba(0, 0, 0, 0.17)",
    padding: "40px 20px",
    background: "#fff",
    "& h3": {
      color: theme.palette.common.red,
      marginBottom: "15px",
      cursor: "pointer",
    },
  },
  quarterly__block: {
    background: "#221f1f",
    padding: "70px 0",
    "& h2, h3, p": {
      color: "#fff",
    },
    "& p": { fontSize: "16px" },
    "& p:hover": {
      color: theme.palette.common.red,
      cursor: "pointer",
    },
  },
  quickLinks__container: {
    marginTop: "120px",
  },
  quickLinks__inner1: {
    background: "#221f1f",
    borderRight: "20px solid #e50914",
    padding: "20px",
    boxShadow: "0px 0px 6.02px 0.98px rgba(0, 0, 0, 0.17)",
    "&  h3": {
      color: "#fff",
    },
    [theme.breakpoints.down("sm")]: {
      borderBottom: "10px solid #e50914",
      borderRight: "none",
    },
  },
  quickLinks__inner2: {
    background: "#fff",
    padding: "40px 20px",
    boxShadow: "0px 0px 6.02px 0.98px rgba(0, 0, 0, 0.17)",
    "& h3": {
      color: "#221f1f",
      cursor: "pointer",
      "&:hover": {
        color: theme.palette.common.red,
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: "40px",
      },
    },
    "& svg": {
      fontSize: "80px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "40px",
      },
    },
  },
  btn: {
    background: theme.palette.common.red,
    borderRadius: 0,
    padding: "16px !important",
    "&.MuiButton-root .MuiButton-label": {
      fontSize: "16px",
      fontWeight: 700,
    },
    "&.MuiButton-root": {
      border: `1px solid ${theme.palette.common.red}`,
    },
    "&:hover": {
      "&.MuiButton-root:hover": {
        backgroundColor: `transparent!important`,
        borderColor: `${theme.palette.common.red}`,
        color: `${theme.palette.common.red} !important`,
      },
      "&.MuiButton-root .MuiButton-label": {
        color: `${theme.palette.common.red} !important`,
      },
    },
  },
}));

const InvestorRelations = () => {
  const classes = useStyles();

  return (
    <Layout
      title="Investor Relations | S-A-FLIX"
      description="This is a Netflix Clone Application."
    >
      <div className={classes.root}>
        <Grid container>
          <Grid container item md={7} className={classes.profile__container}>
            <Grid
              item
              container
              direction="column"
              justify="center"
              spacing={4}
              style={{ maxWidth: "600px", margin: "0 auto" }}
            >
              <Grid item>
                <Typography variant="h2">Company Profile</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  Netflix is the world’s leading streaming entertainment service
                  with 193 million paid memberships in over 190 countries
                  enjoying TV series, documentaries and feature films across a
                  wide variety of genres and languages. Members can watch as
                  much as they want, anytime, anywhere, on any
                  internet-connected screen. Members can play, pause and resume
                  watching, all without commercials or commitments.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item md={5} alignItems="center">
            <Grid item className={classes.divider} />
            <Grid
              item
              container
              className={classes.profile__container2}
              direction="column"
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  NASDAQ: NFLX
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h2">$500.03</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  +6.55 ( 1.33% )
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  VOLUME:4,631,950
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  Pricing delayed by 20 minutes
                  <br />
                  Last Updated 09/30/20 4:00 PM
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Container maxWidth="lg" style={{ marginTop: "120px" }}>
          <Grid container spacing={2} justify="space-around">
            <Grid item container sm={6} direction="column" spacing={6}>
              <Grid
                item
                container
                justify="space-between"
                style={{ marginTop: "30px" }}
                alignItems="center"
              >
                <Grid item>
                  <Typography variant="h2">Investor Events</Typography>
                </Grid>
                <Grid item>
                  <RssFeed className={classes.icon} />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid
                  item
                  container
                  direction="column"
                  spacing={4}
                  className={classes.card}
                >
                  <Grid item>
                    <Typography variant="h3" className={classes.link__text}>
                      Netflix Third Quarter 2020 Earnings Interview
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{ fontWeight: "bold", marginBottom: "10px" }}
                    >
                      Upcoming Event | Oct 20, 202003:00 PM PST
                    </Typography>

                    <Typography variant="body2" className={classes.link__text}>
                      <EventAvailable className={classes.icon} /> Add to
                      Calendar
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h3" className={classes.link__text}>
                      Netflix Second Quarter 2020 Earnings Interview
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{ fontWeight: "bold", marginBottom: "10px" }}
                    >
                      Jul 16, 202003:00 PM PST
                    </Typography>

                    <Typography variant="body2" className={classes.link__text}>
                      <Mic className={classes.icon} /> Video Interview
                    </Typography>
                    <Typography variant="body2" className={classes.link__text}>
                      <PictureAsPdf className={classes.icon} /> Letter to
                      Shareholders
                    </Typography>
                    <Typography variant="body2" className={classes.link__text}>
                      <Description className={classes.icon} /> Financial
                      Statements
                    </Typography>
                    <Typography variant="body2" className={classes.link__text}>
                      <PictureAsPdf className={classes.icon} /> Transcript
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      style={{ color: "#e50914", cursor: "pointer" }}
                    >
                      All Events
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item container sm={6} direction="column" spacing={6}>
              <Grid
                item
                container
                justify="space-between"
                style={{ marginTop: "30px" }}
                alignItems="center"
              >
                <Grid item>
                  <Typography variant="h2">Investor Kit</Typography>
                </Grid>
              </Grid>
              <Grid item container>
                <Grid
                  item
                  container
                  direction="column"
                  spacing={4}
                  className={classes.card}
                >
                  <Grid item>
                    <Typography variant="h3" className={classes.link__text}>
                      Long Term View
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h3" className={classes.link__text}>
                      Top Investor Questions
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h3" className={classes.link__text}>
                      Content Accounting Overview
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h3" className={classes.link__text}>
                      Netflix Culture
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h3" className={classes.link__text}>
                      Netflix Approach to Corporate Governance
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h3" className={classes.link__text}>
                      Netflix ESG Report
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <div className={classes.releases__block}>
          <Typography
            align="center"
            variant="h2"
            style={{ marginBottom: "40px" }}
          >
            Financial Releases and Updates
          </Typography>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item sm={4}>
                <div className={classes.releases__card}>
                  <Typography variant="h3">
                    Netflix to Announce Third-Quarter 2020 Financial Results
                  </Typography>
                  <Typography variant="body1">Sep 15, 2020</Typography>
                </div>
              </Grid>
              <Grid item sm={4}>
                <div className={classes.releases__card}>
                  <Typography variant="h3">
                    Netflix Releases Second-Quarter 2020 Financial Results
                  </Typography>
                  <Typography variant="body1">Jul 16, 2020</Typography>
                </div>
              </Grid>
              <Grid item sm={4}>
                <div className={classes.releases__card}>
                  <Typography variant="h3">
                    Netflix to Announce Second-Quarter 2020 Financial Results
                  </Typography>
                  <Typography variant="body1">Jun 15, 2020</Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <Button className={classes.btn}>ALL RELEASES</Button>
          </div>
        </div>
        <div className={classes.quarterly__block}>
          <Container maxWidth="lg">
            <Grid container direction="column" spacing={6}>
              <Grid item>
                <Typography align="center" variant="h2">
                  Quarterly Earnings
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="center" variant="h3">
                  Second-Quarter 2020 Financial Results
                </Typography>
              </Grid>
              <Grid item container justify="space-between" spacing={2}>
                <Grid item container xs={12} md={3} justify="space-around">
                  <Grid item>
                    <Typography variant="body2">
                      <Mic className={classes.icon} /> Video Interview
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container xs={12} md={3} justify="space-around">
                  <Grid item>
                    <Typography variant="body2">
                      <PictureAsPdf className={classes.icon} /> Letter to
                      Shareholders
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container xs={12} md={3} justify="space-around">
                  <Grid item>
                    <Typography variant="body2">
                      <Description className={classes.icon} /> Financial
                      Statements
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container xs={12} md={3} justify="space-around">
                  <Grid item>
                    <Typography variant="body2">
                      <PictureAsPdf className={classes.icon} /> Transcript
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                  <Button className={classes.btn}>ALL QUARTERS</Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
        <Container maxWidth="lg" className={classes.quickLinks__container}>
          <Grid container>
            <Grid
              item
              container
              md={3}
              className={classes.quickLinks__inner1}
              alignItems="center"
              justify="center"
            >
              <Typography variant="h3" align="center">
                Quick Links
              </Typography>
            </Grid>
            <Grid
              item
              container
              md={9}
              className={classes.quickLinks__inner2}
              justify="space-around"
            >
              <Grid item container direction="column" xs={6} md={3} spacing={4}>
                <Grid item>
                  <Typography align="center">
                    <Description className={classes.icon} />
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3" align="center">
                    Annual Reports & Proxies
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container direction="column" xs={6} md={3} spacing={4}>
                <Grid item>
                  <Typography align="center">
                    <PictureAsPdf className={classes.icon} />
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3" align="center">
                    SEC Filings
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container direction="column" xs={6} md={3} spacing={4}>
                <Grid item>
                  <Typography align="center">
                    <InsertChart className={classes.icon} />
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3" align="center">
                    Stock Information{" "}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container direction="column" xs={6} md={3} spacing={4}>
                <Grid item>
                  <Typography align="center">
                    <PermIdentity className={classes.icon} />
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3" align="center">
                    IR Contacts
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Layout>
  );
};

export default InvestorRelations;
