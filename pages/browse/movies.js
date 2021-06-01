import { useState, useEffect } from "react";
import Layout from "components/layout/Layout";
import PageHeader from "components/PageHeader";
import VideoSlider from "components/ViideoSlider";
import Redirect from "components/Redirect";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/user/userSelector";
import { getMovieByGenre } from "lib/api";

export async function getStaticProps() {
  const romance = await getMovieByGenre(10749);
  return {
    revalidate: 1,
    props: {
      romance,
    },
  };
}

const Home = ({ romance }) => {
  const [action, setAction] = useState(false);
  const [adventure, setadventure] = useState(false);
  const [animation, setanimation] = useState(false);
  const [comedy, setComedy] = useState(false);
  const [crime, setCrime] = useState(false);
  const [documentary, setDocumentary] = useState(false);
  const [drama, setDrama] = useState(false);
  const [family, setFamily] = useState(false);
  const [fantasy, setFantasy] = useState(false);
  const [mystery, setMistery] = useState(false);
  const [war, setWar] = useState(false);
  const [tvMovie, setTvmovie] = useState(false);
  const [thriller, setThriller] = useState(false);
  const [western, setWestern] = useState(false);
  const [horror, setHorror] = useState(false);
  const [history, setHistory] = useState(false);
  const [music, setMusic] = useState(false);
  const [scienceFiction, setScienceFiction] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const action = await getMovieByGenre(28);
      setAction(action);
      const adventure = await getMovieByGenre(12);
      setadventure(adventure);
      const animation = await getMovieByGenre(16);
      setanimation(animation);
      const comedy = await getMovieByGenre(35);
      setComedy(comedy);
      const crime = await getMovieByGenre(80);
      setCrime(crime);
      const documentary = await getMovieByGenre(99);
      setDocumentary(documentary);
      const drama = await getMovieByGenre(18);
      setDrama(drama);
      const family = await getMovieByGenre(10751);
      setFamily(family);
      const fantasy = await getMovieByGenre(14);
      setFantasy(fantasy);
      const horror = await getMovieByGenre(27);
      setHorror(horror);
      const history = await getMovieByGenre(36);
      setHistory(history);
      const music = await getMovieByGenre(10402);
      setMusic(music);
      const mystery = await getMovieByGenre(9648);
      setMistery(mystery);
      const scienceFiction = await getMovieByGenre(878);
      setScienceFiction(scienceFiction);
      const thriller = await getMovieByGenre(53);
      setThriller(thriller);
      const tvMovie = await getMovieByGenre(10770);
      setTvmovie(tvMovie);
      const war = await getMovieByGenre(10752);
      setWar(war);
      const western = await getMovieByGenre(37);
      setWestern(western);
    };
    fetchData();
  }, []);
  const user = useSelector(selectCurrentUser);
  if (!user) {
    return <Redirect to="/" />;
  }
  return (
    <Layout
      title="Movies | S-A-flix | Netflix Clone"
      description="This is a Netflix Clone Application."
    >
      <PageHeader data={romance[0]} />
      <VideoSlider data={action} title="Action" />
      <VideoSlider data={adventure} title="Adventure" />
      <VideoSlider data={animation} title="Animation" />
      <VideoSlider data={comedy} title="Comedy" />
      <VideoSlider data={crime} title="Crime" />
      <VideoSlider data={documentary} title="Documentary" />
      <VideoSlider data={drama} title="Drama" />
      <VideoSlider data={family} title="Family" />
      <VideoSlider data={fantasy} title="Fantasy" />
      <VideoSlider data={horror} title="Horror" />
      <VideoSlider data={history} title="History" />
      <VideoSlider data={music} title="Music" />
      <VideoSlider data={mystery} title="Mystery" />
      <VideoSlider data={romance} title="Romance" />
      <VideoSlider data={scienceFiction} title="Science Fiction" />
      <VideoSlider data={thriller} title="Thriller" />
      <VideoSlider data={tvMovie} title="TV Movies" />
      <VideoSlider data={war} title="War" />
      <VideoSlider data={western} title="Western" />
    </Layout>
  );
};

export default Home;
