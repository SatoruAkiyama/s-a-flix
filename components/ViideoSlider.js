import { Typography, Container } from "@material-ui/core";
import VideoCard from "components/VideoCard";
import Slider from "components/Slider";

const VideoSlider = ({ data, title, poster }) => {
  const videosSlider = data.map((d, idx) => (
    <VideoCard key={idx} data={d} poster={poster} />
  ));
  return (
    <Container maxWidth="xl" style={{ marginBottom: "90px" }}>
      <Typography variant="h2" style={{ marginBottom: "20px" }}>
        {title}
      </Typography>

      <Slider elements={videosSlider} />
    </Container>
  );
};

export default VideoSlider;
