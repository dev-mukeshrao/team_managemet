const { verify } = require('jsonwebtoken');

module.exports = {
    checkToken: (req, res, next) => {
        const token = req.get("authorization");
        if(token){
            token = token.slice(7);
            verify(token, "qwe123", (err, decoded) => {
                if(err){
                    res.json({
                        success:0,
                        message: "Inavlid token"
                    })
                }
                else{
                    next();
                }
            })
        }else
        {
            res.json({
                success: 0,
                message: "Inavlid username or password"
            })
        }
    }
}