const AnswerModel = require("../models/answers");
const QuestionModel = require('../models/questions')
const UserModel = require("../models/users");



const add = async (req, res) => {
    try {
        let newAnswer = new AnswerModel(req.body)
        let {answer, question, person} = newAnswer
        let quest = await QuestionModel.findOne({_id: question})
        let user = await UserModel.findOne({_id: person})
        let answers = await AnswerModel.find()
        answers.forEach((element) => {
            if(element.question.toString() == question && element.person.toString() == person){
                throw new Error("you have answered this question yet")
            }
        })
        if(!quest){
            throw new Error("question doesn't exist")
        }
        if(!user){
            throw new Error("user doesn't exist")
        }
        quest.answers.push({
            answer: answer,
            userName: user.firstName
        })
        quest.save()
        newAnswer.save()
        return res.status(201).json({ message:"answer saved" , newAnswer});  
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const get = async(req,res) => {
    try {
        let answers = await AnswerModel.find().populate('person').populate('question')
        return res.status(200).json({ message:"all answers" , answers});  
    } catch (error) {
        return res.status(500).json({message: "it has ocurred an error", error: error})
    }
}

module.exports = {add, get}