import Layout from "components/layout/Layout";
import ManageProfileForm from "components/ManageProfileForm";
import Redirect from "components/Redirect";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/user/userSelector";

export async function getServerSideProps({ params }) {
  const id = await params.id;
  return {
    props: { id },
  };
}

const ManageProfileDetailPage = ({ id }) => {
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
      <ManageProfileForm id={id} />
    </Layout>
  );
};

export default ManageProfileDetailPage;
