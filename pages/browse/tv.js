import Layout from "components/layout/Layout";
import PageHeader from "components/PageHeader";
import VideoSlider from "components/ViideoSlider";

import { getTvByGenre } from "lib/api";

export async function getStaticProps() {
  const actionAndAdventure = await getTvByGenre(10759);
  const animation = await getTvByGenre(16);
  const comedy = await getTvByGenre(35);
  const crime = await getTvByGenre(80);
  const documentary = await getTvByGenre(99);
  const drama = await getTvByGenre(18);
  const family = await getTvByGenre(10751);
  const kids = await getTvByGenre(10762);
  const mystery = await getTvByGenre(9648);
  const news = await getTvByGenre(10763);
  const reality = await getTvByGenre(10764);
  const SciFiAndFantasy = await getTvByGenre(10765);
  const soap = await getTvByGenre(10766);
  const talk = await getTvByGenre(10767);
  const warAndPolitics = await getTvByGenre(10768);
  const western = await getTvByGenre(37);
  return {
    revalidate: 1,
    props: {
      actionAndAdventure,
      animation,
      comedy,
      crime,
      documentary,
      drama,
      family,
      kids,
      mystery,
      news,
      reality,
      SciFiAndFantasy,
      soap,
      talk,
      warAndPolitics,
      western,
    },
  };
}

const Home = ({
  actionAndAdventure,
  animation,
  comedy,
  crime,
  documentary,
  drama,
  family,
  kids,
  mystery,
  news,
  reality,
  SciFiAndFantasy,
  soap,
  talk,
  warAndPolitics,
  western,
}) => {
  return (
    <Layout
      title="TV Shows | S-A-flix | Netflix Clone"
      description="This is a Netflix Clone Application."
    >
      <PageHeader data={SciFiAndFantasy[0]} />
      {actionAndAdventure && (
        <VideoSlider data={actionAndAdventure} title="Action & Adventure" />
      )}
      {animation && <VideoSlider data={animation} title="Animation" />}
      {comedy && <VideoSlider data={comedy} title="Comedy" />}
      {crime && <VideoSlider data={crime} title="Crime" />}
      {documentary && <VideoSlider data={documentary} title="Documentary" />}
      {drama && <VideoSlider data={drama} title="Drama" />}
      {family && <VideoSlider data={family} title="Family" />}
      {kids && <VideoSlider data={kids} title="Kids" />}
      {mystery && <VideoSlider data={mystery} title="Mystery" />}
      {news && <VideoSlider data={news} title="News" />}
      {reality && <VideoSlider data={reality} title="Reality" />}
      {SciFiAndFantasy && (
        <VideoSlider data={SciFiAndFantasy} title="Sci-Fi & Fantasy" />
      )}
      {soap && <VideoSlider data={soap} title="Soap" />}
      {talk && <VideoSlider data={talk} title="Talk" />}
      {warAndPolitics && (
        <VideoSlider data={warAndPolitics} title="War & Politics" />
      )}
      {western && <VideoSlider data={western} title="Western" />}
    </Layout>
  );
};

export default Home;
