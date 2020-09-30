import { useContext } from "react";
import ReactPlayer from "react-player/youtube";
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
            height: matchesXS ? "100vh" : "75vh",
            border: matchesXS ? "none" : "1px solid #fff",
          },
        }}
        fullWidth
        maxWidth="md"
      >
        <DialogContent
          style={{
            textAlign: matchesXS && "center",
            position: matchesXS && "absolute",
            top: matchesXS && "45%",
            left: matchesXS && "50%",
            transform: matchesXS && "translate(-50%,-45%)",
            width: matchesXS && "100%",
          }}
        >
          <DialogActions style={{ padding: "0 0 15px" }}>
            <Button onClick={closeMovieModal}>Close</Button>
          </DialogActions>
          {video === "noVideo" ? (
            // in preparation for the case when there are no video
            <DialogContentText
              color="secondary"
              style={{
                textAlign: "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: "100%",
              }}
            >
              Sorry, there is no video.
            </DialogContentText>
          ) : (
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
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
