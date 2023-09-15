const postModel = require('../models/posts')
const userModel = require('../models/users')


const create = async(req,res) => {
    try {
        const {title, text} = req.body
        let post = new postModel({title, text, active: true, user:req.user.id})
        let userLogger = await userModel.findById(req.user.id)
        if(!userLogger){
            return res.status(404).json({ message: "User not found" });
        }
        userLogger.posts.push({post})
        Promise.all([post.save(), userLogger.save()])
        return res.status(201).json({message:"post created", post})
    } catch (error) {
        return res.status(500).json({message: "it has ocurred an error", error: error})
    }
}

const getAll = async(req,res) => {
    try {
        const posts = await postModel.find().populate('user')
        return res.status(200).json({message:"all post", posts})
    } catch (error) {
        return res.status(500).json({message: "it has ocurred an error", error: error})
    }
}

const set = async(req,res) => {
    try {
        const {id, title, text} = req.body
        const userLogged = await userModel.findById({_id: req.user.id})
        let hasContradiction = false
        for (const element of userLogged.posts) {
            if (element.post._id.toString() !== id) {
                hasContradiction = true;
            }else{
                hasContradiction = false
                break
            }
        }
        if(hasContradiction){
            throw new Error("post not found")
        }
        await postModel.updateOne({_id: id},{title: title, text: text})
        let postUpdate = await postModel.findById({_id: id})
        return res.status(200).json({message: "post edited", post: postUpdate})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const delet = async(req,res) => {
    try {
        const filter = req.body.id
        const userLogged = await userModel.findById({_id: req.user.id})
        let hasContradiction = false
        for (const element of userLogged.posts) {
            if (element.post._id.toString() !== filter) {
                hasContradiction = true;
            }else{
                hasContradiction = false
                break
            }
        }
        if(hasContradiction){
            throw new Error("post not found")
        }
        await postModel.findByIdAndDelete({_id: filter})
        return res.status(200).json({message: "post deleted"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = {create, getAll, set, delet}