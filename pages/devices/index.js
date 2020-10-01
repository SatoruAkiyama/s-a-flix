import { Typography, Container, Grid } from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Layout from "components/layout/Layout";
import DevicesTabs from "components/DevicesTabs";

const useStyles = makeStyles((theme) => ({
  root: {
    "& h2, h3, p": {
      color: "#221f1f",
    },
    "& h2": {
      fontWeight: "bold",
      fontSize: "22px",
    },
    marginTop: "85px",
    [theme.breakpoints.down("md")]: {
      marginTop: "70px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "60px",
    },
  },
  upper__container: {
    height: "50vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1586899028174-e7098604235b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')",
    position: "relative",
  },
  uppre__inner: {
    backgroundImage:
      "linear-gradient(left ,rgba(0,0,0,.2) 0,rgba(0,0,0,.5) 20%,rgba(0,0,0,.5) 80%,rgba(0,0,0, 0) 100%)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
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

const SupportedDevicesPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Layout
      title="Supported Devices | S-A-FLIX | Netflix Clone"
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
                Connect to Netflix using your favorite devices.
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div className={classes.devices__container}>
          <DevicesTabs />
        </div>
      </div>
    </Layout>
  );
};

export default SupportedDevicesPage;
