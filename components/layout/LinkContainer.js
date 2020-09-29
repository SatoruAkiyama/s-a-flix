import Link from "components/Link";
import { useRouter } from "next/router";
import { useState } from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Grid, Typography, Popper, Fade, Paper } from "@material-ui/core";

import { ExpandMore } from "@material-ui/icons";
import MenuCard from "./MenuCard";

const useStyles = makeStyles((theme) => ({
  link: {
    fontSize: "1em",
    color: theme.palette.secondary.main,
    "&:hover": {
      color: "#919191",
    },
  },
  icon: {
    cursor: "pointer",
  },
}));

const LinkContainer = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const router = useRouter();
  const path = [
    { name: "Home", link: "/browse" },
    { name: "TV Shows", link: "/browse/tv" },
    { name: "Movies", link: "/browse/movies" },
    { name: "Latest", link: "/browse/latest" },
    { name: "My List", link: "/browse/my-list" },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const toggleSeetingCard = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return matchesSM ? (
    <>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={300}>
            <Paper>
              <MenuCard />
            </Paper>
          </Fade>
        )}
      </Popper>

      <ExpandMore
        color="secondary"
        onClick={toggleSeetingCard("bottom-end")}
        className={classes.icon}
      />
    </>
  ) : (
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
  );
};
export default LinkContainer;
