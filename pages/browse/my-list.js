import { Typography } from "@material-ui/core";
import Layout from "components/layout/Layout";
import Redirect from "components/Redirect";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/user/userSelector";
const MyList = () => {
  const user = useSelector(selectCurrentUser);
  if (!user) {
    return <Redirect to="/" />;
  }
  return (
    <Layout title="S-A-FLIX" description="This is a Netflix Clone Application.">
      <Typography variant="h1" align="center" style={{ margin: "5em 0" }}>
        MyList
      </Typography>
    </Layout>
  );
};

export default MyList;
