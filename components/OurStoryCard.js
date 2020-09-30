import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ReactPlayer from "react-player";
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    borderBottom: `8px solid #222`,
    padding: "70px 0",
  },
  src: {
    width: "100%",
    height: "auto",
  },
}));
const OurStoryCard = ({ data: { title, text, src, reverse } }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container className={classes.mainContainer}>
      <Container maxWidth="lg">
        <Grid
          item
          container
          justify={matchesSM ? "center" : "space-between"}
          alignItems="center"
          direction={matchesSM ? "column" : reverse ? "row-reverse" : "row"}
          md
          spacing={3}
        >
          <Grid item sm={10} md={6}>
            <Typography
              variant="h1"
              gutterBottom
              align={matchesSM ? "center" : "left"}
            >
              {title}
            </Typography>
            <Typography variant="h2" align={matchesSM ? "center" : "left"}>
              {text}
            </Typography>
          </Grid>
          <Grid item sm={10} md={6}>
            <ReactPlayer
              url={src}
              playing
              playsinline
              loop
              config={{
                options: {
                  allowfullscreen: false,
                },
              }}
              width="100%"
            />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default OurStoryCard;
