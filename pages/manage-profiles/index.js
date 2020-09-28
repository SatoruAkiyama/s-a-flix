import Layout from "components/layout/Layout";
import Redirect from "components/Redirect";
import ManageProfileLists from "components/ManageProfileLists";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/user/userSelector";
const ManageProfiles = () => {
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
      <ManageProfileLists />
    </Layout>
  );
};

export default ManageProfiles;
