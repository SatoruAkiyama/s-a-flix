import Link from "components/Link";
import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    marginTop: "40px",
    border: "2px solid #757575",
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "25px",
    },
  },
  root: {
    padding: "20px",
  },
  divider: {
    height: "2px",
    width: "100%",
    background: "#757575",
  },
  link: {
    fontSize: "1em",
    color: theme.palette.secondary.main,
    cursor: "pointer",
    "&:hover": {
      color: "#919191",
    },
  },
  text: {
    fontSize: "1em",
    color: theme.palette.secondary.main,
  },
  root1: {
    backgroundColor: theme.palette.primary.main,
    marginTop: "40px",
    border: "2px solid #757575",
    padding: "20px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

const PopperCard = ({ content }) => {
  const classes = useStyles();
  const router = useRouter();
  const accounts = [
    {
      name: "John",
      src:
        "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png",
    },
    {
      name: "Arison",
      src:
        "https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png",
    },
    {
      name: "Nick",
      src:
        "https://cdn.pixabay.com/photo/2016/11/01/21/11/avatar-1789663__340.png",
    },
  ];

  return content === "setting" ? (
    <div className={classes.container}>
      <Grid container direction="column" className={classes.root} spacing={2}>
        {accounts.map(({ name, src }) => (
          <Grid
            item
            container
            wrap="nowrap"
            alignItems="center"
            spacing={3}
            key={name}
          >
            <Grid item>
              <Link href="/coming-soon">
                <Grid
                  item
                  container
                  wrap="nowrap"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item>
                    <Avatar
                      aria-label="avator image"
                      className={classes.avatar}
                      src={src}
                    />
                  </Grid>
                  <Grid item container direction="column">
                    <Grid item>
                      <Typography className={classes.link}>{name}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Link>
            </Grid>
          </Grid>
        ))}

        <Grid item>
          <Link href="/coming-soon">
            <Typography className={classes.link}>Manage Profiles</Typography>
          </Link>
        </Grid>
      </Grid>
      <div className={classes.divider} />
      <Grid container direction="column" className={classes.root} spacing={2}>
        <Grid item>
          <Link href="/coming-soon">
            <Typography className={classes.link}>Account</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/coming-soon">
            <Typography className={classes.link}>Help Center</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Typography className={classes.link}>Sign out of S-A-flix</Typography>
        </Grid>
      </Grid>
    </div>
  ) : content === "notifications" ? (
    <Grid container direction="column" className={classes.root1} spacing={2}>
      <Grid item>
        <Typography className={classes.text}>
          There are no notifications.
        </Typography>
      </Grid>
    </Grid>
  ) : (
    <Grid container direction="column" className={classes.root1} spacing={2}>
      <Grid item>
        <Typography className={classes.text}>
          There are no card gifts.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PopperCard;
