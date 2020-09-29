import Layout from "components/layout/Layout";
import Redirect from "components/Redirect";
import AccountInfo from "components/AccountInfo";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/user/userSelector";
const ManageProfiles = () => {
  const user = useSelector(selectCurrentUser);

  if (!user) {
    return <Redirect to="/login" />;
  }
  return (
    <Layout title="S-A-FLIX" description="This is a Netflix Clone Application.">
      <AccountInfo />
    </Layout>
  );
};

export default ManageProfiles;
