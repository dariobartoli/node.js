const QuestionModel = require('../models/questions')

const add = async(req, res) => {
    try {
        let newQuestion = new QuestionModel(req.body)
        newQuestion.save()
        return res.status(201).json({ message:"question saved" ,newQuestion });  
    } catch (error) {
        return res.status(500).json({message: "it has ocurred an error", error: error})
    }
}

const get = async(req, res) => {
    try {
        let questions = await QuestionModel.find()
        return res.status(201).json({ message:"all questions" ,questions: questions });  
    } catch (error) {
        return res.status(500).json({message: "it has ocurred an error", error: error})
    }
}

module.exports = {add, get}