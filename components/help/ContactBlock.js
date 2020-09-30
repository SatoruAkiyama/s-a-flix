import { Typography, Container, Grid, Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Link from "components/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#eaeae6",
    borderTop: "1px solid #d5d4d1",
    minHeight: "96px",
    padding: "24px 0",
  },
  text: {
    fontSize: "24px",
    fontWeight: 700,
    color: "#221f1f !important",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "30px",
    },
  },
  btn: {
    background: "#fff",
    margin: "0 10px",
    borderRadius: 0,
    border: "1px solid #8b8a88",
    padding: "16px !important",
    "&.MuiButton-root .MuiButton-label": {
      borderColor: "#8b8a88",
      color: "#4c4948 !important",
      fontSize: "16px",
      fontWeight: 700,
    },
    "&:hover": {
      "&.MuiButton-root:hover": {
        backgroundColor: `#f5f5f1 !important`,
      },
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: "10px 0",
    },
  },
}));

const ContactBlock = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid
          container
          justify="space-between"
          direction={matchesXS ? "column" : "row"}
        >
          <Grid item>
            <Typography className={classes.text}>
              Want to contact us?
            </Typography>
          </Grid>
          <Grid item>
            <Link href="#">
              <Button className={classes.btn}>CALL US</Button>
            </Link>
            <Link href="#">
              <Button className={classes.btn}>START LIVE CHAT</Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContactBlock;
