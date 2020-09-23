import { useContext } from "react";
import ReactPlayer from "react-player";
import { ModalContext } from "providers/modal.provider";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from "@material-ui/core";

export default function ModalVideo() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const { video, movieModal, closeMovieModal } = useContext(ModalContext);

  return (
    <div>
      <Dialog
        open={movieModal}
        onClose={closeMovieModal}
        fullScreen={matchesXS}
        PaperProps={{
          style: {
            padding: 0,
            backgroundColor: "#000",
            height: "75vh",
            border: "1px solid #fff",
          },
        }}
        fullWidth
        maxWidth="md"
      >
        <DialogContent>
          <DialogActions style={{ padding: "0 0 15px" }}>
            <Button onClick={closeMovieModal}>Close</Button>
          </DialogActions>
          {video ? (
            <ReactPlayer
              url={video}
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
