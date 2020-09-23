import { Grid, Typography, Container, Button } from "@material-ui/core";
import { PlayArrow, Info, Add } from "@material-ui/icons";
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
    height: "80vh",
    width: "100%",
    maxWidth: "600px",
    [theme.breakpoints.down("md")]: {
      height: "70vh",
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
  add__btn: {
    color: theme.palette.secondary.main,
    height: " 40px",
    background: "rgb(139 139 139 / 70%)",
    "&.MuiButton-root:hover": {
      backgroundColor: `rgb(139 139 139 / 90%) !important`,
    },
  },
}));

const PageHeader = ({ data, media_type }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matcehsMD = useMediaQuery(theme.breakpoints.down("md"));

  // console.log(data);
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

  const { backdrop_path, title, name, overview, id } = data;

  const imageUrl = "https://image.tmdb.org/t/p/original";

  //   modal
  const { setVideoUrl, setInfoContent } = useContext(ModalContext);

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
                    onClick={() => setInfoContent({ ...data, media_type })}
                  >
                    More Info
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    className={classes.add__btn}
                    startIcon={<Add />}
                    // onClick={() => setInfoContent({ ...data, media_type })}
                  >
                    My List
                  </Button>
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
