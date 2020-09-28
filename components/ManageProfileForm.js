import {
  Grid,
  Typography,
  Container,
  Button,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Link from "components/Link";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProfiles, selectCurrentUserId } from "redux/user/userSelector";
import { setProfiles } from "redux/user/userActions";

import { editProfile } from "firebase/util";

import { ICONS } from "data/ICONS";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "40px",
    marginBottom: "120px",
    "& .MuiFilledInput-root": {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: 0,
      height: "50px",
    },
    "& .MuiFilledInput-input": {
      padding: "0 10px",
    },
    "& .MuiInputLabel-filled": {
      color: "#8c8c8c",
      fontSize: "18px",
    },
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& .MuiFormHelperText-contained": {
      marginLeft: 0,
      position: "absolute",
      bottom: "-20px",
    },
  },
  icon: {
    height: "auto",
    width: "90%",
    margin: "0 auto",
    maxWidth: "200px",
    cursor: "pointer",
    border: "1px solid #000",
    [theme.breakpoints.down("md")]: {
      maxWidth: "160px",
    },
    "&:hover": {
      borderColor: "#fff",
    },
  },
  btn: {
    backgroundColor: "#000",
    border: "2px solid #fff",
    fontSize: "20px",
    borderRadius: "0",
    minWidth: "200px",
  },
  edit__btn: {
    backgroundColor: "#626262",
    border: "2px solid #fff",
    fontSize: "20px",
    borderRadius: "0",
    minWidth: "200px",
  },
  logo: {
    color: theme.palette.common.red,
    width: "max-content",
    fontSize: "2rem",
    paddingTop: "20px",
    marginBottom: "20px",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "16px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.25rem",
    },
  },
  current__icon: {
    maxWidth: "200px",
    width: "100%",
    height: "auto",
    margin: "20px auto",
  },
  back: {
    "& a": {
      color: "#fff !important",
    },
  },
  icons: {
    maxWidth: "80px",
    width: "100%",
    height: "auto",
    margin: "10px auto",
    cursor: "pointer",
    border: "2px solid #000",
    "&:hover": {
      borderColor: "#fff",
    },
  },
}));

const ManageProfileForm = ({ id }) => {
  const classes = useStyles();

  const profiles = useSelector(selectProfiles);
  const currentEditProfile = profiles[id - 1];

  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [form, setForm] = useState({
    name: currentEditProfile?.name,
    icon: currentEditProfile?.icon,
  });
  const { name, icon } = form;

  const icons = ICONS;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleIconChange = (i) => {
    setForm({
      ...form,
      icon: i,
    });
  };

  const dispatch = useDispatch();
  const userId = useSelector(selectCurrentUserId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userId, id, name, icon);
    if (name !== "" || name.length < 11) {
      await setSending(true);
      const newProfiles = await editProfile(userId, id, name, icon);
      if (newProfiles !== "error") {
        await dispatch(setProfiles(newProfiles));
      }

      setSending(false);
    }
  };

  return (
    <Container maxWidth="xl">
      {/* {selectChoseProfile ? (
        <Link href="/browse">
          <Typography className={classes.logo}>S-A-FLIX</Typography>
        </Link>
      ) : (
        <Typography className={classes.logo}>S-A-FLIX</Typography>
      )} */}
      <Typography className={classes.logo}>S-A-FLIX</Typography>

      <Typography variant="body2" className={classes.back}>
        <Link href="/manage-profiles">&#8592; back</Link>
      </Typography>

      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={6}
        className={classes.root}
      >
        <Grid item>
          <Typography variant="h1" align="center">
            Edit Profile
          </Typography>
        </Grid>
        <Grid item container justify="center">
          <Grid item>
            <img
              src={icon && icon}
              alt="current-icon"
              className={classes.current__icon}
            />
          </Grid>
          <Grid item container justify="center" spacing={2}>
            {icons.map((i) => (
              <Grid item key={i}>
                <img
                  src={i}
                  alt="icon"
                  className={classes.icons}
                  style={{ opacity: icon !== i ? 0.5 : 1 }}
                  onClick={() => handleIconChange(i)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item>
          <Typography variant="body1" gutterBottom>
            Name
          </Typography>
          <TextField
            id={`id_edit_profile_${id}`}
            type="text"
            variant="filled"
            value={name && name}
            name="name"
            onChange={handleChange}
            error={name === "" || name?.length > 10}
            helperText={
              name === ""
                ? "Name is required!"
                : "Please keep the name with in 10 characters."
            }
          />
        </Grid>
        <Grid item>
          <Button className={classes.edit__btn} onClick={handleSubmit}>
            {errorMessage ? (
              <>Edit</>
            ) : sending ? (
              <CircularProgress color="secondary" />
            ) : (
              <>Edit</>
            )}
          </Button>
        </Grid>
        <Grid item style={{ marginTop: "70px" }}>
          <Link href="/manage-profiles">
            <Button className={classes.btn}>Done</Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ManageProfileForm;
