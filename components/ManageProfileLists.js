import { Grid, Typography, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Edit } from "@material-ui/icons";

import Link from "components/Link";
import { useRouter } from "next/router";

import { useSelector } from "react-redux";
import { selectChoseProfile, selectProfiles } from "redux/user/userSelector";

const useStyles = makeStyles((theme) => ({
  root: { minHeight: "90vh", padding: "2em 1em" },

  btn: {
    backgroundColor: "#000",
    border: "2px solid #fff",
    fontSize: "20px",
    borderRadius: "0",
    minWidth: "200px",
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
  edit__icon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  icon__container: {
    position: "relative",
    cursor: "pointer",
    "& img": {
      height: "auto",
      width: "100%",
      margin: "0 auto",
      maxWidth: "200px",
      border: "1px solid #000",
      opacity: 0.5,
      [theme.breakpoints.down("md")]: {
        maxWidth: "160px",
      },
    },
    "&:hover": {
      "& img": {
        opacity: 1,
        borderColor: "#fff",
      },
    },
  },
}));

const ProfilesList = () => {
  const classes = useStyles();

  const choseProfile = useSelector(selectChoseProfile);
  const profiles = useSelector(selectProfiles);
  const router = useRouter();
  return (
    <Container maxWidth="xl">
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
            Manage Profiles
          </Typography>
        </Grid>
        <Grid item container spacing={3} justify="center" alignItems="center">
          {profiles?.map(({ name, icon }, idx) => (
            <Grid
              item
              container
              key={idx}
              direction="column"
              xs={6}
              md={3}
              spacing={1}
            >
              <Grid item container alignItems="center" justify="center">
                <Grid
                  item
                  className={classes.icon__container}
                  onClick={() => router.push(`/manage-profiles/${idx + 1}`)}
                >
                  <img src={icon} alt="icon" />
                  <Edit
                    color="secondary"
                    className={classes.edit__icon}
                    fontSize="large"
                  />
                </Grid>
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
          {choseProfile === null ? (
            <Link href="/profiles">
              <Button className={classes.btn}>Done</Button>
            </Link>
          ) : (
            <Link href="/browse">
              <Button className={classes.btn}>Done</Button>
            </Link>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfilesList;
