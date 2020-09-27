import { Typography } from "@material-ui/core";
import Layout from "components/layout/Layout";
import Redirect from "components/Redirect";
import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectChoseProfileInfo,
  selectCurrentUserId,
  selectChoseProfile,
} from "redux/user/userSelector";

import { getMyList } from "firebase/util";

import { useEffect, useState } from "react";

const MyList = () => {
  // const choseProfileInfo = useSelector(selectChoseProfileInfo);
  // const [myList, setMyLists] = useState(undefined);
  // console.log(myList);
  // const userId = useSelector(selectCurrentUserId);
  // useEffect(() => {
  // const fetchData = async () => {
  //   const data = getMyList(userId, 0);
  //   setMyLists(data);
  // };
  // fetchData();
  //   getMyList(userId, 0);
  // }, [userId]);
  // console.log(myList);
  // const user = useSelector(selectCurrentUserId);
  // if (!user) {
  //   return <Redirect to="/" />;
  // }
  return (
    <Layout title="S-A-FLIX" description="This is a Netflix Clone Application.">
      {/* {myList?.length > 0 ? (
        <Typography variant="h1" align="center" style={{ margin: "5em 0" }}>
          You can watch youtube
        </Typography>
      ) : (
        <Typography variant="h1" align="center" style={{ margin: "5em 0" }}>
          There is no My List...
        </Typography>
      )} */}
      <Typography variant="h3" align="center" style={{ margin: "30% 0 20%" }}>
        You have not added anything to{" "}
        <span style={{ fontWeight: 900 }}> My List </span> yet.
      </Typography>
    </Layout>
  );
};

export default MyList;
