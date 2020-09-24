import Layout from "components/layout/Layout";
import PageHeader from "components/PageHeader";
import VideoSlider from "components/ViideoSlider";

import { getLatestMovies, getLatestTv } from "lib/api";

export async function getStaticProps() {
  const latestMovies = await getLatestMovies(28);
  const latestTv = await getLatestTv(12);
  return {
    revalidate: 1,
    props: {
      latestMovies,
      latestTv,
    },
  };
}

const Home = ({ latestMovies, latestTv }) => {
  return (
    <Layout
      title="Latest | S-A-flix | Netflix Clone"
      description="This is a Netflix Clone Application."
    >
      <PageHeader data={latestMovies[0]} />
      {latestMovies && (
        <VideoSlider data={latestMovies.slice(1, 20)} title="Latest Movies" />
      )}
      {latestTv && <VideoSlider data={latestTv} title="Latest TV Shows" />}
    </Layout>
  );
};

export default Home;
