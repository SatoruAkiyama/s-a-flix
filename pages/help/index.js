import { Typography, Container, Grid } from "@material-ui/core";
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
  },
  upper__container: {
    height: "300px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: "url('/help-home.jpeg')",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      height: "200px",
    },
  },
  uppre__inner: {
    backgroundImage:
      "linear-gradient(left ,rgba(0,0,0,.95) 0,rgba(0,0,0,.6) 60%,rgba(0,0,0, 0) 100%)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  popular: {
    backgroundColor: "#fafafa",
    paddingTop: "40px",
    paddingBottom: "40px",
    borderBottom: "1px solid #dedede",
  },
  card: {
    background: "#fff",
    borderRadius: "4px",
    boxShadow: "0 1px 16px rgba(0,0,0,.1)",
    padding: "16px",
    cursor: "pointer",
    margin: "20px 0",
    "&:nth-child(2)": {
      margin: "20px 30px",
    },
    [theme.breakpoints.down("xs")]: {
      "&:nth-child(2)": {
        margin: "20px 0",
      },
    },
    "& p": {
      borderBottom: `1px solid #fff`,
    },
    "&:hover": {
      "& p": {
        color: theme.palette.common.red,
        borderColor: theme.palette.common.red,
      },
    },
  },
  popular__inner: {
    maxWidth: "1100px",
  },
  main__content: {
    background: "#fff",
    padding: "48px 0 68px",
  },
  link__text: {
    color: "#4c4948 !important",
    borderBottom: `1px solid #fff`,
    display: "inline",
    "&:hover": {
      color: `${theme.palette.common.red} !important`,
      borderColor: theme.palette.common.red,
    },
  },
}));

const HelpHome = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const popularTopics = POPULAR_TOPICS;
  const linkLists = LINK_LISTS;
  const quiclLinks = QUICK_LINKS;
  return (
    <Layout
      title="Help Center | S-A-FLIX"
      description="This is a Netflix Clone Application."
    >
      <div className={classes.root}>
        <div className={classes.upper__container}>
          <Grid
            container
            className={classes.uppre__inner}
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h1" align="center">
                Help Center
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div className={classes.popular}>
          <Container maxWidth="lg">
            <Typography variant="h3" style={{ marginBottom: "1.5em" }}>
              Popular topics
            </Typography>
            <Grid
              container
              direction={matchesXS ? "column" : "row"}
              className={classes.popular__inner}
            >
              {popularTopics.map(({ text, path }, idx) => (
                <Link href={path} key={idx} className={classes.card}>
                  <Grid item container xs>
                    <Grid
                      item
                      container
                      alignItems="center"
                      spacing={2}
                      wrap="nowrap"
                    >
                      <Grid item>
                        <Subject color="primary" />
                      </Grid>
                      <Grid item>
                        <Typography variant="body2">{text}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Link>
              ))}
            </Grid>
          </Container>
        </div>
        <div className={classes.main__content}>
          <Container maxWidth="lg">
            <Grid
              container
              direction={matchesSM ? "column" : "row"}
              justify="space-between"
              spacing={matchesSM ? 4 : 1}
            >
              <Grid
                item
                container
                md={8}
                lg={10}
                spacing={matchesSM ? 4 : 3}
                justify="space-between"
              >
                {linkLists.map(({ title, links }, idx) => (
                  <Grid
                    item
                    container
                    direction="column"
                    key={idx}
                    spacing={3}
                    sm={6}
                    lg={3}
                  >
                    <Grid item>
                      <Typography variant="h2">{title}</Typography>
                    </Grid>
                    <Grid item container direction="column" spacing={3}>
                      {links.map(({ text, path }, idx) => (
                        <Grid item key={idx}>
                          <Link href={path}>
                            <Typography
                              variant="body2"
                              className={classes.link__text}
                            >
                              {text}
                            </Typography>
                          </Link>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                ))}
              </Grid>
              <Grid item container md={4} lg={2} direction="column" spacing={3}>
                <Grid item>
                  <Typography variant="h2">{quiclLinks.title}</Typography>
                </Grid>
                <Grid item container direction="column" spacing={3}>
                  {quiclLinks.links.map(({ text, path }, idx) => (
                    <Grid item key={idx}>
                      <Link href={path}>
                        <Grid container justify="space-between" wrap="nowrap">
                          <Grid item>
                            <Typography
                              variant="body2"
                              className={classes.link__text}
                            >
                              {text}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
        <ContactBlock />
      </div>
    </Layout>
  );
};

export default HelpHome;
