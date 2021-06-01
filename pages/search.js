import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  Typography,
  Container,
  CircularProgress,
  Grid,
} from "@material-ui/core";

import Layout from "components/layout/Layout";
import Redirect from "components/Redirect";
import SearchedResults from "components/SearchedResults";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/user/userSelector";
import { getMoviesAndTvByQuery } from "lib/api";

const SearchPage = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    setData(null);
    const getData = async () => {
      const data = await getMoviesAndTvByQuery(router.query.keyword);
      await setData(data);
    };
    getData();
  }, [router.query.keyword]);
  const user = useSelector(selectCurrentUser);
  if (!user) {
    return <Redirect to="/" />;
  }
  return (
    <Layout
      title="Search | S-A-flix | Netflix Clone"
      description="This is a Netflix Clone Application."
    >
      <Container maxWidth="xl" style={{ margin: "120px 0 10px" }}>
        {data ? (
          data.length > 0 ? (
            <>
              <Typography variant="body1" style={{ marginBottom: "60px" }}>
                {router.query.keyword ? (
                  <>
                    Resluts for{" "}
                    <span style={{ color: "#ffa00a" }}>
                      "{router.query.keyword}"
                    </span>
                  </>
                ) : (
                  <>What to search for?</>
                )}
              </Typography>
              <SearchedResults data={data} />
            </>
          ) : (
            <Typography
              variant="body1"
              style={{ marginTop: "30vh", marginBottom: "60px" }}
              align="center"
            >
              No results for{" "}
              <span style={{ color: "#ffa00a" }}>"{router.query.keyword}"</span>
            </Typography>
          )
        ) : (
          <Grid
            container
            justify="center"
            style={{ marginTop: "30vh", marginBottom: "60px" }}
          >
            <Grid item>
              <CircularProgress color="secondary" />
            </Grid>
          </Grid>
        )}
      </Container>
    </Layout>
  );
};

export default SearchPage;
