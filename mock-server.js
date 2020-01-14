const testMock = require('./__mock__/test.mock');

module.exports = (app) => {
  app.get('/api/test', (req, res) => {
    res.json(testMock);
  });
};
