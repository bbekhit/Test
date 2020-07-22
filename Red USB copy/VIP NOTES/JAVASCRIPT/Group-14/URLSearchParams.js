const params = new URLSearchParams();
params.append("testset", testSets);

fetch(this.props.config.apiEndpoint + "/pass-rate?" + params.toString(), {
  method: 'GET',
  headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
})