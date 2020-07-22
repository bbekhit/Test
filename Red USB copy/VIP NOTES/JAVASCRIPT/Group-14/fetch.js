let response = await fetch(url);

if (response.ok) { // if HTTP-status is 200-299
  // get the response body (the method explained below)
  let json = await response.json();
} else {
  alert("HTTP-Error: " + response.status);
}

///
// - response.text() – read the response and return as text,
// - response.json() – parse the response as JSON,
// - response.formData() – return the response as FormData object (explained in the next chapter),
// - response.blob() – return the response as Blob (binary data with type),
// - response.arrayBuffer() – return the response as ArrayBuffer (low-level representaion of binary data),
// - additionally, response.body is a ReadableStream object, it allows you to read the body chunk-by-chunk, we’ll see an example later.


///
let user = {
  name: 'John',
  surname: 'Smith'
};

let response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
});

let result = await response.json();
alert(result.message);

//Fetch options so far:

// method – HTTP-method,
// headers – an object with request headers (not any header is allowed),
// body – the data to send (request body) as string, FormData, BufferSource, Blob or UrlSearchParams objec

///
// response.status – HTTP code of the response,
// response.ok – true is the status is 200-299.
// response.headers – Map-like object with HTTP headers.


let promise = fetch(url, {
  method: "GET", // POST, PUT, DELETE, etc.
  headers: {
    // the content type header value is usually auto-set
    // depending on the request body
    "Content-Type": "text/plain;charset=UTF-8"
  },
  body: undefined, // string, FormData, Blob, BufferSource, or URLSearchParams
  referrer: "about:client", // or "" to send no Referer header,
  // or an url from the current origin
  referrerPolicy: "no-referrer-when-downgrade", // no-referrer, origin, same-origin...
  mode: "cors", // same-origin, no-cors
  credentials: "same-origin", // omit, include
  cache: "default", // no-store, reload, no-cache, force-cache, or only-if-cached
  redirect: "follow", // manual, error
  integrity: "", // a hash, like "sha256-abcdef1234567890"
  keepalive: false, // true
  signal: undefined, // AbortController to abort request
  window: window // null
});

///// SCOPE FETCH
async function fetchData(url, options = {}) {
  const conf = {
    credentials: 'same-origin',
    contentType: 'application/json',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    ...options,
  };
  const response = await fetch(url, conf);
  return response.json();
}

export default {
  report: {
    async create(report) {
      if (report) {
        delete report.reports;
        const response = await fetchData(`${baseUrl}/report`, {
          method: 'POST',
          body: JSON.stringify(report),
        });
        return getFormattedReport(response);
      }
      return {};
    },

    async reportDetails(id) {
      const response = await fetchData(`${baseUrl}/report/${id}`);
      return getFormattedReport(response, id);
    },

    async update(report) {
      if (report) {
        delete report.reports;
        const response = await fetchData(`${baseUrl}/report/${report.id}`, {
          method: 'PUT',
          body: JSON.stringify(report),
        });
        return getFormattedReport(response);
      }
      return {};
    },

    async list() {
      const json = await fetchData(`${baseUrl}/reports`);
      return json.map(({ data, created, modified }) => ({ ...data, created, modified }));
    },

    async delete(id) {
      const response = await fetchData(`${baseUrl}/report/${id}`, {
        method: 'DELETE',
      });
      return response;
    },

    async cleanUp(id) {
      const response = await fetchData(`${baseUrl}/report/${id}/cleanup`, {
        method: 'POST',
      });
      return getFormattedCleanUpReport(response);
    },
  }
}