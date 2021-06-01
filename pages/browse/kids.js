import { useState, useEffect } from "react";
import Layout from "components/layout/Layout";
import PageHeader from "components/PageHeader";
import VideoSlider from "components/ViideoSlider";
import Redirect from "components/Redirect";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/user/userSelector";
import { getPopularMoviesWithKids, getPopularTVWithKids } from "lib/api";

export async function getStaticProps() {
  const popularMovies = await getPopularMoviesWithKids();
  return {
    revalidate: 1,
    props: {
      popularMovies,
    },
  };
}

const Home = ({ popularMovies }) => {
  const [populartTv, setPopulartTv] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const populartTv = await getPopularTVWithKids();
      setPopulartTv(populartTv);
    };
    fetchData();
  }, []);
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
      <VideoSlider data={populartTv} title="Popular TV Shows With Kids" />
    </Layout>
  );
};

export default Home;
