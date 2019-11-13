// it's a funcftion that takes a component and return a new component

export default (ComposedClass, reload, adminRoute = null) => {
    class AuthenticationCheck extends Component {
      componentDidMount() {
        const { user, isAuthenticated } = this.props.auth;
  
        if (!isAuthenticated) {
          if (reload) {
            this.props.history.push("/login");
          }
        } else {
          if (adminRoute && !user.isAdmin) {
            this.props.history.push("/dashboard");
          } else {
            if (reload === false) {
              this.props.history.push("/dashboard");
            }
          }
        }
      }
  
      render() {
        return <ComposedClass {...this.props} user={this.props.user} />;
      }
    }
  
    const mapStateToProps = state => ({
      auth: state.auth
    });
  
    return connect(mapStateToProps)(AuthenticationCheck);
  };

   