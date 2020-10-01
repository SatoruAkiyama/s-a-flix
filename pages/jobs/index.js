import { Typography, Container, Grid, Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Subject } from "@material-ui/icons";

import Layout from "components/layout/Layout";
import Link from "components/Link";
import ContactBlock from "components/help/ContactBlock";

import { POPULAR_TOPICS, LINK_LISTS, QUICK_LINKS } from "data/HELP_HOME";

const useStyles = makeStyles((theme) => ({
  root: {
    "& h2, h3, p": {
      color: "#221f1f",
    },
    "& h2": {
      fontWeight: "bold",
      fontSize: "22px",
    },
    backgroundColor: "rgb(245, 245, 241)",
    paddingBottom: "120px",
  },
  upper__container: {
    height: "70vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage:
      "url('https://images.pexels.com/photos/4065137/pexels-photo-4065137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      height: "50vh",
    },
  },
  uppre__inner: {
    backgroundImage:
      "linear-gradient(left ,rgba(0,0,0,.4) 0,rgba(0,0,0,.6) 60%,rgba(0,0,0, 0) 100%)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  freedom__container: {
    marginTop: "120px",
  },
  freedom__inner1: {
    boxShadow: "0px 0px 20px 0.98px rgba(0, 0, 0, 0.17)",
    backgroundColor: "#fff",
    borderRight: "20px solid #e50914",
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      borderRight: "none",
    },
  },
  freedom__inner2: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage:
      "url(https://images.pexels.com/photos/4668537/pexels-photo-4668537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
    height: " 350px",
    boxShadow: "0px 0px 20px 0.98px rgba(0, 0, 0, 0.17)",
    [theme.breakpoints.down("xs")]: {
      height: " 320px",
    },
  },
  internet_entertaiment__container: {
    marginTop: "120px",
  },
  internet_entertaiment__inner1: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage:
      "url(https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750_1280.jpg)",
    height: " 350px",
    boxShadow: "0px 0px 20px 0.98px rgba(0, 0, 0, 0.17)",
    [theme.breakpoints.down("xs")]: {
      height: " 320px",
    },
  },
  internet_entertaiment__inner2: {
    boxShadow: "0px 0px 20px 0.98px rgba(0, 0, 0, 0.17)",
    backgroundColor: "#221f1f",
    padding: "20px",
    "& h2, h3, p": {
      color: "#fff",
    },
  },
  latest__container: {
    marginTop: "120px",
  },
  img: {
    height: "auto",
    width: "100%",
    boxShadow: "1px 0px 20px 1px rgba(0, 0, 0, 0.4)",
    cursor: "pointer",
    "&:hover": {
      opacity: 0.5,
    },
  },
  btn: {
    borderRadius: 0,
  },
  card__container: {
    marginTop: "120px",
  },
  card: {
    background: "#fff",
    padding: "40px 20px",
    boxShadow: "0px 0px 20px 0.98px rgba(0, 0, 0, 0.17)",
    "& .MuiTypography-body1": {
      borderLeft: "1px solid #e50914",
      paddingLeft: "10px",
    },
  },
}));

const JobsPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Layout
      title="Jobs | S-A-FLIX | Netflix Clone"
      description="This is a Netflix Clone Application."
    >
      <div className={classes.root}>
        <div className={classes.upper__container}>
          <Grid
            container
            className={classes.uppre__inner}
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <Container maxWidth="md">
                <Typography variant="h1">
                  A great workplace combines exceptional colleagues and hard
                  problems.
                </Typography>
              </Container>
            </Grid>
          </Grid>
        </div>
        <Container maxWidth="lg" className={classes.freedom__container}>
          <Grid container>
            <Grid
              item
              container
              sm={7}
              className={classes.freedom__inner1}
              alignItems="center"
            >
              <Grid item container direction="column" spacing={4}>
                <Grid item>
                  <Typography variant="h2">
                    Freedom and Responsibility
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    Our core philosophy is people over process. Our culture has
                    been instrumental to our success and has helped us attract
                    and retain stunning colleagues, making work here more
                    satisfying.
                  </Typography>
                </Grid>
                <Grid item>
                  <Button className={classes.btn}>
                    READ ABOUT OUR CULTURE
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              container
              sm={5}
              className={classes.freedom__inner2}
            ></Grid>
          </Grid>
        </Container>
        <Container
          maxWidth="lg"
          className={classes.internet_entertaiment__container}
        >
          <Grid container>
            <Grid
              item
              container
              sm={5}
              className={classes.internet_entertaiment__inner1}
            ></Grid>
            <Grid
              item
              container
              sm={7}
              className={classes.internet_entertaiment__inner2}
              alignItems="center"
            >
              <Grid item container direction="column" spacing={4}>
                <Grid item>
                  <Typography variant="h2">
                    Internet entertainment. Global original content. Product
                    personalization.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    Our first original series debuted in 2013. Over the
                    following decades, Internet TV will replace linear, and we
                    hope to keep leading by offering an amazing entertainment
                    experience.
                  </Typography>
                </Grid>
                <Grid item>
                  <Button className={classes.btn}>SEE WHAT'S NEXT</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="md" className={classes.latest__container}>
          <Typography
            variant="h2"
            align="center"
            style={{ marginBottom: "30px" }}
          >
            Latest From Netflix
          </Typography>
          <Grid container>
            <Grid item xs={4}>
              <img
                src="https://images.unsplash.com/photo-1599689019338-50deb475f380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                className={classes.img}
              />
            </Grid>
            <Grid item xs={4}>
              <img
                src="https://images.unsplash.com/photo-1518930259200-3e5b29f42096?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                className={classes.img}
              />
            </Grid>
            <Grid item xs={4}>
              <img
                src="https://images.unsplash.com/photo-1583265627959-fb7042f5133b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                className={classes.img}
              />
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="md" className={classes.card__container}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <div className={classes.card}>
                <Grid container direction="column" spacing={3}>
                  <Grid item>
                    <Typography variant="body1">TECH BLOG</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h2">
                      How Our Paths Brought Us to Data and Netflix
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      *by Julie Beckley & * Chris Pham This Q&A provides
                      insights into the diverse set of skills, projects, and
                      culture within Data Science and Engineering (DSE) at
                      Netflix through the eyes of two team members: Chris Pham
                      and Julie Beckley. Photo fro...
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button className={classes.btn}>READ MORE</Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.card}>
                <Grid container direction="column" spacing={3}>
                  <Grid item>
                    <Typography variant="body1">COMPANY BLOG</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h2">
                      ‘One Story Away’ campaign celebrates the power of
                      storytelling
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button className={classes.btn}>READ MORE</Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Layout>
  );
};

export default JobsPage;
