const UserModel = require("../models/users");

const add = async (req, res) => {
    try {
        let newUser = new UserModel(req.body)
        newUser.save()
        return res.status(201).json({ message:"user saved" , newUser});  
    } catch (error) {
        return res.status(500).json({message: "it has ocurred an error", error: error})
    }
}

const get = async(req,res) => {
    try {
        let users = await UserModel.find({})
        return res.status(200).json({ message:"all users" ,users: users }); 
    } catch (error) {
        return res.status(500).json({message: "it has ocurred an error", error: error})
    }
}


module.exports = {add, get}