import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { PlayArrow, Info, Add } from "@material-ui/icons";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

import { useContext } from "react";
import { ModalContext } from "providers/modal.provider";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "200px",
    [theme.breakpoints.down("lg")]: { height: "160px" },
    [theme.breakpoints.down("md")]: { height: "155px" },
    [theme.breakpoints.down("sm")]: { height: "140px" },
    [theme.breakpoints.down("xs")]: { height: "120px" },
    position: "relative",

    "&.MuiPaper-rounded": {
      borderRadius: "0",
    },

    "& .MuiCardActions-root": {
      position: "absolute",
      bottom: 0,
      padding: "6px 4px 0",
      background: "#303030cf",
    },
  },
  poster__root: {
    height: "400px",
    [theme.breakpoints.down("lg")]: { height: "360px" },
    [theme.breakpoints.down("md")]: { height: "340x" },
    [theme.breakpoints.down("sm")]: { height: "320px" },
    [theme.breakpoints.down("xs")]: { height: "300px" },
    position: "relative",

    "&.MuiPaper-rounded": {
      borderRadius: "0",
    },

    "& .MuiCardActions-root": {
      position: "absolute",
      bottom: 0,
      padding: "6px 4px 0",
      background: "#303030cf",
    },
  },
  img: {
    position: "absolute",
    cursor: "pointer",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    transition: "all 0.3s",
    background: "#303030cf",
    paddingTop: "40px",
    "&:hover": {
      transform: "scale3d(1.2, 1.2, 1.2)",
    },
  },
  actions: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  btn: {
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.common.red,
    },
  },
}));

const VideoCard = ({ data, poster }) => {
  const classes = useStyles();
  const imageUrl = "https://image.tmdb.org/t/p/w300";
  //   console.log(data);
  const { backdrop_path, media_type, id, title, name, poster_path } = data;
  const { setVideoUrl, setInfoContent } = useContext(ModalContext);
  return (
    <Card className={poster ? classes.poster__root : classes.root}>
      <div
        className={classes.img}
        style={{
          backgroundImage: `url(${imageUrl}${
            poster ? poster_path : backdrop_path
          })`,
        }}
        onClick={() => setInfoContent({ ...data, type })}
      >
        {!backdrop_path && (
          <Typography variant="body2" align="center">
            {title ? title : name}
          </Typography>
        )}
      </div>
      <CardActions className={classes.actions}>
        <Grid container spacing={1}>
          <Grid item>
            <PlayArrow
              onClick={() => setVideoUrl(id, media_type)}
              color="secondary"
              className={classes.btn}
            />
          </Grid>
          <Grid item>
            <Info
              color="secondary"
              className={classes.btn}
              onClick={() => setInfoContent(data)}
            />
          </Grid>
          <Grid item>
            <Add
              color="secondary"
              className={classes.btn}
              //  onClick={() => addMyList({ data })}
            />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default VideoCard;
