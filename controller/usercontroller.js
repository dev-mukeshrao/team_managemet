const { genSaltSync, hashSync, compareSync } = require('bcrypt');
const { create } = require('../service/usersservice');
const { sign }  = require('jsonwebtoken');

module.exports = {
     createUser: (req,res) => {
         const body = req.body;
         const salt = genSaltSync(10);
         body.password = hashSync(body.password, salt);
         create(body, (err, result) =>{ 
             if(err){
                 console.log(err);
                 return res.status(500).json({
                     success: 0,
                     message: "Database connection error"
                 });
             }
             return res.status(200).json({
                 success: 1,
                 data: result
             });
         });

     }
}