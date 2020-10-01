import Link from "components/Link";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";

import { FOOTER_LISTS } from "data/FOOTER_LISTS";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: "70px 0",
    borderBottom: `8px solid #222`,
  },
  text: {
    color: "#757575 !important",
    fontSize: "18px",
  },
  link__container: {
    padding: "50px 0",
  },
  link_text: {
    color: "#757575 !important",
    fontSize: "16px",
    textDecoration: "none",
    "&:hover": {
      color: `${theme.palette.secondary.main} !important`,
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  const lists = FOOTER_LISTS;
  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Typography className={classes.text}>
          Questions? Call 0120-996-012
        </Typography>
        <Grid container className={classes.link__container} spacing={4}>
          {lists.map(({ name, link, external }, idx) => (
            <Grid item xs={6} sm={4} md={3} key={idx}>
              <Typography style={{ lineHeight: 1 }}>
                {external ? (
                  <a
                    href={link}
                    className={classes.link_text}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {name}
                  </a>
                ) : (
                  <Link href={link} className={classes.link_text}>
                    {name}
                  </Link>
                )}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Typography className={classes.text}>S-A-flix</Typography>
      </Container>
    </footer>
  );
};

export default Footer;
