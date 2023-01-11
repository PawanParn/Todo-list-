const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User } = require('../models/index');


exports.register = async(req , res , next) => {
    try {
        const { username , email , password , confirmPassword } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ message : 'password is not matched'})
        };
        
        //hashed password
        const hashedPassword = await bcrypt.hash(password, 10)
        await User.create({ username, email, password : hashedPassword })

        res.status(201).json({ message : "User created"})

    }catch(err) {
        next(err)
    }

};

exports.login = async(req , res , next) => {
    try {
        const {username , password } = req.body;
        const user = await User.findOne({where : { username} });

        if(!user) {
            return res.status(400).json({message : 'Invalid username or Password'})
        };

        const isCorrectPassword = await bcrypt.compare(password, user.password);
        if(!isCorrectPassword){
            return res.status(400).json({message : 'Invalid username or Password'})
        }
        
        const payload = {
                username : username,
                id  : user.id,
                email : user.email
        };

        const token = jwt.sign(payload, 'bossanova', {
            algorithm : 'HS384',
            expiresIn : 600 
        })



         res.status(200).json({message : 'LOGIN SUCCESS' ,token})
        

    }catch(err) {
        next(err)
    }

};