const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export default {
  get: { method: 'GET', headers },
  patch: body => ({ method: 'PATCH', headers, body: JSON.stringify(body) }),
  put: body => ({ method: 'PUT', headers, body: JSON.stringify(body) }),
  post: body => ({ method: 'POST', headers, body: JSON.stringify(body) }),
  delete: body => ({ method: 'DELETE', headers, body: JSON.stringify(body) }),
};
