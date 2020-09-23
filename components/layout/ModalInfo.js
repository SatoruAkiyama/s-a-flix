import { useContext } from "react";
import { ModalContext } from "providers/modal.provider";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";

import { PlayArrow, Add } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "400px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      height: "300px",
    },
  },
  inner: {
    backgroundImage:
      "linear-gradient(to top,rgba(0,0,0) 0,rgba(0,0,0,0) 40%,rgb(0 0 0 / 20%) 100%)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "400px",
    [theme.breakpoints.down("sm")]: {
      height: "300px",
    },
  },
  content: {
    height: "100%",
    position: "relative",
    zIndex: "10",
  },
  rate: {
    color: "#33eb91",
  },
  date: {
    color: "#a3a3a3",
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
  add__btn: {
    color: theme.palette.secondary.main,
    height: " 40px",
    background: "rgb(133 133 133 / 60%)",
    "&.MuiButton-root:hover": {
      backgroundColor: `rgb(133 133 133 / 80%) !important`,
    },
  },
}));

export default function ModalVideo() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const { info, infoModal, closeInfoModal, setVideoUrl } = useContext(
    ModalContext
  );
  //   backdrop_path: "/70YdbMELM4b8x8VXjlubymb2bQ0.jpg"
  // first_air_date: "2017-03-19"
  // genre_ids: Array(2)
  // 0: 18
  // 1: 10751
  // length: 2
  // __proto__: Array(0)
  // id: 70785
  // name: "Anne with an E"
  // origin_country: Array(1)
  // 0: "CA"
  // length: 1
  // __proto__: Array(0)
  // original_language: "en"
  // original_name: "Anne with an E"
  // overview: "A coming-of-age story about an outsider who, against all odds and numerous challenges, fights for love and acceptance and for her place in the world. The series centers on a young orphaned girl in the late 1890’s, who, after an abusive childhood spent in orphanages and the homes of strangers, is mistakenly sent to live with an elderly woman and her aging brother. Over time, 13-year-old Anne will transform their lives and eventually the small town in which they live with her unique spirit, fierce intellect and brilliant imagination."
  // popularity: 204.683
  // poster_path: "/6P6tXhjT5tK3qOXzxF9OMLlG7iz.jpg"
  // vote_average: 8.8
  // vote_count: 2097
  const {
    backdrop_path,
    title,
    name,
    overview,
    id,
    vote_average,
    first_air_date,
    media_type,
  } = info;
  const imageUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <Dialog
        open={infoModal}
        onClose={closeInfoModal}
        fullScreen={matchesXS}
        PaperProps={{
          style: {
            padding: 0,
            backgroundColor: "#000",
            height: matchesXS ? "100vh" : "75vh",
            border: "1px solid #fff",
          },
        }}
        fullWidth
        maxWidth="md"
      >
        <DialogContent>
          <DialogActions
            style={{
              zIndex: 20,
              position: "absolute",
              right: "10px",
            }}
          >
            <Button onClick={closeInfoModal}>Close</Button>
          </DialogActions>
          <div
            className={classes.root}
            style={{
              backgroundImage: `url(${imageUrl}${backdrop_path})`,
            }}
          >
            <div className={classes.inner} />
          </div>
          <Container maxWidth="xl" className={classes.content}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              spacing={2}
              style={{ height: "100%" }}
            >
              <Grid item>
                <Typography variant="h1">{title ? title : name}</Typography>
              </Grid>
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
                  <Button className={classes.add__btn} startIcon={<Add />}>
                    My List
                  </Button>
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item>
                  <Typography variant="body2" className={classes.rate}>
                    Rating: {vote_average * 10}%
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" className={classes.date}>
                    {first_air_date}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="body2">{overview}</Typography>
              </Grid>
            </Grid>
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  );
}
