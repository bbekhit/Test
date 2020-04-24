useEffect(() => {
  store.dispatch(resetAuth());
  if (localStorage.token) {
    store.dispatch(setCurrentUser(localStorage.token));
  } else {
    store.dispatch(resolveAuth());
  }
}, []);

import {
  SET_CURRENT_USER,
  LOGOUT_USER,
  RESOLVE_AUTH,
  RESET_AUTH,
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  isAuthResolved: false,
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        isAuthResolved: true,
        user: { ...action.payload },
        // user: action.payload
      };
    case LOGOUT_USER:
      return {
        isAuthenticated: false,
        user: {},
      };
    case RESOLVE_AUTH:
      return {
        ...state,
        isAuthResolved: true,
      };
    case RESET_AUTH:
      return {
        ...state,
        isAuthResolved: false,
      };
    default:
      return state;
  }
};
// **********************************************************************
import React, { useEffect } from "react";
import {
  getCurrentProfile,
  getToFollowing,
} from "../../redux/actions/profileActions.js";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Private from "../../HOC/PrivateRoute.js";
import Spinner from "../Spinner/Spinner.js";

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  top: {
    marginTop: "2rem",
    width: "60%",
  },
  followBtn: {
    fontSize: ".5rem",
    textTransform: "uppercase",
    color: theme.palette.common.mainBlue,
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: theme.palette.common.mainBlue,
  },
}));

const Profile = ({
  getCurrentProfile,
  profile: { currentProfile, loading },
  getToFollowing,
  auth,
}) => {
  const classes = useStyles();
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const showProfile = () => {
    return (
      <div>
        <Grid container justify="center">
          <Card
            className={classes.root}
            style={{ margin: "2rem auto", width: "75%" }}
          >
            <CardContent>
              <Typography variant="h5" component="h2">
                Name
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {currentProfile.user.name}
              </Typography>

              <Typography variant="h5" component="h2">
                Email
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {currentProfile.user.email}
              </Typography>
              <Typography variant="h5" component="h2">
                Address
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {currentProfile.address}
              </Typography>
              <Typography variant="h5" component="h2">
                Phone
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {currentProfile.phone}
              </Typography>
              {/* {!(user._id === item.user._id) ? null : ( */}
              <Grid
                container
                justify="space-between"
                style={{ marginTop: ".5rem" }}
              >
                <Button
                  className={classes.followBtn}
                  component={Link}
                  to="/create-post"
                >
                  Post
                </Button>
                <Button
                  className={classes.followBtn}
                  component={Link}
                  to="/toFollow"
                  onClick={() => getToFollowing(currentProfile._id)}
                >
                  People to follow
                </Button>
                <Button className={classes.followBtn} component={Link} to="/me">
                  Followers
                </Button>
              </Grid>
              {/* )} */}
            </CardContent>
          </Card>
        </Grid>
      </div>
    );
  };

  const showNoProfile = () => {
    return (
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Card style={{ margin: "2rem auto", width: "75%" }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Oops!
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Looks that you didn't create a profile yet, please go ahead
                  and create one!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                component={Link}
                to="/create-profile"
              >
                Create profile
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    );
  };

  return (
    <div>
      {Object.keys(currentProfile).length === 0 && loading ? (
        <Spinner />
      ) : Object.keys(currentProfile).length === 0 ? (
        showNoProfile()
      ) : (
        showProfile()
      )}
    </div>
  );
};

const mapStateToPrps = state => ({
  profile: state.profile,
  auth: state.auth,
});
export default connect(mapStateToPrps, { getCurrentProfile, getToFollowing })(
  Private(Profile, "auth")
);

import {
  GET_CURRENT_PROFILE,
  GET_PROFILES,
  GET_TO_FOLLOWING,
  SET_PROFILE_BY_ID,
  REMOVE_FROM_TO_FOLLOWING,
  UPDATE_FOLLOWING,
} from "../actions/types";

const initialState = {
  profiles: [],
  currentProfile: {},
  profileById: {},
  toFollow: [],
  loading: true,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_PROFILE:
      return {
        ...state,
        loading: false,
        currentProfile: action.payload,
      };
    case SET_PROFILE_BY_ID:
      return {
        ...state,
        profileById: action.payload,
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
      };
    case UPDATE_FOLLOWING:
      return {
        ...state,
        profiles: state.profiles.map(profile =>
          profile._id === action.payload._id
            ? (profile = action.payload)
            : profile
        ),
      };
    case GET_TO_FOLLOWING:
      return {
        ...state,
        toFollow: action.payload,
      };
    case REMOVE_FROM_TO_FOLLOWING:
      return {
        ...state,
        toFollow: state.toFollow.filter(item => item._id !== action.payload),
      };
    default:
      return state;
  }
};

export default profileReducer;
