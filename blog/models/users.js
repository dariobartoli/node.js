const mongoose = require("../config/mongo");
const bcrypt = require("bcrypt")
require('dotenv').config();
/* import bcrypt from 'bcrypt'
import 'dotenv/config' */


const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, index: { unique: true } }, // para que el email sea unico en la base de datos, usamos el indice unico
  password: {type: String, required: true, select: false},
  posts: [{
    post: Object,
  }],
  admin: Boolean,
  loginAuthorization: Boolean,
  postAuthorization: Boolean,
}, {timestamps: true});

/* userSchema.pre('save', async function(next) {
    let user = this; // es el objeto actual
    const salt = await bcrypt.genSaltSync(parseInt(process.env.SALT));
    const passwordHashed = await bcrypt.hash(user.password, salt)
    user.password = passwordHashed;
    next();
}); */


userSchema.set("toJSON", {
  transform: function (doc, ret) {
    // Excluir los campos created_at y updated_at del resultado JSON
    delete ret.__v;
    delete ret.createdAt;
    delete ret.updatedAt;
  },
});




//creamos una funcion en el modelo con prototype para comparar password
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password); //this.password, la contraseña guardada en el objeto
}

const UserModel = mongoose.model("Users", userSchema);

module.exports = UserModel;
