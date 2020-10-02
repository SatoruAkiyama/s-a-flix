import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";

import Social from "components/Social";
import ShareButton from "components/ShareButton";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "70px 0",
  },
}));

const Me = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainContainer}>
      <Container maxWidth="md">
        <Grid item container direction="column" justify="center" spacing={4}>
          <Grid item>
            <Typography variant="body1" align="center">
              Hello, my name is Satoru Akiyama. I am a creative developer. This
              is a Netflix Clone Application. I used React/Next.js, Material-UI,
              Firebase. You can see{" "}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/SatoruAkiyama/s-a-flix"
                style={{ color: "#fff" }}
              >
                my code
              </a>
              .
            </Typography>
          </Grid>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="body1" align="center" gutterBottom>
                About me
              </Typography>
            </Grid>
            <Grid item>
              <Social />
            </Grid>
          </Grid>
          <Grid item container direction="column" alignItems="center">
            <Grid item>
              <Typography variant="body1" align="center" gutterBottom>
                If you like S-A-flix, please share.
              </Typography>
            </Grid>
            <Grid item>
              <ShareButton url="https://s-a-flix.vercel.app/" />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Me;
