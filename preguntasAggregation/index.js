
const express = require('express')
const app = express()
app.use(express.json())


const questionsRouter = require('./routes/questions');
app.use('/questions', questionsRouter);
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);
const answersRouter = require('./routes/answers');
app.use('/answers', answersRouter);
const reportsRouter = require('./routes/reports');
app.use('/reports', reportsRouter);


try {
    app.listen(5000, function(){
        console.log(`La app está montada en el puerto: ${5000}`);
    })
} catch (error) {
    console.log("ha ocurrido en error al montar la aplicacion "+error);
}

