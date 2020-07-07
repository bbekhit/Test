function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}

setTimeout(sayHi, 1000, "Hello", "John"); // Hello, Johnf

handleGo = () => () => {
  this.setState({ singleExecutionPending: true });
  const config = this.props.config;

  fetch(config.apiEndpoint + "/run-tests?async", {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify([
          {
              "utterances": [this.state.utterance],
              "locale": this.state.locale,
              "name": this.state.utterance,
              "testsets": ["utterance-ui"],
              "transcription": this.state.utterance,
              "server": this.state.server,
              "idiom": this.state.idiom,
              "interaction": this.state.interaction,
              "client": this.state.client,
              "retry_countdown": 0
          }
      ])
  })
      .then(response => {
          if(response.ok) {
              return response.json();
          }
          alert(response.status);
      })
      .then(value => {
          const executionBatchId = value[0];
          if (executionBatchId == null) {
              alert("Error starting request");
              this.setState({ singleExecutionPending: false });
              clearInterval(this.interval);
              return;
          }

          this.interval = setInterval(() => {

              fetch(config.apiEndpoint + "/executed?execution_batch_id=" + executionBatchId)
                  .then(result => result.json())
                  .then(result => {
                      if (Array.isArray(result)) {
                          if (result.length > 0) {
                              if (this.state.singleExecutionPending) {
                                  this.setState({singleExecution: result[0], singleExecutionPending: false, executionId: result[0].execution_id});
                              } else {
                                  this.setState({singleExecution: result[0]});
                                  clearInterval(this.interval);
                              }
                          }
                      } else {
                          this.setState({singleExecution: result, singleExecutionPending: false});
                          clearInterval(this.interval);
                      }
                  });
          }, 2000);
      })
      .catch(reason => {
          alert("Error initiating request: " + reason.message);
          this.setState({ singleExecutionPending: false });
          clearInterval(this.interval);
      });

};