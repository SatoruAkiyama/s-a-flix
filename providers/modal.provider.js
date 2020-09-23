import { createContext, useState } from "react";
import { getVideo } from "lib/api";

export const ModalContext = createContext({
  video: "",
  movieModal: false,
  setVideoUrl: () => {},
  closeMovieModal: () => {},

  // info: "",
  // setInfo: () => {},
});

const ModalProvider = ({ children }) => {
  const [video, setVideo] = useState("");
  const [movieModal, setMovieModalHidden] = useState(false);
  const setVideoUrl = async (id, type) => {
    const videoUrl = await getVideo(id, type);
    await setVideo(videoUrl);
    setMovieModalHidden(true);
    console.log(video);
  };
  const closeMovieModal = () => setMovieModalHidden(false);
  return (
    <ModalContext.Provider
      value={{
        video,
        movieModal,
        setVideoUrl,
        closeMovieModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
