import { Typography, Container } from "@material-ui/core";
import Layout from "components/layout/Layout";

const Soory = () => {
  return (
    <Layout title="S-A-FLIX" description="This is a Netflix Clone Application.">
      <Container maxWidth="md">
        <Typography variant="h1" align="center" style={{ margin: "3em 0 2em" }}>
          Sorry, I have not build this page yet.
        </Typography>
        <Typography variant="body1" style={{ marginBottom: "5em" }}>
          I built S-A-flix which is a "Netflix Clone Application" to improve my
          Skill. I want to improve my React, Next.js, Redux, Firebase and
          Material-UI skills. I thought making this page is not suitable for my
          purpose at the time. So, I have not build this page yet. But I will
          make this page too in the future.
        </Typography>
      </Container>
    </Layout>
  );
};

export default Soory;
