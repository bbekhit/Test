// *****************************************************************************************************
/// for Login and signup afet Loginin
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const onlyGuest = Component => {
  class OnlyGuest extends React.Component {
    render() {
      const { auth, dispatch, ...rest } = this.props;
      return auth.isAuthenticated ? (
        <Redirect to="/" />
      ) : (
        <Component {...rest} />
      );
    }
  }

  return connect(({ auth }) => ({ auth }))(OnlyGuest);
};
export default onlyGuest;

// *****************************************************************************************************
// must be authorized
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const withAuthorization = Component => {
  class WithAuthorization extends React.Component {
    render() {
      const { auth, dispatch, ...rest } = this.props;
      return auth.isAuthenticated ? (
        <Component {...rest} />
      ) : (
        <Redirect to="/login" />
      );
    }
  }

  return connect(({ auth }) => ({ auth }))(WithAuthorization);
};
export default withAuthorization;

// *****************************************************************************************************
/// combined component
// (Private(Login,"guest"))
// (Private(Profile,"auth"))
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Private = (Component, type) => {
  class PrivateClass extends React.Component {
    render() {
      // const { auth, dispatch, ...rest } = this.props;
      const { auth } = this.props;
      return !auth.isAuthenticated ? (
        type === "auth" ? (
          <Redirect to="/login" />
        ) : (
          <Component {...this.props} />
        )
      ) : type === "guest" ? (
        <Redirect to="/" />
      ) : (
        <Component {...this.props} />
      );
    }
  }

  const mapStateToProps = state => ({
    auth: state.auth,
  });
  // return connect(({ auth }) => ({ auth }))(Private);
  return connect(mapStateToProps)(PrivateClass);
};

export default Private;

// *****************************************************************************************************
/// Brad
import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated && !loading ? (
        <Redirect to="/login" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);

// in Routes
<PrivateRoute exact path="/dashboard" component={Dashboard} />;

// in Login component
if (isAuthenticated) {
  return <Redirect to="/dashboard" />;
}
// *****************************************************************************************************
