import { useState, useEffect } from "react";
import Layout from "components/layout/Layout";
import PageHeader from "components/PageHeader";
import VideoSlider from "components/ViideoSlider";
import Redirect from "components/Redirect";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/user/userSelector";
import { getTvByGenre } from "lib/api";

export async function getStaticProps() {
  const SciFiAndFantasy = await getTvByGenre(10765);
  return {
    revalidate: 1,
    props: {
      SciFiAndFantasy,
    },
  };
}

const Home = ({ SciFiAndFantasy }) => {
  const [actionAndAdventure, setActionAndAdventure] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [comedy, setComedy] = useState(false);
  const [crime, setCrime] = useState(false);
  const [documentary, setDocumentary] = useState(false);
  const [drama, setDrama] = useState(false);
  const [family, setFamily] = useState(false);
  const [kids, setKids] = useState(false);
  const [mystery, setmystery] = useState(false);
  const [news, setnews] = useState(false);
  const [reality, setreality] = useState(false);
  const [soap, setsoap] = useState(false);
  const [talk, settalk] = useState(false);
  const [warAndPolitics, setwarAndPolitics] = useState(false);
  const [western, setwestern] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const actionAndAdventure = await getTvByGenre(10759);
      setActionAndAdventure(actionAndAdventure);
      const animation = await getTvByGenre(16);
      setAnimation(animation);
      const comedy = await getTvByGenre(35);
      setComedy(comedy);
      const crime = await getTvByGenre(80);
      setCrime(crime);
      const documentary = await getTvByGenre(99);
      setDocumentary(documentary);
      const drama = await getTvByGenre(18);
      setDrama(drama);
      const family = await getTvByGenre(10751);
      setFamily(family);
      const kids = await getTvByGenre(10762);
      setKids(kids);
      const mystery = await getTvByGenre(9648);
      setmystery(mystery);
      const news = await getTvByGenre(10763);
      setnews(news);
      const reality = await getTvByGenre(10764);
      setreality(reality);
      const soap = await getTvByGenre(10766);
      setsoap(soap);
      const talk = await getTvByGenre(10767);
      settalk(talk);
      const warAndPolitics = await getTvByGenre(10768);
      setwarAndPolitics(warAndPolitics);
      const western = await getTvByGenre(37);
      setwestern(western);
    };
    fetchData();
  }, []);

  const user = useSelector(selectCurrentUser);
  if (!user) {
    return <Redirect to="/" />;
  }
  return (
    <Layout
      title="TV Shows | S-A-flix | Netflix Clone"
      description="This is a Netflix Clone Application."
    >
      {SciFiAndFantasy && <PageHeader data={SciFiAndFantasy[0]} />}
      <VideoSlider data={actionAndAdventure} title="Action & Adventure" />
      <VideoSlider data={animation} title="Animation" />
      <VideoSlider data={comedy} title="Comedy" />
      <VideoSlider data={crime} title="Crime" />
      <VideoSlider data={documentary} title="Documentary" />
      <VideoSlider data={drama} title="Drama" />
      <VideoSlider data={family} title="Family" />
      <VideoSlider data={kids} title="Kids" />
      <VideoSlider data={mystery} title="Mystery" />
      <VideoSlider data={news} title="News" />
      <VideoSlider data={reality} title="Reality" />
      <VideoSlider data={SciFiAndFantasy} title="Sci-Fi & Fantasy" />
      <VideoSlider data={soap} title="Soap" />
      <VideoSlider data={talk} title="Talk" />
      <VideoSlider data={warAndPolitics} title="War & Politics" />
      <VideoSlider data={western} title="Western" />
    </Layout>
  );
};

export default Home;
