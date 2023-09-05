const mongoose = require("../config/mongo");

const questionSchema = new mongoose.Schema({
  question: String,
  answers: [{
    answer: String,
    userName: String
  }]
});

questionSchema.set("toJSON", {
  transform: function (doc, ret) {
    // Excluir los campos created_at y updated_at del resultado JSON
    delete ret.__v;
  },
});

const QuestionModel = mongoose.model("Questions", questionSchema);


module.exports = QuestionModel
