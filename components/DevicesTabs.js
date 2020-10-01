import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AlbumIcon from "@material-ui/icons/Album";
import TheatersIcon from "@material-ui/icons/Theaters";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import TvIcon from "@material-ui/icons/Tv";
import DevicesIcon from "@material-ui/icons/Devices";
import Typography from "@material-ui/core/Typography";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    "& .MuiTab-root": {
      background: "#fff",
      minHeight: "160px",
      minWidth: "300px",
      [theme.breakpoints.down("xs")]: {
        minWidth: "180px",
      },
    },
    "& .MuiTab-textColorPrimary.Mui-selected": {
      color: theme.palette.common.red,
    },
    "& svg": {
      fontSize: "60px",
    },
    "& .MuiBox-root-259": {
      padding: "0",
    },
    "& .MuiTabs-indicator": {
      backgroundColor: theme.palette.common.red,
      height: "8px",
    },
  },
  tabContainer: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "60px 20px",
    minHeight: "400px",
  },
  tabInner: {
    maxWidth: "800px",
    margin: "0 auto",
    display: "column",
    justifyContent: "center",
    "& h2": {
      borderLeft: `2px solid ${theme.palette.common.red}`,
      paddingLeft: "10px",
      marginBottom: "40px",
      color: "#fff !important",
      fontSize: "1.75rem !important",
    },
    "& p": {
      color: "#fff !important",
    },
  },
}));

export default function DevicesTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab
            label="Streaming Media Players"
            icon={<DevicesIcon />}
            {...a11yProps(0)}
          />
          <Tab label="Smart TVs" icon={<TvIcon />} {...a11yProps(1)} />
          <Tab
            label="Game Consoles"
            icon={<SportsEsportsIcon />}
            {...a11yProps(2)}
          />
          <Tab
            label="Set-top Boxes"
            icon={<TheatersIcon />}
            {...a11yProps(3)}
          />
          <Tab label="Blu-ray Players" icon={<AlbumIcon />} {...a11yProps(4)} />
          <Tab
            label="Smartphones & Tablets"
            icon={<SmartphoneIcon />}
            {...a11yProps(5)}
          />
          <Tab
            label="PCs & Laptops"
            icon={<LaptopChromebookIcon />}
            {...a11yProps(6)}
          />
        </Tabs>
      </AppBar>
      {value === 0 && (
        <div className={classes.tabContainer} value={value} index={0}>
          <div className={classes.tabInner}>
            <Typography variant="h2">PLUG AND PLAY</Typography>
            <Typography variant="body1">
              The newest generation of media players and streaming sticks offer
              a fast, easy, and affordable way to watch Netflix on your TV.
            </Typography>
          </div>
        </div>
      )}
      {value === 1 && (
        <div className={classes.tabContainer} value={value} index={0}>
          <div className={classes.tabInner}>
            <Typography variant="h2">BUILT-IN CONNECTION</Typography>
            <Typography variant="body1">
              Smart TVs have Netflix already on them—ready for you to watch.
              There’s no need to add another device.
            </Typography>
            <br />
            <Typography variant="body1">
              Want a smart TV that’s built for a great Netflix experience? Look
              for smart TVs with the Netflix Recommended TV logo.
            </Typography>
          </div>
        </div>
      )}
      {value === 2 && (
        <div className={classes.tabContainer} value={value} index={0}>
          <div className={classes.tabInner}>
            <Typography variant="h2">PLAY GAMES, PLAY MOVIES</Typography>
            <Typography variant="body1">
              You can also watch Netflix on a variety of game consoles.
            </Typography>
          </div>
        </div>
      )}
      {value === 3 && (
        <div className={classes.tabContainer} value={value} index={0}>
          <div className={classes.tabInner}>
            <Typography variant="h2">EASY AS CHANGING CHANNELS</Typography>
            <Typography variant="body1">
              Now you can switch from live TV to Netflix right from your set-top
              box. Netflix is available through a growing number of pay TV
              providers. Ask yours for Netflix if you don’t see it here.
            </Typography>
          </div>
        </div>
      )}
      {value === 4 && (
        <div className={classes.tabContainer} value={value} index={0}>
          <div className={classes.tabInner}>
            <Typography variant="h2">ENJOY THE SIGHTS & SOUNDS</Typography>
            <Typography variant="body1">
              Stream Netflix using your Blu-ray player or Home Theater System.
            </Typography>
          </div>
        </div>
      )}
      {value === 5 && (
        <div className={classes.tabContainer} value={value} index={0}>
          <div className={classes.tabInner}>
            <Typography variant="h2">TAKE NETFLIX WITH YOU</Typography>
            <Typography variant="body1">
              It’s easy to watch Netflix from anywhere. If Netflix isn’t already
              on your phone or tablet, you can download our free app from the
              Apple App Store, Google Play, or the Windows Phone Store.
            </Typography>
          </div>
        </div>
      )}
      {value === 6 && (
        <div className={classes.tabContainer} value={value} index={0}>
          <div className={classes.tabInner}>
            <Typography variant="h2">WATCH ON WHAT YOU HAVE </Typography>
            <Typography variant="body1">
              Netflix is optimized for today’s most popular browsers so you can
              watch on your PC or laptop.
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
}
