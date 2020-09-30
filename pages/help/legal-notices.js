import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import Layout from "components/layout/Layout";
import Link from "components/Link";

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
  underline: {
    textDecoration: "underline",
  },
}));

const LegalNoticesPage = () => {
  const classes = useStyles();

  return (
    <Layout
      title="Legal Notices - Help Center | S-A-FLIX"
      description="This is a Netflix Clone Application."
    >
      <div className={classes.root}>
        <Container maxWidth="md">
          <Link href="/help">
            <Typography
              className={classes.link__text}
              style={{ fontSize: "16px" }}
            >
              &#8592; Back to Help Home
            </Typography>
          </Link>
          <Typography variant="h2" style={{ marginTop: "60px" }}>
            Legal Notices
          </Typography>
          <Typography variant="body2" style={{ marginTop: "40px" }}>
            The Netflix service, including all content provided on the Netflix
            service, is protected by copyright, trademark, trade secret or other
            intellectual property laws and treaties. Copyright
          </Typography>
          <Typography variant="body2" style={{ marginTop: "40px" }}>
            <span style={{ fontWeight: "700" }}>Copyright</span>
          </Typography>
          <Typography variant="body2" style={{ marginTop: "40px" }}>
            The copyrights in the shows and movies on our service are owned by
            many great producers, including Netflix Studios, LLC. If you believe
            your or someone else’s copyrights are being infringed upon through
            the Netflix service, let us know by completing the Copyright
            Infringement Claims form (
            <Link href="#" className={classes.link__text}>
              www.netflix.com/copyrights
            </Link>
            ).
          </Typography>
          <Typography variant="body2" style={{ marginTop: "40px" }}>
            <span style={{ fontWeight: "700" }}>Trademarks</span>
          </Typography>
          <Typography variant="body2" style={{ marginTop: "40px" }}>
            Netflix and the N Logo are trademarks of Netflix, Inc.
          </Typography>
          <Typography variant="body2" style={{ marginTop: "40px" }}>
            If you haven’t received our permission, do not use the Netflix marks
            as your own or in any manner that implies sponsorship or endorsement
            by Netflix.
          </Typography>
          <Typography variant="body2" style={{ marginTop: "40px" }}>
            A product branded with the Netflix name or logo is a reflection of
            Netflix. Unless you are one of our licensees, we don’t allow others
            to make, sell, or give away anything with our name or logo on it.
          </Typography>

          <Typography variant="body2" style={{ marginTop: "40px" }}>
            <span style={{ fontWeight: "700" }}>Patents</span>
          </Typography>
          <Typography variant="body2" style={{ marginTop: "40px" }}>
            Netflix streaming and DVD services are covered by patents. For
            information on patents related to our services please visit{" "}
            <Link href="#" className={classes.link__text}>
              www.netflix.com/patents
            </Link>
            .
          </Typography>
          <Typography variant="body2" style={{ marginTop: "40px" }}>
            <span style={{ fontWeight: "700" }}>Third Party Notices</span>
          </Typography>
          <Typography variant="body2" style={{ marginTop: "40px" }}>
            The software installed on Netflix ready devices to enable streaming
            of the Netflix service may contain software available under open
            source or free software licenses (“Open Source Software”) and/or
            commercial software licensed to Netflix by parties (“Commercial
            Software”). The Netflix Terms of Use do not alter any rights or
            obligations you may have under those Open Source Software licenses.
            Additional information about Open Source and Commercial Software,
            including required acknowledgements, license terms and notices, can
            be found{" "}
            <Link href="#" className={classes.link__text}>
              here
            </Link>
            .
          </Typography>
          <Typography variant="body2" style={{ marginTop: "40px" }}>
            <span style={{ fontWeight: "700" }}>Last Updated:</span> Last
            Updated: May 11, 2018
          </Typography>
        </Container>
      </div>
    </Layout>
  );
};

export default LegalNoticesPage;
