import Layout from "components/layout/Layout";
import PageHeader from "components/PageHeader";
import VideoSlider from "components/ViideoSlider";
import Redirect from "components/Redirect";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/user/userSelector";
import { getLatestMovies, getLatestTv } from "lib/api";

export async function getStaticProps() {
  const latestMovies = await getLatestMovies();
  const latestTv = await getLatestTv();
  return {
    revalidate: 1,
    props: {
      latestMovies,
      latestTv,
    },
  };
}

const Home = ({ latestMovies, latestTv }) => {
  const user = useSelector(selectCurrentUser);
  if (!user) {
    return <Redirect to="/" />;
  }
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
