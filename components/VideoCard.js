import { makeStyles } from "@material-ui/core/styles";
import { PlayArrow, Info, Add, Check } from "@material-ui/icons";
import {
  Grid,
  CircularProgress,
  Card,
  CardActions,
  Typography,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCurrentUserId,
  selectChoseProfile,
  selectMyListId,
} from "redux/user/userSelector";
import { setMyList } from "redux/user/userActions";
import { addMyList, removeMyList } from "firebase/util";

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

    "&.MuiSkeleton-root": {
      backgroundColor: "rgb(255 255 255 / 14%)",
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

    "&.MuiSkeleton-root": {
      backgroundColor: "rgb(255 255 255 / 14%)",
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
    padding: "40px 20px 0",
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
  already_add__btn: {
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.success.main,
    },
  },
}));

const VideoCard = ({ data, poster }) => {
  const classes = useStyles();
  const imageUrl = "https://image.tmdb.org/t/p/w300";

  const { backdrop_path, media_type, id, title, name, poster_path } = data;
  const { setVideoUrl, setInfoContent } = useContext(ModalContext);

  // add my list
  const [sending, setSending] = useState(false);
  const userId = useSelector(selectCurrentUserId);
  const chosePlofile = useSelector(selectChoseProfile);
  const myListId = useSelector(selectMyListId);
  const dispatch = useDispatch();
  const handleAdd = async () => {
    setSending(true);
    const myList = await addMyList(userId, chosePlofile, data);
    dispatch(setMyList(myList));
    if (myList !== "error") {
      setSending(false);
      dispatch(setMyList(myList));
    } else {
      alert("There is some error");
    }
  };

  // remove my list
  const handleRemove = async () => {
    setSending(true);
    const myList = await removeMyList(userId, chosePlofile, data);
    if (myList !== "error") {
      setSending(false);
      dispatch(setMyList(myList));
    } else {
      alert("There is some error");
    }
  };
  return data ? (
    <Card className={poster ? classes.poster__root : classes.root}>
      <div
        className={classes.img}
        style={{
          backgroundImage: backdrop_path
            ? `url(${imageUrl}${poster ? poster_path : backdrop_path})`
            : poster_path
            ? `url(${imageUrl}${poster_path})`
            : null,
        }}
        onClick={() => setInfoContent({ ...data })}
      >
        {!backdrop_path && !poster_path && (
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
            {myListId?.includes(id) ? (
              <Check
                color="secondary"
                className={classes.already_add__btn}
                onClick={handleRemove}
              />
            ) : sending ? (
              <CircularProgress size={20} color="secondary" />
            ) : (
              <Add
                color="secondary"
                className={classes.btn}
                onClick={handleAdd}
              />
            )}
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  ) : (
    <Skeleton
      className={poster ? classes.poster__root : classes.root}
      animation="wave"
      variant="rect"
    />
  );
};

export default VideoCard;
