import Link from "components/Link";
import { useSelector, useDispatch } from "react-redux";
import {
  selectChoseProfile,
  selectCurrentUserId,
  selectProfiles,
} from "redux/user/userSelector";
import {
  signOutStart,
  setMyList,
  setChoseProfile,
} from "redux/user/userActions";

import { getMyList } from "firebase/util";

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
  profile__lists: {
    cursor: "pointer",
    "& p": {
      fontSize: "16px",
      color: "#757575",
    },
    "&:hover": {
      "& p": {
        color: "#fff",
      },
    },
  },
}));

const PopperCard = ({ content, setOpen }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const profiles = useSelector(selectProfiles);
  const choseProfile = useSelector(selectChoseProfile);
  const userId = useSelector(selectCurrentUserId);

  const setProfile = async (idx) => {
    setOpen(false);
    dispatch(setChoseProfile(idx));
    const myList = await getMyList(userId, idx);
    dispatch(setMyList(myList));
  };

  return content === "setting" ? (
    <div className={classes.container}>
      <Grid container direction="column" className={classes.root} spacing={3}>
        {profiles?.map(({ name, icon }, idx) => (
          <Grid
            item
            container
            wrap="nowrap"
            alignItems="center"
            spacing={1}
            key={idx}
          >
            <Grid item>
              <Grid
                item
                container
                wrap="nowrap"
                alignItems="center"
                spacing={2}
                className={classes.profile__lists}
                onClick={() => setProfile(idx + 1)}
              >
                <Grid item>
                  <Avatar
                    aria-label="avator image"
                    className={classes.avatar}
                    src={icon}
                  />
                </Grid>
                <Grid item container direction="column">
                  <Grid item>
                    <Typography
                      style={{ color: choseProfile === idx + 1 && "#fff" }}
                    >
                      {name}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}

        <Grid item>
          <Link href="/manage-profiles">
            <Typography className={classes.link}>Manage Profiles</Typography>
          </Link>
        </Grid>
      </Grid>
      <div className={classes.divider} />
      <Grid container direction="column" className={classes.root} spacing={2}>
        <Grid item>
          <Link href="/account">
            <Typography className={classes.link}>Account</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/help">
            <Typography className={classes.link}>Help Center</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Typography
            className={classes.link}
            onClick={() => dispatch(signOutStart())}
          >
            Sign out of S-A-flix
          </Typography>
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
