import { useState } from "react";
import { useRouter } from "next/router";

import {
  Grid,
  TextField,
  Popper,
  Fade,
  Paper,
  Typography,
} from "@material-ui/core";
import {
  Notifications,
  CardGiftcard,
  ExpandMore,
  Search,
} from "@material-ui/icons";

import PopperCard from "./PopperCard";
import Link from "components/Link";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    cursor: "pointer",
  },
  root: {
    display: "flex",
    alignItems: "center",
    "& .MuiFilledInput-root": {
      backgroundColor: theme.palette.primary.main,
      transition: "all .3s",
      borderRadius: 0,
      height: "30px",
      position: "relative",
    },
    "& .MuiInputLabel-filled": {
      color: "#8c8c8c",
      fontSize: "16px",
      position: "relative",
    },
    "& .MuiFormControl-root": {
      transition: "all .3s",
      width: 0,
    },
    "& .MuiFilledInput-input": {
      padding: "1px 4px ",
      fontSize: "16px",
      color: theme.palette.secondary.main,
    },
    "& .MuiPaper-root": {
      marginRight: "30px",
    },
  },

  search_show: {
    "& .MuiFormControl-root": {
      width: "180px",
      [theme.breakpoints.down("xs")]: {
        width: "135px",
      },
    },
    "& .MuiFilledInput-root": {
      border: `1px solid ${theme.palette.secondary.main}`,
    },
  },
  can_search: {
    color: theme.palette.success.main,
    "& .MuiFilledInput-root": {
      border: `1px solid ${theme.palette.success.main}`,
    },
  },
  paper: {
    marginRight: "30px",
  },
  setting__paper: {
    marginRight: "10px",
  },
  kids: {
    "& a": {
      color: "#fff !important",
    },
  },
}));

const OptionsContainer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();
  const [popperCard, setPopperCard] = useState();
  const [text, setText] = useState("");
  const [hidden, setHidden] = useState(true);

  const toggleSeetingCard = (newPlacement, card) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
    setPopperCard(card);
    if (!hidden) {
      setHidden(true);
      setText("");
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (text === "") {
      setHidden(!hidden);
      if (open) {
        setOpen(false);
      }
    } else {
      router.push({
        pathname: "/search",
        query: { q: text },
      });
    }
  };

  return (
    <>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={300}>
            <Paper
              className={
                popperCard !== "setting"
                  ? classes.paper
                  : classes.setting__paper
              }
            >
              <PopperCard content={popperCard} setOpen={setOpen} />
            </Paper>
          </Fade>
        )}
      </Popper>

      <Grid
        container
        spacing={matchesXS ? 1 : 2}
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <Grid
            container
            className={`${classes.root} ${hidden ? "" : classes.search_show}`}
            alignItems="center"
            spacing={1}
          >
            <Grid item>
              <TextField
                id={`search`}
                type="text"
                variant="filled"
                value={text}
                placeholder="search movies"
                onChange={handleChange}
                className={text !== "" ? classes.can_search : ""}
              />
            </Grid>
            <Grid item>
              <Search
                className={`${classes.icon} ${
                  text !== "" && classes.can_search
                }`}
                onClick={handleSearch}
              />
            </Grid>
          </Grid>
        </Grid>
        {!matchesXS && (
          <Grid item style={{ padding: "6px 8px 10px" }}>
            <Typography variant="body2" className={classes.kids}>
              <Link href="/browse/kids">KIDS</Link>
            </Typography>
          </Grid>
        )}
        {!matchesXS && (
          <Grid item>
            <Notifications
              color="secondary"
              onClick={toggleSeetingCard("bottom-start", "notifications")}
              className={classes.icon}
            />
          </Grid>
        )}
        {!matchesXS && (
          <Grid item>
            <CardGiftcard
              color="secondary"
              onClick={toggleSeetingCard("bottom", "card-gift")}
              className={classes.icon}
            />
          </Grid>
        )}

        <Grid item>
          <ExpandMore
            color="secondary"
            onClick={toggleSeetingCard("bottom-end", "setting")}
            className={classes.icon}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default OptionsContainer;
