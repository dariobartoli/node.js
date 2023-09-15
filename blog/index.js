const express = require('express')
const app = express()
app.use(express.json())

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);
const authRouter = require('./routes/auth');
app.use('/auth', authRouter);
const adminRouter = require('./routes/admin');
app.use('/admin', adminRouter);
const postRouter = require('./routes/posts');
app.use('/posts', postRouter);

try {
    app.listen(5000, function(){
        console.log(`La app está montada en el puerto: ${5000}`);
    })
} catch (error) {
    console.log("ha ocurrido en error al montar la aplicacion "+error);
}