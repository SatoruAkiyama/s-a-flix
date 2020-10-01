import { Typography, Container, Grid, Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Layout from "components/layout/Layout";
import Link from "components/Link";

import { CARDS, FEATURED_NEWS } from "data/MEDIA_CENTER";

const useStyles = makeStyles((theme) => ({
  root: {
    "& h2": {
      fontWeight: "bold",
      fontSize: "2rem",
    },
    "& h3": {
      fontWeight: "bold",
      fontSize: "1.5rem",
    },
    "& p": {
      fontSize: "18px",
    },
    backgroundColor: "#edede9",
    marginTop: "90px",
    padding: "40px 0 70px",
    [theme.breakpoints.down("md")]: {
      marginTop: "75px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "65px",
      padding: "0 0 70px",
    },
  },

  block: {
    background: "#221f1f",
    position: "absolute",
    height: "550px",
    width: "100%",
    top: 0,
    [theme.breakpoints.down("sm")]: {
      height: "450px",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  hot__container: {
    background: "#000",
    padding: "20px",
    borderBottom: `3px solid ${theme.palette.common.red}`,
    "& p": {
      color: "#a7a6a5 !important",
    },
    "& h3 > a": {
      color: "#fff !important",
    },
    "& p > a": {
      color: `${theme.palette.common.red} !important`,
    },
  },
  card: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "540px",
    position: "relative",
    zIndex: 10,
    cursor: "pointer",
    transition: "all ease-in 0.3s",
    boxShadow: "0px 8px 20px 3px #00000070",
    "&:hover": {
      borderBlockEndColor: theme.palette.common.red,
      borderBlockEndStyle: "solid",
      borderBlockEndWidth: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "440px",
    },
  },
  card__inner: {
    padding: "20px",
    height: "540px",
    backgroundImage:
      "linear-gradient(to top,rgba(0,0,0, 30%) 0,rgba(0,0,0,0.1) 30%,rgba(0,0,0,0) 100%)",
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      height: "440px",
    },
  },
  featured__news: {
    maxWidth: "860px",
    margin: "120px auto",
    "& h2": {
      display: "block",
      width: "80%",
      textAlign: "center",
      margin: "0 auto",
      padding: "40px",
      background: "#221f1f",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        padding: "20px",
      },
    },
  },
  news__card: {
    backgroundColor: "#fff",
    "&:nth-child(2)": {
      borderLeft: "0.5px solid #000000a3",
      borderRight: "0.5px solid #000000a3",
    },
    "& .MuiTypography-body1": {
      color: "#000",
      fontWeight: "bold",
    },
    "& .MuiTypography-body2": {
      color: theme.palette.common.red,
    },
    "&:hover": {
      "& .MuiTypography-body1": {
        color: theme.palette.common.red,
      },
    },
    [theme.breakpoints.down("xs")]: {
      "&:nth-child(2)": {
        borderLeft: "none",
        borderRight: "none",
        borderTop: "0.5px solid #000000a3",
        borderBottom: "0.5px solid #000000a3",
      },
    },
  },
  news__card__inner: {
    padding: "2.2em 1.5em",
  },
  btn__wrapper: {
    display: "block",
    width: "80%",
    textAlign: "center",
    margin: "0 auto",
    padding: "40px",
    background: "#221f1f",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      padding: "20px",
    },
  },
  btn: {
    background: theme.palette.common.red,
    borderRadius: 0,
    padding: "16px !important",
    "&.MuiButton-root .MuiButton-label": {
      fontSize: "16px",
      fontWeight: 700,
    },
    "&.MuiButton-root": {
      border: `1px solid #221f1f`,
    },
    "&:hover": {
      "&.MuiButton-root:hover": {
        backgroundColor: `#221f1f !important`,
        borderColor: `${theme.palette.common.red}`,
        color: `${theme.palette.common.red} !important`,
      },
      "&.MuiButton-root .MuiButton-label": {
        color: `${theme.palette.common.red} !important`,
      },
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: "10px 0",
    },
  },
  content__block: {
    display: "block",
    background: "#221f1f",
    width: "100%",
    height: "400px",
    position: "relative",
    "& .MuiGrid-spacing-xs-3": {
      margin: 0,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  content__block__inner: {
    width: "90%",
    margin: "0 auto",
    height: "500px",
  },
  content__block__inner__bg: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "500px",
    boxShadow: "0px 8px 20px 3px #00000070",
  },
  content__block__inner__text: {
    padding: "20px",
    background: "#221f1f",
    boxShadow: "0px 8px 20px 3px #00000070",
    "& p": {
      color: "#a7a6a5 !important",
    },
  },
  last__block: {
    marginTop: "220px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "120px",
    },
  },
  last__block__card__img: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "360px",
    borderBottom: `20px solid ${theme.palette.common.red}`,
    boxShadow: "0px 8px 20px 3px #00000070",
  },
  last__block__card__text: {
    padding: "40px",
    backgroundColor: "#221f1f",
    boxShadow: "0px 8px 20px 3px #00000070",
    "& p": {
      color: "#a7a6a5 !important",
    },
  },
}));

