module.exports = (req , res , next ) =>{ 
    res.status(404).json({ message: 'resouce not fonnd on this server'});
};