import { Grid, Typography, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useRouter } from "next/router";
import Link from "components/Link";

import { useSelector, useDispatch } from "react-redux";
import { setChoseProfile, setMyList } from "redux/user/userActions";
import {
  selectCurrentUserProfiles,
  selectChoseProfile,
  selectCurrentUserId,
} from "redux/user/userSelector";
import { getMyList } from "firebase/util";

const useStyles = makeStyles((theme) => ({
  root: { minHeight: "90vh", padding: "2em 1em" },
  icon: {
    height: "auto",
    width: "90%",
    margin: "0 auto",
    maxWidth: "200px",
    cursor: "pointer",
    border: "1px solid #000",
    [theme.breakpoints.down("md")]: {
      maxWidth: "160px",
    },
    "&:hover": {
      borderColor: "#fff",
    },
  },
  btn: {
    backgroundColor: "#000",
    border: "2px solid #fff",
    fontSize: "20px",
    borderRadius: "0",
  },
  logo: {
    color: theme.palette.common.red,
    width: "max-content",
    fontSize: "2rem",
    paddingTop: "20px",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "16px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.25rem",
    },
  },
}));

const ProfilesList = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const profiles = useSelector(selectCurrentUserProfiles);
  const userId = useSelector(selectCurrentUserId);

  const router = useRouter();

  const setProfile = async (idx) => {
    dispatch(setChoseProfile(idx));
    const myList = await getMyList(userId, idx);

    if (myList !== "error") {
      dispatch(setMyList(myList));
      router.push("/browse");
    } else {
      alert("There is some error");
    }
  };

  return (
    <Container maxWidth="xl">
      {/* {selectChoseProfile ? (
        <Link href="/browse">
          <Typography className={classes.logo}>S-A-FLIX</Typography>
        </Link>
      ) : (
        <Typography className={classes.logo}>S-A-FLIX</Typography>
      )} */}
      <Typography className={classes.logo}>S-A-FLIX</Typography>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={6}
        className={classes.root}
      >
        <Grid item>
          <Typography variant="h1" align="center">
            Who's watching?
          </Typography>
        </Grid>
        <Grid item container spacing={2} justify="center" alignItems="center">
          {profiles.map(({ name, icon }, idx) => (
            <Grid
              item
              container
              key={idx}
              direction="column"
              xs={6}
              md={3}
              spacing={1}
            >
              <Grid item container alignItems="center">
                <img
                  src={icon}
                  alt="icon"
                  className={classes.icon}
                  onClick={() => setProfile(idx)}
                />
              </Grid>
              <Grid item>
                <Typography variant="body1" align="center">
                  {name}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid item>
          <Link href="/manage-profiles">
            <Button className={classes.btn}>MANAGE PROFILES</Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfilesList;
