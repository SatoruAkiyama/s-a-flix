import Layout from "components/layout/Layout";
import PageHeader from "components/PageHeader";
import VideoSlider from "components/ViideoSlider";

import {
  getTrendingMovies,
  getTopRatedMovies,
  getTopRatedTv,
  getPopularMovies,
  getPopularTv,
  getOriginals,

  // getNewReleases,
} from "lib/api";

export async function getStaticProps() {
  const trending = await getTrendingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const topRatedTv = await getTopRatedTv();
  const popularMovies = await getPopularMovies();
  const popularTv = await getPopularTv();
  const originals = await getOriginals();
  // const newReleases = await getNewReleases();
  return {
    revalidate: 1,
    props: {
      trending,
      topRatedMovies,
      topRatedTv,
      popularMovies,
      popularTv,
      originals,
      // newReleases,
    },
  };
}

const Home = ({
  trending,
  topRatedMovies,
  topRatedTv,
  popularMovies,
  popularTv,
  originals,
}) => {
  // console.log("trending: ", trending);
  // console.log("top ratid movies: ", topRatedMovies);
  // console.log("top ratid tv: ", topRatedTv);
  // console.log("popular movies: ", popularMovies);
  // console.log("popular tv: ", popularTv);
  return (
    <Layout
      title="S-A-flix | Netflix Clone"
      description="This is a Netflix Clone Application."
    >
      <PageHeader data={originals[2]} />
      {trending && <VideoSlider data={trending} title="Trending Now" />}
      {topRatedMovies && (
        <VideoSlider data={topRatedMovies} title="Top Rated Movies" />
      )}
      {topRatedTv && (
        <VideoSlider data={topRatedTv} title="Top Rated TV Shows" />
      )}
      {popularMovies && (
        <VideoSlider data={popularMovies} title="Popular Movies" />
      )}
      {popularTv && <VideoSlider data={popularTv} title="Popular TV Shows" />}
      {originals && <VideoSlider data={originals} title="Originals" poster />}
    </Layout>
  );
};

export default Home;
