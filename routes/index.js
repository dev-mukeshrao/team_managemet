var express = require('express');
var router = express.Router();
var path = require('path');
const client = require( path.resolve( __dirname, '../db'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  (async () => {
    await client.connect()

    const result = await client.query('select * from todo');
    console.log('====================================');
    console.log(result.rows);
    console.log('====================================');
    client.end();
} )();

});



module.exports = router;
