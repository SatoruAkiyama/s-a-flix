import { Typography } from "@material-ui/core";
import Layout from "components/layout/Layout";

const Home = () => {
  return (
    <Layout title="S-A-FLIX" description="This is a Netflix Clone Application.">
      <Typography variant="h1" align="center" style={{ margin: "5em 0" }}>
        Home
      </Typography>
    </Layout>
  );
};

export default Home;
