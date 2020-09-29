import Layout from "components/layout/Layout";
import PageHeader from "components/PageHeader";
import VideoSlider from "components/ViideoSlider";
import Redirect from "components/Redirect";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/user/userSelector";
import { getPopularMoviesWithKids, getPopularTVWithKids } from "lib/api";

export async function getStaticProps() {
  const popularMovies = await getPopularMoviesWithKids();
  const populartTv = await getPopularTVWithKids();
  return {
    revalidate: 1,
    props: {
      popularMovies,
      populartTv,
    },
  };
}

const Home = ({ popularMovies, populartTv }) => {
  const user = useSelector(selectCurrentUser);
  if (!user) {
    return <Redirect to="/" />;
  }
  return (
    <Layout
      title="KIDS | S-A-flix | Netflix Clone"
      description="This is a Netflix Clone Application."
    >
      <PageHeader data={popularMovies[0]} />
      {popularMovies && (
        <VideoSlider
          data={popularMovies.slice(1, 20)}
          title="Popular Movies With Kids"
        />
      )}
      {populartTv && (
        <VideoSlider data={populartTv} title="Popular TV Shows With Kids" />
      )}
    </Layout>
  );
};

export default Home;
