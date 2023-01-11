const jwt = require('jsonwebtoken');

const { User } = require('../models');

module.exports = async (req , res , next) => {

    try {
        const authorization = req.headers.authorization;
    
    if(!authorization){
        return res.status(401).json({ message: 'you are not unauth'})
    };
    
    if(!authorization.startsWith('Bearer')){
        return res.status(401).json({ message: 'you are not unauth'})
    };
    

    const token = authorization.split(' ')[1]
    if (!token)
        {
            return res.status(401).json({ message: 'you are not unauth'})
        };
    
        const payload = jwt.verify(
            token,
            'bossanova'
          );
      

    const user = await User.findOne({ where: { id: payload.id } });
    if (!user) {
    return res.status(401).json({ message: 'you are unauthenticated' });
    }

    req.user = user

    next();
    }catch(err){
        next(err)
    }
}