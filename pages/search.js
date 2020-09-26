import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  Typography,
  Container,
  CircularProgress,
  Grid,
} from "@material-ui/core";
import Layout from "components/layout/Layout";
import { getMoviesAndTvByQuery } from "lib/api";
import SearchedResults from "components/SearchedResults";

const SearchPage = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    setData(null);
    const getData = async () => {
      const data = await getMoviesAndTvByQuery(router.query.q);
      await setData(data);
    };
    getData();
  }, [router.query.q]);
  return (
    <Layout
      title="Search | S-A-FLIX"
      description="This is a Netflix Clone Application."
    >
      <Container maxWidth="xl" style={{ margin: "120px 0 10px" }}>
        {data ? (
          data.length > 0 ? (
            <>
              <Typography variant="body1" style={{ marginBottom: "60px" }}>
                Resluts for{" "}
                <span style={{ color: "#ffa00a" }}>"{router.query.q}"</span>
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
              <span style={{ color: "#ffa00a" }}>"{router.query.q}"</span>
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