app.get('/executed', (request, response) => {
  let result = [];
  getExecutionResults(request.query)
      .then(results => {
          if (results.error != null && results.status != null){
              response.status(results.status);
              response.send(results);
          } else if (!request.query.amp_mode) {
              response.send(results);
          } else {
               const uiResults = results.map(row => {
                  const grades = row.grades || {};
                  const utsId = grades && grades.uts_id ? grades.uts_id : null;
                  const currentData = utsId && grades.uts_id.data  ? grades.uts_id.data : null;
                  const run = currentData && currentData.runtime && currentData.runtime.length ? currentData.runtime : "";
                  run[0] && run[0].contentJson && run[0].contentJson.searchResponses.forEach((item) => {
                  const { canonicalId, title, type } = item;
                  result.push({
                      title,
                      type,
                      canonicalId
                    })
                  });
                  const resultsData = row.results || {};
                  const media = resultsData && resultsData.media ? resultsData.media : null;
                  const deuce = media && media.deuce ? media.deuce : [];
                  if(deuce[0] && deuce[0].contentJson){
                      delete deuce[0].contentJson.searchResponses
                  }
                  const gradesData = {
                      uts_id: {
                          data: {
                              runtime: !Array.isArray(run) ? "no expected UTS Canonical ID found" : [
                                  {
                                     contentJson: {
                                          searchResponses: [...result]
                                     }
                                  }
                              ]
                          }
                      }
                  };
                  return {
                      execution_id: row.execution_id,
                      attributes: row.attributes || "",
                      date: row.date || "",
                      date_hour: row.date_hour || "",
                      date_hour_minute: row.date_hour_minute || "",
                      exec_system: row.exec_system || "",
                      executed_at: row.executed_at || "",
                      execution_batch_id: row.execution_batch_id,
                      grades: !row.grades ? null : gradesData,
                      results: resultsData,
                      test_id: row.test_id,
                      testsets:  row.testsets == null ? "<no test sets>" : row.testsets
                  }
              });
              response.send(uiResults);
          }
      });
});