import Mock from 'mockjs';

Mock.mock('http://localhost:3000/api/test', 'get', {
  'list|1-10': [{
    'id|+1': 1,
  }],
});
