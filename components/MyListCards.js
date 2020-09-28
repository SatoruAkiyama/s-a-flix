import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Typography, Container } from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

import { useContext } from "react";
import { ModalContext } from "providers/modal.provider";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    overflow: "hidden",
    backgroundColor: "#000",
  },
  gridList: {
    width: "100%",
    marginBottom: "60px",
  },
  list: {
    marginBottom: "60px",
    cursor: "pointer",
    "& img": {
      transition: "transform 0.3s",
    },
    "&:hover": {
      "& img": {
        transform: "translateX(-50%) scale(1.1)",
      },
    },
  },
}));

export default function MyListCards({ data }) {
  const classes = useStyles();
  const imageUrl = "https://image.tmdb.org/t/p/w300";
  //   console.log(data);
  const lists = data.reverse();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const { setInfoContent } = useContext(ModalContext);

  return (
    <Container
      maxWidth="xl"
      style={{ marginTop: "100px", marginBottom: "60px" }}
    >
      <Typography variant="h2" style={{ marginBottom: "60px" }}>
        My List
      </Typography>
      {data?.length > 0 ? (
        <div className={classes.root}>
          <GridList
            cellHeight={matchesXS ? 120 : 140}
            cols={matchesXS ? 2 : matchesSM ? 3 : matchesMD ? 5 : 6}
            className={classes.gridList}
          >
            {lists.map(({ name }) => (
              <GridListTile
                key={name.id}
                className={classes.list}
                onClick={() => setInfoContent(name)}
              >
                <img
                  src={
                    name.backdrop_path
                      ? `${imageUrl}${name.backdrop_path}`
                      : `${imageUrl}${name.poster_path}`
                  }
                  alt={name.title ? name.title : name.name}
                />
                <GridListTileBar title={name.title ? name.title : name.name} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      ) : (
        <Typography variant="h3" align="center" style={{ margin: "20% 0" }}>
          You have not added anything to{" "}
          <span style={{ fontWeight: 900 }}> My List </span> yet.
        </Typography>
      )}
    </Container>
  );
}
