import { useContext } from "react";
import ReactPlayer from "react-player";
import { ModalContext } from "providers/modal.provider";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiDialogContent-root": {
      backgroundColor: "#000",
      height: "70vh",
    },
  },
}));

export default function ModalVideo() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const { video, movieModal, closeMovieModal } = useContext(ModalContext);

  return (
    <div className={classes.root}>
      <Dialog
        open={movieModal}
        onClose={closeMovieModal}
        fullScreen={matchesXS}
        PaperProps={{
          style: {
            padding: 0,
            backgroundColor: "#000",
            height: "70vh",
          },
        }}
        fullWidth
        maxWidth="md"
      >
        <DialogContent>
          <DialogActions>
            <Button onClick={closeMovieModal}>Close</Button>
          </DialogActions>
          {video ? (
            <ReactPlayer
              url={video}
              className={classes.videoPlayer}
              playing
              playsinline
              controls
              config={{
                youtube: {
                  playerVars: { showinfo: 1 },
                },
              }}
              width="100%"
              height="90%"
            />
          ) : (
            <DialogContentText>Loading</DialogContentText>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
