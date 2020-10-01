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
  quote: {
    borderLeft: "4px solid #d5d4d1",
    padding: "0 12px",
    "& p": {
      fontSize: "16px",
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

const CorporateInformationPage = () => {
  const classes = useStyles();

  return (
    <Layout
      title="Corporate Information - Help Center | S-A-FLIX | Netflix Clone"
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
                    Netflix Corporate Information
                  </Typography>
                </Grid>
                <Grid item container direction="column" spacing={3}>
                  <Grid item>
                    <Typography variant="body2">
                      Netflix serves members in many different countries. The
                      Netflix entity that provides you with access to the
                      Netflix service and qualifies as your data controller
                      depends on your country of membership, and will be listed
                      in your membership or payment confirmation email.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">Netflix, Inc.</Typography>
                    <Typography variant="body2">
                      100 Winchester Circle
                    </Typography>
                    <Typography variant="body2">
                      Los Gatos, CA 95032, USA
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      Netflix International B.V.
                    </Typography>
                    <Typography variant="body2">Karperstraat 8-10</Typography>
                    <Typography variant="body2">
                      1075 KZ Amsterdam, the Netherlands
                    </Typography>
                    <Typography variant="body2">KvK: 62266519</Typography>
                    <Typography variant="body2">VAT: NL853746333B01</Typography>
                    <Typography variant="body2">
                      Share Capital: 12,500 Euros
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography variant="body2">
                      Netflix International B.V.
                    </Typography>
                    <Typography variant="body2">Karperstraat 8-10</Typography>
                    <Typography variant="body2">
                      1075 KZ Amsterdam, the Netherlands
                    </Typography>
                    <Typography variant="body2">KvK: 62266519</Typography>
                    <Typography variant="body2">VAT: NL853746333B01</Typography>
                    <Typography variant="body2">
                      Share Capital: 12,500 Euros
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography variant="body2">
                      Netflix Entretenimento Brasil, Ltda.
                    </Typography>
                    <Typography variant="body2">
                      Alameda Xingu, 350 - 14º andar - Alphaville Industrial
                    </Typography>
                    <Typography variant="body2">
                      Barueri, CEP 06455-911 - SP - Brazil1075 KZ Amsterdam, the
                      Netherlands
                    </Typography>
                    <Typography variant="body2">
                      CNPJ: ​13.590.585/0002-70
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      Netflix Entertainment Services India LLP
                    </Typography>
                    <Typography variant="body2">
                      Level 7, 4th North Avenue, Maker Maxity
                    </Typography>
                    <Typography variant="body2">
                      Bandra Kurla Complex, Bandra (East)
                    </Typography>
                    <Typography variant="body2">Mumbai - 400051</Typography>
                    <Typography variant="body2">Maharashtra, India</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">Netflix K.K.</Typography>
                    <Typography variant="body2">
                      Shin-Aoyama Tokyu Building 10F
                    </Typography>
                    <Typography variant="body2">
                      3-11-13 Minami-Aoyama
                    </Typography>
                    <Typography variant="body2">Minato-ku</Typography>
                    <Typography variant="body2">
                      Tokyo 107-0062 Japan
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      Netflix Services Korea Ltd.
                    </Typography>
                    <Typography variant="body2">
                      20F, Tower A, Centropolis Building
                    </Typography>
                    <Typography variant="body2">
                      26, Ujeongguk-ro, Jongno-gu, Seoul, 03161, Republic of
                    </Typography>
                    <Typography variant="body2">Korea</Typography>
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
                      Unsolicited Submissions to Netflix
                    </span>
                  </Link>
                </Typography>
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
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
      <ContactBlock />
    </Layout>
  );
};

export default CorporateInformationPage;
