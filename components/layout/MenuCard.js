import Link from "components/Link";
import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    marginTop: "40px",
    border: "2px solid #757575",
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "25px",
    },
  },
  link: {
    fontSize: "1em",
    color: theme.palette.secondary.main,
    "&:hover": {
      color: "#919191",
    },
  },
}));

const MenuCard = () => {
  const classes = useStyles();

  const path = [
    { name: "Home", link: "/browse" },
    { name: "TV Shows", link: "/browse/tv" },
    { name: "Movies", link: "/browse/movies" },
    { name: "Latest", link: "/browse/latest" },
    { name: "My List", link: "/browse/my-list" },
  ];
  return (
    <Grid container direction="column" className={classes.root} spacing={2}>
      {path.map(({ name, link }) => (
        <Grid item key={link}>
          <Link href={link}>
            <Typography className={classes.link}>{name}</Typography>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default MenuCard;
