import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";
import Me from "./Me";
import ModalVideo from "./ModalVideo";
import ModalInfo from "./ModalInfo";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectMyList,
  selectCurrentUserId,
  selectChoseProfile,
} from "redux/user/userSelector";
import { checkUserSession, setMyList } from "redux/user/userActions";

import { getMyList } from "firebase/util";

const Layout = ({ children, title, description, ogImage, url, hide }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const myList = useSelector(selectMyList);
  const userId = useSelector(selectCurrentUserId);
  const choseProfile = useSelector(selectChoseProfile);
  useEffect(() => {
    if (!user) {
      dispatch(checkUserSession());
    }
    if (user && !myList) {
      const fecthMyList = async () => {
        const myList = await getMyList(userId, choseProfile);
        dispatch(setMyList(myList));
      };
      fecthMyList();
    }
  }, [dispatch]);

  const pageUrl = "https://s-a-flix.vercel.app/";
  const ogImg = "https://i.imgur.com/2034yaU.png";

  return (
    <>
      <Head>
        <title>{title ? title : "S-A-flix | Netflix Clone"}</title>
        <meta
          name="description"
          key="description"
          content={
            description ? description : "This is a Netflix Clone Application."
          }
        />
        <meta
          property="og:title"
          content={title ? title : "S-A-flix | Netflix Clone"}
          key="og:title"
        />
        <meta property="og:url" content={url ? url : pageUrl} key="og:url" />
        <meta
          property="og:image"
          content={ogImage ? ogImage : ogImg}
          key="og:image"
        />
        <meta
          property="og:description"
          content={
            description ? description : "This is a Netflix Clone Application."
          }
          key="og:description"
        />
      </Head>
      {hide ? (
        <main>{children}</main>
      ) : (
        <>
          <Header />
          {user && <ModalVideo />}
          {user && <ModalInfo />}

          <main>{children}</main>
          <Footer />
          <Me />
        </>
      )}

      <style jsx global>
        {`
          html,
          body {
            background: #000 !important;
            color: #fff !important;
            overflow-x: hidden;
            padding: 0 !important;
          }
          #__next {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          main {
            flex: 1;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
