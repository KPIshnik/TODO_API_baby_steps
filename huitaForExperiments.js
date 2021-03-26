var pg = require("pg");
//or native libpq bindings
//var pg = require('pg').native

var conString =
  "postgres://erazuxgz:3JaSHchksDu891lZc9J0QhUJJWKT04gK@tai.db.elephantsql.com:5432/erazuxgz"; //Can be found in the Details page
// var client = new pg.Client(conString);
// client.connect(function (err) {
//   if (err) {
//     return console.error("could not connect to postgres", err);
//   }
//   client.query('SELECT NOW() AS "theTime"', function (err, result) {
//     if (err) {
//       return console.error("error running query", err);
//     }
//     console.log(result.rows[0].theTime);
//     // >> output: 2018-08-23T14:02:57.117Z
//     client.end();
//   });
// });

const { Pool } = require("pg");
const pool = new pg.Pool({
  host: "tai.db.elephantsql.com",
  port: "5432",
  user: "erazuxgz",
  password: "3JaSHchksDu891lZc9J0QhUJJWKT04gK",
  database: "erazuxgz",
});

(async () => {
  // note: we don't try/catch this because if connecting throws an exception
  // we don't need to dispose of the client (it will be undefined)

  const client = await pool.connect();
  //console.log(client);
  try {
    const res = await client.query('SELECT NOW() AS "theTime"');
    console.log(res.rows[0]);
  } catch (e) {
    console.log("3");
    console.log(e);
    throw e;
  } finally {
    client.release();
  }
})().catch((e) => console.error(e.stack));
