import { Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import AccordionCard from "components/Accordions";
import EmailForm from "components/EmailForm";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    borderBottom: `8px solid #222`,
    padding: "70px 0",
  },
  src: {
    width: "100%",
    height: "auto",
  },
}));

const Faq = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainContainer}>
      <Container maxWidth="md">
        <Grid item container direction="column" spacing={6}>
          <Grid item>
            <Typography variant="h1" align="center">
              Frequently Asked Questions
            </Typography>
          </Grid>
          <Grid item>
            <AccordionCard />
          </Grid>
          <Grid item>
            <EmailForm id="faq" />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Faq;
