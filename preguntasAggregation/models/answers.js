const mongoose = require("../config/mongo");

const answerSchema = new mongoose.Schema({
  answer: String,
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Questions",
    answers: String
  },
  person: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
});

answerSchema.set("toJSON", {
  transform: function (doc, ret) {
    // Excluir los campos created_at y updated_at del resultado JSON
    delete ret.__v;
    delete ret.question.answers
  },
});

const AnswerModel = mongoose.model("Answers", answerSchema);

module.exports = AnswerModel;
