import Layout from "components/layout/Layout";
import Link from "components/Link";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Container, Grid, Typography, Button } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  logo: {
    color: theme.palette.common.red,
    width: "max-content",
    fontSize: "2rem",
    paddingTop: "20px",
    fontWeight: "bold",
    position: "relative",
    zIndex: "100",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "16px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.25rem",
    },
  },
  bg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundImage: `url(/404.jpg) `,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: "3em 4% 0",
    height: "100%",
  },
}));

const Profiles = () => {
  const classes = useStyle();
  return (
    <Layout
      title="Error | S-A-flix | Netflix Clone"
      description="This is a Netflix Clone Application."
      hide
    >
      <>
        <Container maxWidth="xl">
          <Link href="/">
            <Typography className={classes.logo}>S-A-FLIX</Typography>
          </Link>
        </Container>
        <div className={classes.bg} />
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          spacing={4}
          className={classes.content}
        >
          <Grid item>
            <Typography variant="h1">Lost your way?</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align="center">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.
            </Typography>
          </Grid>
          <Grid item>
            <Link href="/">
              <Button className={classes.btn}>S-A-flix Home</Button>
            </Link>
          </Grid>
          <Grid item>
            <Typography
              variant="h2"
              style={{
                borderLeft: "6px solid #e50914",
                padding: "0 40px",
                borderRight: "6px solid #e50914",
                padding: "0 40px",
              }}
              align="center"
            >
              Error
            </Typography>
          </Grid>
        </Grid>
      </>
    </Layout>
  );
};

export default Profiles;
