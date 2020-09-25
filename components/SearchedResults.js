import { Grid } from "@material-ui/core";
import VideoCard from "components/VideoCard";

const SearchedResults = ({ data }) => {
  return (
    <Grid container>
      {data.map((d, idx) => (
        <Grid
          item
          key={idx}
          xs={6}
          sm={4}
          md={3}
          lg={2}
          style={{ marginBottom: "60px" }}
        >
          <VideoCard data={d} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SearchedResults;
