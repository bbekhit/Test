onClick = (value, name) => {
    let vehicle = this.state.vehicle;
    vehicle[name] = value;
    this.setState({
      vehicle,
      isVisibleChanges: true
    });
  };