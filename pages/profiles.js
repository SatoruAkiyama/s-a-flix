import { Typography } from "@material-ui/core";

import Layout from "components/layout/Layout";
import Redirect from "components/Redirect";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/user/userSelector";
import { useRouter } from "next/router";
const Profiles = () => {
  const router = useRouter();
  const user = useSelector(selectCurrentUser);
  if (!user) {
    return <Redirect to="/" />;
  }
  return (
    <Layout title="S-A-FLIX" description="This is a Netflix Clone Application.">
      <Typography variant="h1" align="center" style={{ margin: "5em 0" }}>
        Who is watching?
      </Typography>
      <Typography align="center" onClick={() => router.push("/browse")}>
        Home
      </Typography>
    </Layout>
  );
};

export default Profiles;