const MediaCenter = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const cards = CARDS;
  const news = FEATURED_NEWS;

  return (
    <Layout
      title="Media Center | S-A-FLIX"
      description="This is a Netflix Clone Application."
    >
      <div className={classes.root}>
        <div className={classes.block} />

        {matchesXS ? (
          <Grid
            container
            direction="column"
            className={classes.hot__container}
            spacing={5}
          >
            {cards.map(({ title, img }, idx) => (
              <Grid
                item
                container
                key={idx}
                alignItems="center"
                justify="space-between"
              >
                <Grid item container xs={6} direction="column" spacing={3}>
                  <Grid item>
                    <Typography variant="body2">Hot on Netflix</Typography>
                  </Grid>

                  <Grid item>
                    <Typography variant="h3">
                      <Link href="#">{title}</Link>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      <Link href="#">Read More</Link>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container xs={6}>
                  <Link href="#">
                    <img src={img} width="100%" height="auto" />
                  </Link>
                </Grid>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Container maxWidth="lg">
            <Grid container justify="center">
              {cards.map(({ title, img }, idx) => (
                <Grid
                  item
                  className={classes.card}
                  style={{ backgroundImage: `url(${img})` }}
                  key={idx}
                  sm={4}
                >
                  <Link href="#">
                    <Grid
                      item
                      container
                      alignItems="flex-end"
                      className={classes.card__inner}
                    >
                      <Grid item>
                        <Typography variant="h3">{title}</Typography>
                      </Grid>
                    </Grid>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
        <Container maxWidth="lg">
          <div className={classes.featured__news}>
            <Typography variant="h2">Featured News</Typography>
            <Grid container>
              {news.map(({ category, text, date }, idx) => (
                <Grid item className={classes.news__card} key={idx} sm={4}>
                  <Link href="#">
                    <Grid
                      item
                      container
                      direction="column"
                      spacing={2}
                      className={classes.news__card__inner}
                    >
                      <Grid item>
                        <Typography variant="caption">{category}</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body1">{text}</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2">Read More</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="caption">{date}</Typography>
                      </Grid>
                    </Grid>
                  </Link>
                </Grid>
              ))}
              <div className={classes.btn__wrapper}>
                <Button className={classes.btn}>
                  PRESS RELEASES AND BLOGS
                </Button>
              </div>
            </Grid>
          </div>
        </Container>
        <div className={classes.content__block}>
          <Grid
            container
            className={classes.content__block__inner}
            justify="center"
          >
            <Grid
              item
              sm={2}
              className={classes.content__block__inner__bg}
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/4126774/pexels-photo-4126774.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`,
              }}
            />
            <Grid
              item
              container
              sm={4}
              direction="column"
              justify="center"
              spacing={3}
              className={classes.content__block__inner__text}
            >
              <Grid item>
                <Typography variant="h2">
                  Looking for the perfect photo or product image?
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  Browse images of the Netflix logo, user interface, streaming
                  devices, our offices and lifestyle imagery.
                </Typography>
              </Grid>
              <Grid item>
                <Button className={classes.btn}>BROWSE</Button>
              </Grid>
            </Grid>
            <Grid
              item
              sm={2}
              className={classes.content__block__inner__bg}
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/3947545/pexels-photo-3947545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`,
              }}
            />
            <Grid
              item
              sm={2}
              className={classes.content__block__inner__bg}
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/4066041/pexels-photo-4066041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`,
              }}
            />
          </Grid>
        </div>
        <div className={classes.last__block}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item container direction="column" sm={6}>
                <Grid
                  item
                  className={classes.last__block__card__img}
                  style={{
                    backgroundImage: `url(https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750_1280.jpg)`,
                  }}
                />
                <Grid item className={classes.last__block__card__text}>
                  <Grid item container direction="column" spacing={4}>
                    <Grid item>
                      <Typography variant="h2">Leadership Team</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2">
                        Browse images of the Netflix logo, user interface,
                        streaming devices, our offices and lifestyle imagery.
                      </Typography>
                    </Grid>
                    <Grid item style={{ textAlign: "center" }}>
                      <Button className={classes.btn}>LEARN MORE</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                container
                className={classes.last__block__card}
                direction="column"
                sm={6}
              >
                <Grid
                  item
                  className={classes.last__block__card__img}
                  style={{
                    backgroundImage: `url(https://cdn.pixabay.com/photo/2020/09/14/17/45/tv-5571609_1280.jpg)`,
                  }}
                />
                <Grid item className={classes.last__block__card__text}>
                  <Grid item container direction="column" spacing={4}>
                    <Grid item>
                      <Typography variant="h2">About Netflix</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2">
                        Netflix is the world's leading streaming entertainment
                        service with 193 million paid memberships in over 190
                        countries enjoying TV series, documentaries and feature
                        films across a wide variety of genres and languages.
                        Members can watch as much as they want, anytime,
                        anywhere, on any internet-connected screen. Members can
                        play, pause and resume watching, all without commercials
                        or commitments.
                      </Typography>
                    </Grid>
                    <Grid item style={{ textAlign: "center" }}>
                      <Button className={classes.btn}>
                        LEARN ABOUT NETFLIX
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default MediaCenter;
