const UserModel = require("../models/users");
const PostModel = require('../models/posts')

const get = async(req,res) => {
    try {
        /* let user = await UserModel.findOne({_id: req.user.id}) */
        return res.status(200).json({ message:"welcome admin"}); 
    } catch (error) {
        return res.status(500).json({message: "it has ocurred an error", error: error})
    }
}

const disabledUser = async(req,res) => {
    try {
        const filter = {email: req.body.email};
        const update = {loginAuthorization: false}
        const user = await UserModel.findOne(filter)
        if(!user){
            throw new Error("user doesn't exist")
        }
        const result = await UserModel.updateOne(filter, update);
        return res.status(200).json({message:"user disabled"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const disabledPost = async(req,res) => {
    try {
        const filter = {_id: req.body.id};
        const update = {active: false}
        const post = await PostModel.findOne(filter)
        if(!post){
            throw new Error("post doesn't exist")
        }
        const result = await PostModel.updateOne(filter, update);
        return res.status(200).json({message:"post disabled"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}


module.exports = {get, disabledUser, disabledPost}