import React from "react";
import Link from "components/Link";
import { useRouter } from "next/router";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import LinkContainer from "./LinkContainer";
import OptionsContainer from "./OptionsContainers";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "transparent",
    "&.MuiPaper-elevation4": {
      background: theme.palette.primary.main,
      boxShadow: "none",
    },
  },
  media__appBar: {
    background: theme.palette.secondary.main,
  },
  devices__appBar: {
    background: theme.palette.secondary.main,
  },
  jobs__appBar: {
    background: "transparent",
    "& .MuiTypography-body2": {
      fontSize: "1em",
      color: "#fff",
    },
    "&.MuiPaper-elevation4": {
      background: theme.palette.secondary.main,
      "& .MuiTypography-body2": {
        color: "#000",
      },
    },
  },
  logo: {
    color: theme.palette.common.red,
    width: "max-content",
    fontSize: "2rem",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.25rem",
    },
  },
  signIn: {
    fontSize: "1em",
  },
  media: {
    fontSize: "1em",
    color: "#000",
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const router = useRouter();

  if (router.pathname === "/login" || router.pathname === "/signup") {
    return (
      <Container
        maxWidth="xl"
        style={{
          paddingTop: matchesSM ? "16px" : "20px",
          paddingBottom: matchesSM ? "16px" : "20px",
          position: "absolute",
          top: 0,
          zIndex: 1300,
        }}
      >
        <Grid container alignItems="center">
          <Grid item>
            <Link href="/">
              <Typography className={classes.logo}>S-A-FLIX</Typography>
            </Link>
          </Grid>
        </Grid>
      </Container>
    );
  }

  if (router.pathname === "/sorry" || router.pathname.includes("/help")) {
    return (
      <Container
        maxWidth="xl"
        style={{
          paddingTop: matchesSM ? "16px" : "20px",
          paddingBottom: matchesSM ? "16px" : "20px",
          position: "absolute",
          top: 0,
          zIndex: 1300,
        }}
      >
        <Grid container alignItems="center">
          <Grid item>
            <Link href="/browse">
              <Typography className={classes.logo}>S-A-FLIX</Typography>
            </Link>
          </Grid>
        </Grid>
      </Container>
    );
  }

  if (
    router.pathname === "/media-center" ||
    router.pathname === "/investor-relations"
  ) {
    return (
      <ElevationScroll>
        <AppBar className={classes.media__appBar}>
          <Toolbar disableGutters>
            <Container
              maxWidth="xl"
              style={{
                paddingTop: matchesSM ? "16px" : "20px",
                paddingBottom: matchesSM ? "16px" : "20px",
              }}
            >
              <Grid container alignItems="center">
                <Grid item>
                  <Link href="/browse">
                    <Typography className={classes.logo}>S-A-FLIX</Typography>
                  </Link>
                </Grid>
                <Grid
                  item
                  style={{
                    marginLeft: matchesSM ? "6px" : matchesMD ? "20px" : "40px",
                  }}
                >
                  <Typography className={classes.media}>
                    {router.pathname === "/investor-relations" ? (
                      <>INVESTORS</>
                    ) : (
                      <>MEDIA CENTER</>
                    )}
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    );
  }

  if (router.pathname === "/jobs") {
    return (
      <ElevationScroll>
        <AppBar className={classes.jobs__appBar}>
          <Toolbar disableGutters>
            <Container
              maxWidth="xl"
              style={{
                paddingTop: matchesSM ? "16px" : "20px",
                paddingBottom: matchesSM ? "16px" : "20px",
              }}
            >
              <Grid container alignItems="center">
                <Grid item>
                  <Link href="/browse">
                    <Typography className={classes.logo}>S-A-FLIX</Typography>
                  </Link>
                </Grid>
                <Grid
                  item
                  style={{
                    marginLeft: matchesSM ? "6px" : matchesMD ? "20px" : "40px",
                  }}
                >
                  <Typography variant="body2">Jobs</Typography>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    );
  }

  if (router.pathname === "/devices") {
    return (
      <ElevationScroll>
        <AppBar className={classes.devices__appBar}>
          <Toolbar disableGutters>
            <Container
              maxWidth="xl"
              style={{
                paddingTop: matchesSM ? "16px" : "20px",
                paddingBottom: matchesSM ? "16px" : "20px",
              }}
            >
              <Grid container justify="space-between" alignItems="center">
                <Grid item>
                  <Link href="/browse">
                    <Typography className={classes.logo}>S-A-FLIX</Typography>
                  </Link>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    );
  }

  return (
    <ElevationScroll>
      <AppBar className={classes.appBar}>
        <Toolbar disableGutters>
          <Container
            maxWidth="xl"
            style={{
              paddingTop: matchesSM ? "16px" : "20px",
              paddingBottom: matchesSM ? "16px" : "20px",
            }}
          >
            <Grid
              container
              justify={router.pathname === "/" ? "space-between" : "flex-start"}
              alignItems="center"
            >
              <Grid item>
                <Link href={router.pathname === "/" ? "/" : "/browse"}>
                  <Typography className={classes.logo}>S-A-FLIX</Typography>
                </Link>
              </Grid>
              {router.pathname === "/" && (
                <Link href={"/login"}>
                  <Button className={classes.signIn}>Sign In</Button>
                </Link>
              )}
              {router.pathname !== "/" && (
                <Grid
                  item
                  style={{
                    marginLeft: matchesSM ? "6px" : matchesMD ? "20px" : "40px",
                  }}
                >
                  <LinkContainer />
                </Grid>
              )}
              {router.pathname !== "/" && (
                <Grid item style={{ marginLeft: "auto" }}>
                  <OptionsContainer />
                </Grid>
              )}
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};
export default Header;
