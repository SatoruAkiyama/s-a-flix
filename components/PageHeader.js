import { Grid, Typography, Container, Button } from "@material-ui/core";
import { PlayArrow, Info, VolumeOff, VolumeUp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import { getVideo } from "lib/api";

import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "75vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  inner: {
    backgroundImage:
      "linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "75vh",
  },
  content: {
    height: "65vh",
    width: "100%",
    maxWidth: "600px",
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

  //   console.log(data);

  const { backdrop_path, title, overview, id, name } = data;

  const imageUrl = "https://image.tmdb.org/t/p/original";

  const [sound, setSound] = useState(true);
  const video = async () => {
    const src = await getVideo(id, media_type);
    console.log(src);
  };

  useEffect(() => {
    video();
  }, []);

  const handleSound = () => setSound(!sound);
  return (
    <div style={{ marginBottom: "80vh" }}>
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
