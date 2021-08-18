
const { Client } = require('pg')
const client = new Client({
    user: process.env.DB_User,
    host: process.env.DB_Host,
    database: process.env.DB_Name,
    password: process.env.DB_Password,
    port: process.env.DB_Port,
    connectionLimit: 10
  })

//   client.connect()

//   client.query('SELECT * from todo', (err, res) => {
//     if(!err){
//         console.log(res.rows)
//     }
//     client.end()
//   })
module.exports = client;

// ( async () => {
//     await client.connect()

//     const result = await client.query('select * from todo');
//     console.log('====================================');
//     console.log(result.rows);
//     console.log('====================================');
//     client.end();
// } )();