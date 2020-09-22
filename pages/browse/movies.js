import { Typography } from "@material-ui/core";
import Layout from "components/layout/Layout";

const Movies = () => {
  return (
    <Layout title="S-A-FLIX" description="This is a Netflix Clone Application.">
      <Typography variant="h1" align="center" style={{ margin: "5em 0" }}>
        Movies
      </Typography>
    </Layout>
  );
};

export default Movies;
