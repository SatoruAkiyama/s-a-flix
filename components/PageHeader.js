import { Grid, Typography, Container, Button } from "@material-ui/core";
import { PlayArrow, Info, VolumeOff, VolumeUp } from "@material-ui/icons";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { useState, useContext } from "react";
import { ModalContext } from "providers/modal.provider";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "85vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      height: "75vh",
    },
  },
  inner: {
    backgroundImage:
      "linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "85vh",
    [theme.breakpoints.down("md")]: {
      height: "75vh",
    },
  },
  content: {
    height: "75vh",
    width: "100%",
    maxWidth: "600px",
    [theme.breakpoints.down("md")]: {
      height: "65vh",
    },
  },
  play__btn: {
    background: theme.palette.secondary.main,
    height: " 40px",
    "& .MuiButton-label": {
      color: `${theme.palette.primary.main} !important`,
    },
    "&.MuiButton-root:hover": {
      backgroundColor: `rgb(255 255 255 / 90%) !important`,
    },
  },
  info__btn: {
    color: theme.palette.secondary.main,
    height: " 40px",
    background: "rgb(133 133 133 / 60%)",
    "&.MuiButton-root:hover": {
      backgroundColor: `rgb(133 133 133 / 80%) !important`,
    },
  },
  icon: {
    cursor: "pointer",
    border: "1px solid white",
    borderRadius: "50%",
    padding: "5px",
    height: " 35px",
    width: " 35px",
  },
}));

const PageHeader = ({ data, media_type }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matcehsMD = useMediaQuery(theme.breakpoints.down("md"));
  //   console.log(data);

  const { backdrop_path, title, overview, id, name } = data;

  const imageUrl = "https://image.tmdb.org/t/p/original";

  const [sound, setSound] = useState(true);
  const handleSound = () => setSound(!sound);

  //   modal
  const { setVideoUrl } = useContext(ModalContext);

  return (
    <div style={{ marginBottom: matcehsMD ? "75vh" : "85vh" }}>
      <div
        className={classes.root}
        style={{
          backgroundImage: `url(${imageUrl}${backdrop_path})`,
        }}
      >
        <div className={classes.inner}>
          <Container maxWidth="xl">
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.content}
              spacing={2}
            >
              <Grid item>
                <Typography variant="h1">{title ? title : name}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">{overview}</Typography>
              </Grid>
              <Grid item container spacing={4} alignItems="center">
                <Grid item>
                  <Grid item container spacing={2}>
                    <Grid item>
                      <Button
                        className={classes.play__btn}
                        startIcon={<PlayArrow color="primary" />}
                        onClick={() => setVideoUrl(id, media_type)}
                      >
                        Play
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        className={classes.info__btn}
                        startIcon={<Info />}
                      >
                        More Info
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  {sound ? (
                    <VolumeUp className={classes.icon} onClick={handleSound} />
                  ) : (
                    <VolumeOff className={classes.icon} onClick={handleSound} />
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
