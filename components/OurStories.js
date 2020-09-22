import OurStoryCard from "components/OurStoryCard";
import { STORY_CARD_DATA } from "data/STORY_CARD_DATA";

import { Grid } from "@material-ui/core";

const OurStories = () => {
  const data = STORY_CARD_DATA;
  return (
    <Grid container direction="column" style={{ marginTop: "100vh" }}>
      {data.map((d) => (
        <Grid item key={d.title}>
          <OurStoryCard data={d} />
        </Grid>
      ))}
    </Grid>
  );
};

export default OurStories;
