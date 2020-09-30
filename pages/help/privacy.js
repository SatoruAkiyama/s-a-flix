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

const PrivacyPage = () => {
  const classes = useStyles();

  return (
    <Layout
      title="Privacy - Help Center | S-A-FLIX"
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
            Privacy Statement
          </Typography>
          <Typography variant="body2" style={{ marginTop: "40px" }}>
            This Privacy Statement explains our practices, including your
            choices, regarding the collection, use, and disclosure of certain
            information, including your personal information, by the{" "}
            <Link href="#" className={classes.link__text}>
              Netflix family of companies
            </Link>{" "}
            ("Netflix") in connection with the Netflix service.
          </Typography>
          <Typography variant="body2" style={{ marginTop: "40px" }}>
            <span style={{ fontWeight: "700" }}>Contact Us</span>
          </Typography>
          <Typography variant="body2" style={{ marginTop: "40px" }}>
            If you have general questions about your account or how to contact
            customer service for assistance, please visit our online help center
            at{" "}
            <Link href="#" className={classes.link__text}>
              {" "}
              help.netflix.com.{" "}
            </Link>{" "}
            For questions specifically about this Privacy Statement, or our use
            of your personal information, cookies or similar technologies,
            please contact our Data Protection Officer/Privacy Office by email
            at{" "}
            <Link href="#" className={classes.link__text}>
              privacy@netflix.com
            </Link>
            .
          </Typography>
          <Typography variant="body2" style={{ marginTop: "40px" }}>
            The data controller of your personal information is Netflix K.K.
            Please note that if you contact us to assist you, for your safety
            and ours we may need to authenticate your identity before fulfilling
            your request.
          </Typography>
          <Typography variant="body2" style={{ marginTop: "40px" }}>
            <span style={{ fontWeight: "700" }}>Collection of Information</span>
          </Typography>
          <Typography variant="body2" style={{ marginTop: "40px" }}>
            We receive and store information about you such as:
          </Typography>

          <Typography
            variant="body2"
            style={{ marginTop: "40px", paddingLeft: "16px" }}
          >
            <span style={{ fontWeight: "700" }}>
              Information you provide to us:
            </span>
            We collect information you provide to us which includes:
          </Typography>
          <Typography
            variant="body2"
            style={{ marginTop: "40px", paddingLeft: "24px" }}
          >
            your name, email address, address or postal code, payment method(s),
            and telephone number. In certain countries, we collect a government
            identification number for purposes such as billing and tax
            compliance. We collect this information in a number of ways,
            including when you enter it while using our service, interact with
            our customer service, or participate in surveys or marketing
            promotions;
          </Typography>
          <Typography
            variant="body2"
            style={{ marginTop: "40px", paddingLeft: "24px" }}
          >
            information when you choose to provide ratings, taste preferences,
            account settings (including preferences set in the "Account" section
            of our website), or otherwise provide information to us through our
            service or elsewhere.
          </Typography>
          <div id="cookies" />
          <Typography variant="body2" style={{ marginTop: "40px" }}>
            <span style={{ fontWeight: "700" }}>
              Cookies and Internet Advertising
            </span>
          </Typography>
          <Typography variant="body2" style={{ marginTop: "40px" }}>
            We and our Service Providers use cookies and other technologies
            (such as web beacons), as well as resettable device identifiers, for
            various reasons. We want you to be informed about our use of these
            technologies, so this section explains the types of technologies we
            use, what they do, and your choices regarding their use.
          </Typography>
          <Typography variant="body2" style={{ marginTop: "40px" }}>
            <span style={{ fontWeight: "700" }}>
              Cookies and similar technologies, web beacons, and resettable
              device identifiers
            </span>
          </Typography>
          <Typography variant="body2" style={{ marginTop: "40px" }}>
            Cookies are small data files that are commonly stored on your device
            when you browse and use websites and online services. We use other
            technologies such as browser storage and plugins (e.g., HTML5,
            IndexedDB, and WebSQL). Like cookies, these other technologies may
            store small amounts of data on your device. Web beacons (also known
            as clear gifs or pixel tags) often work in conjunction with cookies.
            In many cases, declining cookies will impair the effectiveness of
            web beacons associated with those cookies.
          </Typography>
          <Typography variant="body2" style={{ marginTop: "40px" }}>
            If you use the Netflix app on a mobile device, tablet, or streaming
            media device, we may collect a resettable device identifier from
            your device. Resettable device identifiers (also known as
            advertising identifiers) are similar to cookies and are found on
            many mobile devices and tablets (for example, the "Identifier for
            Advertisers" (or IDFA) on Apple iOS devices and the "Google
            Advertising ID" on Android devices), and certain streaming media
            devices. Like cookies, resettable device identifiers are used to
            make online advertising more relevant and for analytics and
            optimization purposes.{" "}
          </Typography>

          <Typography
            variant="h2"
            style={{ marginTop: "60px", color: `#e50914` }}
          >
            This is a Netflix Clone Application, so please let me skip the
            details of "Privacy Statement".
          </Typography>
          <Typography variant="body2" style={{ marginTop: "40px" }}>
            <span style={{ fontWeight: "700" }}>Last Updated:</span> Last
            Updated: July 31, 2020
          </Typography>
        </Container>
      </div>
    </Layout>
  );
};

export default PrivacyPage;
