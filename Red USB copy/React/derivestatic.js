static getDerivedStateFromProps(props, state) {
    if (props.vehicle !== state.vehicle) {
      return {
        vehicle: props.vehicle
      };
    } else if (props.current !== state.current) {
      return {
        current: props.current
      };
    }
    // Return null if the state hasn't changed
    return null;
  }