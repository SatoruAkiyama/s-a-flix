import { Typography, Container } from "@material-ui/core";
import VideoCard from "components/VideoCard";
import Slider from "components/Slider";

const VideoSlider = ({ data, title, poster, id }) => {
  const initialData = [
    { _id: 0, poster },
    { _id: 1, poster },
    { _id: 2, poster },
    { _id: 3, poster },
    { _id: 4, poster },
    { _id: 5, poster },
  ];

  const videosSlider = data
    ? data.map((d, idx) => <VideoCard key={idx} data={d} poster={poster} />)
    : initialData.map(({ _id, poster }) => (
        <VideoCard key={_id} data={false} poster={poster} />
      ));
  return (
    <Container maxWidth="xl" style={{ marginBottom: "90px" }}>
      <Typography
        variant="h2"
        style={{ marginBottom: "20px" }}
        id={id ? id : ""}
      >
        {title}
      </Typography>

      <Slider elements={videosSlider} />
    </Container>
  );
};

export default VideoSlider;
