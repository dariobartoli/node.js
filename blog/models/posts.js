const mongoose = require("../config/mongo");

const postSchema = new mongoose.Schema({
  title: String,
  text: String,
  active: Boolean,
  image: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
}, {timestamps: true});


postSchema.set("toJSON", {
  transform: function (doc, ret) {
    // Excluir los campos created_at y updated_at del resultado JSON
    delete ret.__v;
    delete ret.createdAt;
    delete ret.updatedAt;
    if (ret.user) {
      delete ret.user._id;
      delete ret.user.admin;
      delete ret.user.loginAuthorization;
      delete ret.user.postAuthorization;
      delete ret.user.posts;
    }
  },
});



const postModel = mongoose.model("Posts", postSchema);

module.exports = postModel;
