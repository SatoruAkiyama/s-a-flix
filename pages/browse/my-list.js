import Layout from "components/layout/Layout";
import Redirect from "components/Redirect";
import MyListCards from "components/MyListCards";

import { useSelector } from "react-redux";
import { selectMyList, selectCurrentUser } from "redux/user/userSelector";

const MyList = () => {
  const myList = useSelector(selectMyList);
  const user = useSelector(selectCurrentUser);
  if (!user) {
    return <Redirect to="/" />;
  }
  return (
    <Layout title="S-A-FLIX" description="This is a Netflix Clone Application.">
      <MyListCards data={myList} />
    </Layout>
  );
};

export default MyList;
