import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& .MuiAccordion-rounded": {
      background: "#303030",
      borderRadius: 0,
      margin: "8px 0 ",
      padding: ".8em 2.2em .8em 1.2em",
    },
    "& .MuiAccordionDetails-root": {
      borderTop: "1px solid #000",
      paddingTop: "28px",
    },
  },
}));

const Accordions = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel1" ? (
              <CloseIcon color="secondary" />
            ) : (
              <AddIcon color="secondary" />
            )
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h2">What is Netflix?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices.
            <br />
            <br /> You can watch as much as you want, whenever you want without
            a single commercial – all for one low monthly price. There's always
            something new to discover and new TV shows and movies are added
            every week!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel2" ? (
              <CloseIcon color="secondary" />
            ) : (
              <AddIcon color="secondary" />
            )
          }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography variant="h2">How much does Netflix cost?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. Plans range from
            US$8.99 to US$15.99 a month. No extra costs, no contracts.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel3" ? (
              <CloseIcon color="secondary" />
            ) : (
              <AddIcon color="secondary" />
            )
          }
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography variant="h2">Where can I watch?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Watch anywhere, anytime, on an unlimited number of devices. Sign in
            with your Netflix account to watch instantly on the web at
            netflix.com from your personal computer or on any internet-connected
            device that offers the Netflix app, including smart TVs,
            smartphones, tablets, streaming media players and game consoles.
            <br />
            <br />
            You can also download your favorite shows with the iOS, Android, or
            Windows 10 app. Use downloads to watch while you're on the go and
            without an internet connection. Take Netflix with you anywhere.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel4" ? (
              <CloseIcon color="secondary" />
            ) : (
              <AddIcon color="secondary" />
            )
          }
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading} variant="h2">
            How can I cancel?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Netflix is flexible. There are no pesky contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your account
            anytime.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel5" ? (
              <CloseIcon color="secondary" />
            ) : (
              <AddIcon color="secondary" />
            )
          }
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading} variant="h2">
            What can I watch on Netflix?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Netflix has an extensive library of feature films, documentaries, TV
            shows, anime, award-winning Netflix originals, and more. Watch as
            much as you want, anytime you want.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accordions;
