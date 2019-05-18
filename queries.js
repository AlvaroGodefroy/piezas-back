const Connection = require('pg').Pool
const connection = new Connection({
  user: 'ehbctmvfhkqqgz',
  host: 'ec2-54-83-205-27.compute-1.amazonaws.com',
  database: 'd7u2v9gddd9265',
  password: '6ec3d0d372fef3acb9f8179f600aa3f064869981d79071b4e8d0add997339217',
  port: 5432,
  ssl: true
})
