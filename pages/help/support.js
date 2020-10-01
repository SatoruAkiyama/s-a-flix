import { Typography, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import Layout from "components/layout/Layout";
import Link from "components/Link";
import ContactBlock from "components/help/ContactBlock";

const useStyles = makeStyles((theme) => ({
  root: {
    "& h2, h3, p": {
      color: "#221f1f",
    },
    "& h2": {
      fontWeight: "bold",
      fontSize: "1.75rem",
    },
    "& h3": {
      fontWeight: "bold",
      fontSize: "1.5rem",
    },
    "& p": {
      fontSize: "18px",
    },
    backgroundColor: "#fff",
    marginTop: "90px",
    padding: "40px 0 70px",
    [theme.breakpoints.down("md")]: {
      marginTop: "75px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "65px",
    },
  },
  link__text: {
    color: `${theme.palette.common.red} !important`,
    borderBottom: `1px solid #fff`,
    display: "inline",
    "&:hover": {
      borderColor: theme.palette.common.red,
    },
  },
  suggest__container: {
    marginTop: "50px",
    "& p": {
      marginBottom: "10px",
    },
    "& a": {
      color: "#221f1f !important",
      borderBottom: `1px solid #fff`,
      "&:hover": {
        color: `${theme.palette.common.red} !important`,
        borderColor: theme.palette.common.red,
      },
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const SupportPage = () => {
  const classes = useStyles();

  return (
    <Layout
      title="Information Provided Pursuant to the Act on Specified Commercial Transactions - Help Center | S-A-FLIX | Netflix Clone"
      description="This is a Netflix Clone Application."
    >
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Link href="/help">
            <Typography
              className={classes.link__text}
              style={{ fontSize: "16px" }}
            >
              &#8592; Back to Help Home
            </Typography>
          </Link>
          <Grid container style={{ marginTop: "60px" }} justify="space-between">
            <Grid item container direction="column" spacing={4} md={8}>
              <Grid
                item
                container
                direction="column"
                spacing={4}
                style={{
                  marginBottom: "20px",
                }}
              >
                <Grid item>
                  <Typography variant="h2">
                    Information Provided Pursuant to the Act on Specified
                    Commercial Transactions
                  </Typography>
                </Grid>
                <Grid item container direction="column" spacing={3}>
                  <Grid item>
                    <Typography variant="body2">
                      <span style={{ fontWeight: "bold" }}>
                        Business Operator:
                      </span>{" "}
                      Netflix K.K.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      <span style={{ fontWeight: "bold" }}>
                        Representative Director:{" "}
                      </span>{" "}
                      Gregory Peters
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      <span style={{ fontWeight: "bold" }}>Address: </span>{" "}
                      Shin-Aoyama Tokyu Building 10F, 3-11-13 Minami-Aoyama,
                      Minato-ku, Tokyo 107-0062 Japan
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      <span style={{ fontWeight: "bold" }}>
                        Customer Service Tel:{" "}
                      </span>
                      <br />
                      0120-996-012 <br />
                      (Open hours 9:00 a.m. to 9:00 p.m.)
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      <span style={{ fontWeight: "bold" }}>
                        Monthly Price:{" "}
                      </span>{" "}
                      Monthly prices are shown on the site and our app.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      Please refer to{" "}
                      <Link href="#">
                        <span className={classes.link__text}> this page </span>
                      </Link>{" "}
                      for details on different plans.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      <span style={{ fontWeight: "bold" }}>
                        Costs other than the Monthly Subscription Price to use
                        the Service:{" "}
                      </span>
                      <br />
                      Internet connection fees and any other fees to use the
                      internet. Data charges may apply if you are using the
                      service on a mobile device.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      <span style={{ fontWeight: "bold" }}>
                        Method of payment:{" "}
                      </span>
                      <br />
                      Payment is available through PayPal, credit cards, and
                      operator/ISP billing. Available payment methods may vary
                      depending on the device used to sign up.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      <span style={{ fontWeight: "bold" }}>
                        Timing of Payment:{" "}
                      </span>
                      <br />
                      Netflix is a monthly service. Your first monthly fee will
                      be charged on the date after your free trial ends, and
                      thereafter, on the same date every month. You can view
                      your next billing date any time in the{" "}
                      <Link href="#">
                        <span className={classes.link__text}>
                          {" "}
                          Billing History{" "}
                        </span>
                      </Link>{" "}
                      section on your{" "}
                      <Link href="#">
                        <span className={classes.link__text}> Account </span>
                      </Link>
                      .
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      <span style={{ fontWeight: "bold" }}>
                        When the Service Starts for you:{" "}
                      </span>
                      <br />
                      Services are made available instantly, once registration
                      is complete.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      <span style={{ fontWeight: "bold" }}>Cancellation: </span>
                      <br />
                      Subscriptions can be cancelled by clicking the Cancel
                      Membership link on your{" "}
                      <Link href="#">
                        <span className={classes.link__text}> Account </span>
                      </Link>{" "}
                      page. If you cancel with time left in your billing period,
                      we'll let you stream until the account cancels
                      automatically.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      <span style={{ fontWeight: "bold" }}>
                        Other Conditions:{" "}
                      </span>
                      <br />
                      Please refer to our{" "}
                      <Link href="#">
                        <span className={classes.link__text}>
                          {" "}
                          Terms of Use{" "}
                        </span>
                      </Link>
                      .
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              spacing={4}
              className={classes.suggest__container}
              md={4}
            >
              <Grid item>
                <Typography variant="h3">Suggested Articles</Typography>
              </Grid>
              <Grid item style={{ marginLeft: "24px" }}>
                <Typography>
                  <Link href="#">
                    <span style={{ display: "list-item" }}>
                      Billing and Payments
                    </span>
                  </Link>
                </Typography>
                <Typography>
                  <Link href="#">
                    <span style={{ display: "list-item" }}>
                      How to find and download TV shows and movies
                    </span>
                  </Link>
                </Typography>
                <Typography>
                  <Link href="#">
                    <span style={{ display: "list-item" }}>
                      How to create and edit profiles
                    </span>
                  </Link>
                </Typography>
                <Typography>
                  <Link href="#">
                    <span style={{ display: "list-item" }}>
                      Why isn't Netflix working?
                    </span>
                  </Link>
                </Typography>
                <Typography>
                  <Link href="#">
                    <span style={{ display: "list-item" }}>
                      How do I find TV shows and movies on Netflix?
                    </span>
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
      <ContactBlock />
    </Layout>
  );
};

export default SupportPage;
