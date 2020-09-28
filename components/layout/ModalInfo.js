import { useContext, useState } from "react";
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
  CircularProgress,
} from "@material-ui/core";

import { PlayArrow, Add, Check } from "@material-ui/icons";

import { useSelector, useDispatch } from "react-redux";
import {
  selectCurrentUserId,
  selectChoseProfile,
  selectMyListId,
} from "redux/user/userSelector";
import { setMyList } from "redux/user/userActions";
import { addMyList, removeMyList } from "firebase/util";

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
  },
  inner: {
    backgroundImage:
      "linear-gradient(to top,rgba(0,0,0) 0,rgba(0,0,0,0) 40%,rgb(0 0 0 / 20%) 100%)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "400px",
  },
  content: {
    height: "100%",
    position: "relative",
    zIndex: "10",
    paddingBottom: "15px",
    [theme.breakpoints.down("sm")]: {
      height: "90%",
    },
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
  already_add__btn: {
    height: " 40px",
    background: "#26ff2fd4",
    "&.MuiButton-root:hover": {
      background: "#26ff2f80 !important",
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
  const {
    backdrop_path,
    title,
    name,
    overview,
    id,
    vote_average,
    first_air_date,
    media_type,
    poster_path,
  } = info;
  const imageUrl = "https://image.tmdb.org/t/p/w1280";

  // add my list
  const [sending, setSending] = useState(false);
  const userId = useSelector(selectCurrentUserId);
  const chosePlofile = useSelector(selectChoseProfile);
  const myListId = useSelector(selectMyListId);
  const dispatch = useDispatch();
  const handleAdd = async () => {
    setSending(true);
    const myList = await addMyList(userId, chosePlofile, info);
    if (myList !== "error") {
      setSending(false);
      dispatch(setMyList(myList));
    } else {
      alert("There is some error");
    }
  };

  // remove
  const handleRemove = async () => {
    setSending(true);
    const myList = await removeMyList(userId, chosePlofile, info);
    if (myList !== "error") {
      setSending(false);
      dispatch(setMyList(myList));
    } else {
      alert("There is some error");
    }
  };

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
        scroll={matchesXS ? "body" : "paper"}
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
              backgroundImage: backdrop_path
                ? `url(${imageUrl}${backdrop_path})`
                : `url(${imageUrl}${poster_path})`,
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
              style={{ height: "100%", marginTop: matchesXS && "300px" }}
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
                  {myListId?.includes(id) ? (
                    <Button
                      className={classes.already_add__btn}
                      startIcon={<Check />}
                      onClick={handleRemove}
                    >
                      Remove
                    </Button>
                  ) : sending ? (
                    <Button className={classes.add__btn}>
                      <CircularProgress size={20} color="secondary" />
                    </Button>
                  ) : (
                    <Button
                      className={classes.add__btn}
                      startIcon={<Add />}
                      onClick={handleAdd}
                    >
                      My List
                    </Button>
                  )}
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
                    {first_air_date?.substr(0, 4)}
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
