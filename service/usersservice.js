 const client = require('../db');

 module.exports = {
      create: (data, callback) => {

        client.query(`INSERT INTO todo(description) values(?)`, [data.description], (err, result, fields) => {
                if(err){
                  return callback(err);
                }
                return callback(null, result)
            });
      },

      getTodo: (data, callback) => {
        client.query(`select description from todo`),[],(err,result, fields) =>{

          if(err){
            return callback(err);
          }
          return callback(null, result)

        }
      },

      
 }