const User = require('../model/userModel')

const getUser = async(req, res) => {
    try {
        const allUser = await User.find();
        
        if(!allUser) {
            res.json( {
                message: "NO USER FOUND"
            })
        }

        res.status(200).json({
            success:true,
            users:allUser,
        })
    }
    catch(err) {
        res.status(500).json({
            success:false,
            message:`Internal Sever Error ${err}`
        })
    }
}

const createUser = async(req, res) => {
    try {
        const {name, email, phone, password} = req.body;
        const newUser = new User({name, email, phone, password});
        await newUser.save();

        res.status(201).json({
            user: newUser,
        })
    }
    catch(err) {
        res.status(500).json({
            success:false,
            message:`Internal Sever Error ${err}`
        })
    }
}

const updateUser = async(req, res) => {
    try {
        const {id} = req.params;
        const {name, email, phone,address, password} = req.body;
        const updatedUser = await User.findByIdAndUpdate(id,{name, email, phone, password},{new:true});

        if(!updateUser) {
            res.json({
                message:"cannot find User",
            })
        }

        res.status(200).json({
            user: updatedUser,
        })

    }
    catch(err) {
        res.status(500).json({
            success:false,
            message:`Internal Sever Error ${err}`
        })
    }  
}

const deleteUser = async(req, res) => {
    try {
        const {id} = req.params;
        const deletedUser = await User.findByIdAndDelete(id);

        if(!deleteUser) {
            res.json({
                message: "User Not Found"
            })
        }

        res.status(200).json({
            user: deletedUser,
            message: "User Deleted"
        })

    }
    catch(err) {
        res.status(500).json({
            success:false,
            message:`Internal Sever Error ${err}`
        })
    }  
}

module.exports = {getUser, createUser, updateUser, deleteUser};