const initHeaders = new Headers();
initHeaders.append('Content-Type', 'application/json');

const request = (req) => {
  return fetch(req).then(res => {
    if (res.ok) {
      return res.json();
    }
  }).then(data => {
    if (data.status === 200) {
      // setDatabases(data.data);
      /*put({
        type: LAYOUT_SETDATABASES,
        payload: {
          databases: data.data,
        }
      });*/
      return data;
    }
  }).catch(err => {
    console.error(err);
  });
};

const get = (url) => {
  const req = new Request(url, { method: 'GET', headers: initHeaders});
  return request(url, 'GET', {});
};