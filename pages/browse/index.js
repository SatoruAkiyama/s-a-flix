import Layout from "components/layout/Layout";
import PageHeader from "components/PageHeader";

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
  // const trending = await getTrendingMovies();
  // const topRatedMovies = await getTopRatedMovies();
  // const topRatedTv = await getTopRatedTv();
  // const popularMovies = await getPopularMovies();
  // const popularTv = await getPopularTv();
  const originals = await getOriginals();
  // const newReleases = await getNewReleases();
  return {
    revalidate: 1,
    props: {
      // trending,
      // topRatedMovies,
      // topRatedTv,
      // popularMovies,
      // popularTv,
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
      <PageHeader data={originals[8]} media_type={`tv`} />
    </Layout>
  );
};

export default Home;
