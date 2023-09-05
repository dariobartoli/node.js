const AnswerModel = require("../models/answers");
const QuestionModel = require('../models/questions')
const UserModel = require("../models/users");

const answersReports = async (req,res) => {
    try {
        let data = []
        data.push("--------RECUENTO DE RESPUESTAS---------")
        data.push("----¿Cual es tu color favorito?--------")
        data.push(await QuestionModel.aggregate([
            {
                $unwind: "$answers",
            },
            {
                $match: { question: "¿cual es tu color favorito?"}
            },
            {
                $project:{
                    _id: 0,
                    question: "$question",
                    answer: "$answers.answer",
                    userName: "$answers.userName"
                }
            },
            {
                $group: {
                  _id: "$answer",
                  count: { $sum: 1 }
                }
            },
        ]))
        data.push("----¿frio o calor?--------")
        data.push(await QuestionModel.aggregate([
            {
                $unwind: "$answers",
            },
            {
                $match: { question: "¿frio o calor?"}
            },
            {
                $project:{
                    _id: 0,
                    question: "$question",
                    answer: "$answers.answer",
                    userName: "$answers.userName"
                }
            },
            {
                $group: {
                  _id: "$answer",
                  count: { $sum: 1 }
                }
              }

        ]))
        data.push("----¿cual es tu pelicula favorita?--------")
        data.push(await QuestionModel.aggregate([
            {
                $unwind: "$answers",
            },
            {
                $match: { question: "¿cual es tu pelicula favorita?"}
            },
            {
                $project:{
                    _id: 0,
                    question: "$question",
                    answer: "$answers.answer",
                    userName: "$answers.userName"
                }
            },
            {
                $group: {
                  _id: "$answer",
                  count: { $sum: 1 }
                }
              }
        ]))
        return res.status(200).json({ message: "all reports", data});  
    } catch (error) {
        return res.status(500).json({message: "it has ocurred an error", error: error})
    }
}


module.exports = {answersReports}