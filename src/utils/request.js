const initHeaders = new Headers();
initHeaders.append('Content-Type', 'application/json');

const request = (conf) => {
  return fetch(conf).then(res => {
    if (res.ok) {
      return res.json();
    }
  }).then(res => {
    // console.log(res);
    return res.data;
  }).catch(err => {
    // console.error(err);
    return err;
  });
};

const get = (url) => {
  const req = new Request(url, { method: 'GET', headers: initHeaders});
  return request(req);
};

const post = (url, body) => {
  const req = new Request(url, { method: 'POST', body, headers: initHeaders });
  return request(req);
};

export default {
  get,
  post,
  request,
};