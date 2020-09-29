import { Grid, Typography, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUserInfo, selectProfiles } from "redux/user/userSelector";
import { signOutStart } from "redux/user/userActions";

const useStyles = makeStyles((theme) => ({
  root: { marginTop: "100px", marginBottom: "70px" },

  btn: {
    backgroundColor: "#000",
    border: "2px solid #fff",
    fontSize: "20px",
    borderRadius: "0",
    minWidth: "200px",
  },
  icon__container: {
    position: "relative",
    "& img": {
      height: "auto",
      width: "100%",
      margin: "0 auto",
      maxWidth: "160px",
      [theme.breakpoints.down("md")]: {
        maxWidth: "160px",
      },
    },
  },
}));

const AccountInfo = () => {
  const classes = useStyles();

  const profiles = useSelector(selectProfiles);
  const userInfo = useSelector(selectCurrentUserInfo);
  const { email, createdAt } = userInfo;

  const dispatch = useDispatch();
  return (
    <Container maxWidth="md">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={8}
        className={classes.root}
      >
        <Grid item>
          <Typography variant="h1" align="center">
            Account
          </Typography>
        </Grid>
        <Grid item container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h2" align="center">
              Email Address
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#757575" }}
            >
              {email}
            </Typography>
          </Grid>
        </Grid>

        <Grid item container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h2" align="center">
              User Lists
            </Typography>
          </Grid>
          <Grid item container spacing={2} justify="center" alignItems="center">
            {profiles?.map(({ name, icon }, idx) => (
              <Grid
                item
                container
                key={idx}
                direction="column"
                xs={6}
                sm={3}
                spacing={1}
              >
                <Grid item container alignItems="center" justify="center">
                  <Grid item className={classes.icon__container}>
                    <img src={icon} alt="icon" />
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="body2" align="center">
                    {name}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h2" align="center">
              The date this account was created.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#757575" }}
            >
              {createdAt}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            className={classes.btn}
            onClick={() => dispatch(signOutStart())}
          >
            Sign out of S-A-flix
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AccountInfo;
