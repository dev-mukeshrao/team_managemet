var express = require('express');
var router = express.Router();
var path = require('path');
const client = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  (async () => {
    await client.connect()

    const result = await client.query('INSERT INTO todo(description) values($1) RETURNING *',['DB queries']);
    console.log('====================================');
    console.log(result.rows);
    console.log(result.rowCount);
    console.log('====================================');
    client.end();
} )();
});

module.exports = router;
