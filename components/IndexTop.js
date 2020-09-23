import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EmailForm from "components/EmailForm";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundImage: `url(/main.jpg) `,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderBottom: `8px solid #222`,
  },
  inner: {
    padding: "3em 4% 0",
    backgroundImage:
      "linear-gradient(to top,rgb(0 0 0) 0,rgb(0 0 0 / 50%) 20%,rgb(0 0 0 / 75%) 100%)",
    borderBottom: "8px solid #222",
  },
}));

const IndexTop = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainContainer}>
      <Grid
        item
        container
        className={classes.inner}
        direction="column"
        alignItems="center"
        justify="center"
        spacing={3}
      >
        <Grid item>
          <Typography align="center" variant="h1">
            Unlimited movies, TV shows, and more. <br />
            This is a Netflix Clone Application.
          </Typography>
        </Grid>
        <Grid item>
          <Typography align="center" variant="h2">
            Watch anywhere. Cancel anytime.
          </Typography>
        </Grid>
        <Grid item style={{ margin: "20px 0" }}>
          <EmailForm id="index_top" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default IndexTop;
