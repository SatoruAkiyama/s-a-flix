import Layout from "components/layout/Layout";
import IndexTop from "components/IndexTop";
import OurStories from "components/OurStories";
import Faq from "components/Faq";

const About = () => {
  return (
    <Layout
      title="S-A-flix | Netflix Clone"
      description="This is a Netflix Clone Application."
    >
      <IndexTop />
      <OurStories />
      <Faq />
    </Layout>
  );
};

export default About;
