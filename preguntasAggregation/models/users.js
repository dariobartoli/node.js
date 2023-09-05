const mongoose = require("../config/mongo");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

userSchema.set("toJSON", {
  transform: function (doc, ret) {
    // Excluir los campos created_at y updated_at del resultado JSON
    delete ret.__v;
  },
});

const UserModel = mongoose.model("Users", userSchema);

module.exports = UserModel;
