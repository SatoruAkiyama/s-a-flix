import Layout from "components/layout/Layout";
import PageHeader from "components/PageHeader";
import VideoSlider from "components/ViideoSlider";
import Redirect from "components/Redirect";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/user/userSelector";
import { getMovieByGenre } from "lib/api";

export async function getStaticProps() {
  const action = await getMovieByGenre(28);
  const adventure = await getMovieByGenre(12);
  const animation = await getMovieByGenre(16);
  const comedy = await getMovieByGenre(35);
  const crime = await getMovieByGenre(80);
  const documentary = await getMovieByGenre(99);
  const drama = await getMovieByGenre(18);
  const family = await getMovieByGenre(10751);
  const fantasy = await getMovieByGenre(14);
  const horror = await getMovieByGenre(27);
  const history = await getMovieByGenre(36);
  const music = await getMovieByGenre(10402);
  const mystery = await getMovieByGenre(9648);
  const romance = await getMovieByGenre(10749);
  const scienceFiction = await getMovieByGenre(878);
  const thriller = await getMovieByGenre(53);
  const tvMovie = await getMovieByGenre(10770);
  const war = await getMovieByGenre(10752);
  const western = await getMovieByGenre(37);
  return {
    revalidate: 1,
    props: {
      action,
      adventure,
      animation,
      comedy,
      crime,
      documentary,
      drama,
      family,
      fantasy,
      horror,
      history,
      music,
      mystery,
      romance,
      scienceFiction,
      thriller,
      tvMovie,
      war,
      western,
    },
  };
}

const Home = ({
  action,
  adventure,
  animation,
  comedy,
  crime,
  documentary,
  drama,
  family,
  fantasy,
  horror,
  history,
  music,
  mystery,
  romance,
  scienceFiction,
  thriller,
  tvMovie,
  war,
  western,
}) => {
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
      {action && <VideoSlider data={action} title="Action" />}
      {adventure && <VideoSlider data={adventure} title="Adventure" />}
      {animation && <VideoSlider data={animation} title="Animation" />}
      {comedy && <VideoSlider data={comedy} title="Comedy" />}
      {crime && <VideoSlider data={crime} title="Crime" />}
      {documentary && <VideoSlider data={documentary} title="Documentary" />}
      {drama && <VideoSlider data={drama} title="Drama" />}
      {family && <VideoSlider data={family} title="Family" />}
      {fantasy && <VideoSlider data={fantasy} title="Fantasy" />}
      {horror && <VideoSlider data={horror} title="Horror" />}
      {history && <VideoSlider data={history} title="History" />}
      {music && <VideoSlider data={music} title="Music" />}
      {mystery && <VideoSlider data={mystery} title="Mystery" />}
      {romance && <VideoSlider data={romance} title="Romance" />}
      {scienceFiction && (
        <VideoSlider data={scienceFiction} title="Science Fiction" />
      )}
      {thriller && <VideoSlider data={thriller} title="Thriller" />}
      {tvMovie && <VideoSlider data={tvMovie} title="TV Movies" />}
      {war && <VideoSlider data={war} title="War" />}
      {western && <VideoSlider data={western} title="Western" />}
    </Layout>
  );
};

export default Home;
