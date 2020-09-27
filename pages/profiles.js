import Layout from "components/layout/Layout";
import Redirect from "components/Redirect";
import ProfileLists from "components/ProfileLists";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/user/userSelector";
const Profiles = () => {
  const user = useSelector(selectCurrentUser);

  if (!user) {
    return <Redirect to="/" />;
  }
  return (
    <Layout
      title="S-A-FLIX"
      description="This is a Netflix Clone Application."
      hide
    >
      <ProfileLists />
    </Layout>
  );
};

export default Profiles;
