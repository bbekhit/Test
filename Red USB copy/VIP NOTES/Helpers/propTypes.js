static propTypes = {
  addProduct: PropTypes.func,
  products: PropTypes.arrayOf(PropTypes.shape({})),
  metadat:propTypes.oneOfType([PropTypes.object,PropTypes.string]),
  hideLabel:PropTypes.bool,
  view:PropTypes.oneOf([false,COLUMN]),
  type:PropTypes.string,
  radars:PropTypes.arrayOf([PropTypes.oneOfType([PropTypes.string,PropTypes.number])])
};

static defaultProps = {
  addProduct: () => {},
  products: []
};