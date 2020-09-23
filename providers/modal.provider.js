import { createContext, useState } from "react";
import { getVideo } from "lib/api";

export const ModalContext = createContext({
  video: "",
  movieModal: false,
  setVideoUrl: () => {},
  closeMovieModal: () => {},

  info: {},
  infoModal: false,
  setInfoContent: () => {},
  closeInfoModal: () => {},
});

const ModalProvider = ({ children }) => {
  const [video, setVideo] = useState("");
  const [movieModal, setMovieModal] = useState(false);
  const setVideoUrl = async (id, type) => {
    const videoUrl = await getVideo(id, type);
    await setVideo(videoUrl);
    setMovieModal(true);
  };
  const closeMovieModal = () => setMovieModal(false);

  const [info, setInfo] = useState({});
  const [infoModal, setInfoModal] = useState(false);
  const setInfoContent = async (infoObj) => {
    await setInfo(infoObj);
    setInfoModal(true);
  };
  const closeInfoModal = () => setInfoModal(false);

  return (
    <ModalContext.Provider
      value={{
        video,
        movieModal,
        setVideoUrl,
        closeMovieModal,

        info,
        infoModal,
        setInfoContent,
        closeInfoModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
