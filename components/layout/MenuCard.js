import Link from "components/Link";
import { useRouter } from "next/router";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

import { ROUTES } from "data/ROUTES";

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
  const theme = useTheme();

  const router = useRouter();

  const path = ROUTES;
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
