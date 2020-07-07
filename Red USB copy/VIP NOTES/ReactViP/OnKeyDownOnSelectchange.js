onCheckChange = value => () => {
  const { checked } = this.state;
  const currentIndex = checked.indexOf(value);
  const newChecked = [...checked];

  if (currentIndex === -1) {
    newChecked.push(value);
  } else {
    newChecked.splice(currentIndex, 1);
  }
  this.setState(
    {
      checked: newChecked
    },
    () => {
      this.props.setTypesFilter(this.state.checked);
    }
  );
};
<input
  type="checkbox"
  onChange={this.onCheckChange(item.name)}
  checked={this.state.checked.indexOf(item.name) !== -1}
/>

handleKeyDown = () => event => {
  if(event.keyCode === 13){
      this.handleGo();
      event.preventDefault();
  }
};