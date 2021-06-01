import { useState, useEffect } from "react";
import Layout from "components/layout/Layout";
import PageHeader from "components/PageHeader";
import VideoSlider from "components/ViideoSlider";
import Redirect from "components/Redirect";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/user/userSelector";

import {
  getTrendingMovies,
  getTopRatedMovies,
  getPopularMovies,
  getPopularTv,
  getOriginals,
  getComedies,
  getDocumentaries,
  getMovieByGenre,
  getTvByGenre,
} from "lib/api";

export async function getStaticProps() {
  const trending = await getTrendingMovies();

  return {
    revalidate: 1,
    props: {
      trending,
    },
  };
}

const Home = ({ trending }) => {
  const [topRatedMovies, setTopRatedMovies] = useState(false);
  const [popularMovies, setPopularMovies] = useState(false);
  const [popularTv, setPopularTv] = useState(false);
  const [originals, setOriginals] = useState(false);
  const [comedies, setComedies] = useState(false);
  const [documentaries, setDocumentaries] = useState(false);
  const [romance, setRomance] = useState(false);
  const [reality, setReality] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const topRatedMovies = await getTopRatedMovies();
      setTopRatedMovies(topRatedMovies);
      const popularMovies = await getPopularMovies();
      setPopularMovies(popularMovies);
      const popularTv = await getPopularTv();
      setPopularTv(popularTv);
      const originals = await getOriginals();
      setOriginals(originals);
      const romance = await getMovieByGenre(10749);
      setRomance(romance);
      const reality = await getTvByGenre(10764);
      setReality(reality);
      const comedies = await getComedies();
      setComedies(comedies);
      const documentaries = await getDocumentaries();
      setDocumentaries(documentaries);
    };
    fetchData();
  }, []);
  const user = useSelector(selectCurrentUser);
  if (!user) {
    return <Redirect to="/" />;
  }
  return (
    <Layout
      title="S-A-flix | Netflix Clone"
      s
      description="This is a Netflix Clone Application."
    >
      {trending && <PageHeader data={trending[0]} />}
      <VideoSlider
        data={trending ? trending.slice(1, 20) : false}
        title="Trending Now"
      />
      <VideoSlider data={topRatedMovies} title="Top Rated" />
      <VideoSlider data={popularMovies} title="Popular Movies" />
      <VideoSlider data={popularTv} title="Popular TV Shows" />
      <VideoSlider data={originals} title="Originals" poster id="originals" />
      <VideoSlider data={romance} title="Romantic Movies" />
      <VideoSlider data={reality} title="Reality TV Shows" />
      <VideoSlider data={comedies} title="Comedies" />
      <VideoSlider data={documentaries} title="Documentaries" />
    </Layout>
  );
};

export default Home;
