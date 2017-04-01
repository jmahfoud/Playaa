var pg = require('pg');
var db = new pg.Client(process.env.DATABASE_URL);

db.connect(function(err) {
  if (err) throw err;
  console.log('PostgreSQL is connected!');
  db.query('CREATE TABLE IF NOT EXISTS user(data JSON)');
  db.query('CREATE TABLE IF NOT EXISTS interest(data JSON)');
  db.query('CREATE TABLE IF NOT EXISTS schedule(data JSON)');
  db.query('CREATE TABLE IF NOT EXISTS posts(data JSON)');
  db.query('CREATE TABLE IF NOT EXISTS team(data JSON)');
  db.query('CREATE TABLE IF NOT EXISTS member(data JSON)');
  db.query('CREATE TABLE IF NOT EXISTS teampost(data JSON)');
  db.query('CREATE TABLE IF NOT EXISTS writepost(data JSON)');
  db.query('CREATE TABLE IF NOT EXISTS haveinterest(data JSON)');
  db.query('CREATE TABLE IF NOT EXISTS haveschedule(data JSON)');
});

module.exports = db;
