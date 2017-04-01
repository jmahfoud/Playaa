var pg = require('pg');
var db = new pg.Client(process.env.DATABASE_URL);

db.connect(function(err) {
  if (err) throw err;
  console.log('PostgreSQL is connected!');
  db.query('CREATE TABLE IF NOT EXISTS account(userId int, email varchar(255), password varchar(255), type int)');
  db.query('CREATE TABLE IF NOT EXISTS user(userId int, lastname varchar(255), firstname varchar(255), goal varchar(255))');
  db.query('CREATE TABLE IF NOT EXISTS interest(interestID int, interestName varchar(255))');
  db.query('CREATE TABLE IF NOT EXISTS schedule(scheduleId int)');
  db.query('CREATE TABLE IF NOT EXISTS posts(data JSON)');
  db.query('CREATE TABLE IF NOT EXISTS team(teamId int, postId int)');
  db.query('CREATE TABLE IF NOT EXISTS member(userId int, teamId int)');
  db.query('CREATE TABLE IF NOT EXISTS teampost(teamId int, postId int)');
  db.query('CREATE TABLE IF NOT EXISTS writepost(postId int, userId)');
  db.query('CREATE TABLE IF NOT EXISTS haveinterest(userId int, interestID int)');
  db.query('CREATE TABLE IF NOT EXISTS haveschedule(userId int, scheduleId int)');
  db.query('CREATE TABLE IF NOT EXISTS postschedule(postId int, scheduleId int)');
});

module.exports = db;
