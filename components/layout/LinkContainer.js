import Link from "components/Link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  IconButton,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import { ROUTES } from "data/ROUTES";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: `5em`,
    [theme.breakpoints.down("md")]: {
      marginBottom: "4em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2em",
    },
  },
  logo: {
    color: theme.palette.common.red,
    width: "max-content",
    fontSize: "2rem",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: `50px`,
    width: `50px`,
    color: `#fff`,
    [theme.breakpoints.down("xs")]: {
      height: `40px`,
      width: `40px`,
    },
  },
  drawer: {
    backgroundColor: theme.palette.secondary.main,
    padding: "0 6em",
  },
  link: {
    fontSize: "1.25em",
    color: theme.palette.secondary.main,
    "&:hover": {
      color: "#ddd",
    },
  },
  signIn: {
    fontSize: "1em",
  },
}));

const LinkContainer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXL = useMediaQuery(theme.breakpoints.down("xl"));

  const [openDrawer, setOpenDrawer] = useState(false);

  const router = useRouter();

  const path = ROUTES;

  const tabs = (
    <>
      <Grid
        container
        justify="space-between"
        spacing={2}
        style={{ marginRight: "auto" }}
      >
        {path.map(({ name, link }) => (
          <Grid item key={link}>
            <Link href={link}>
              <Typography
                className={classes.link}
                style={{
                  fontWeight: router.pathname === link && "bold",
                  borderBottom:
                    router.pathname === link &&
                    `1px solid ${theme.palette.common.red}`,
                }}
              >
                {name}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
        anchor="right"
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {path.map(({ name, link }) => (
            <ListItem
              key={link}
              divider
              button
              onClick={() => {
                setOpenDrawer(false);
              }}
            >
              <ListItemText disableTypography>
                <Link href={link}>
                  <Typography
                    style={{
                      color:
                        router.pathname === link
                          ? "primary"
                          : "rgb(107 107 107)",
                      fontWeight: router.pathname === link && "bold",
                    }}
                  >
                    {name}
                  </Typography>
                </Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
  return tabs;
};
export default LinkContainer;
