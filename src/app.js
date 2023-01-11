const express = require('express');
const cors = require('cors');
const authRoute = require('./routes/authRoute');
const todoRoute = require('./routes/todoRoute');
const authenticateMiddleware = require('./middlewares/authenticate');

// const {sequelize} = require('./models/index')

// sequelize.sync({alter : true});

const notFoundMiddleware = require('./middlewares/notFound');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.use('/auth', authRoute);
app.use('/todos' ,authenticateMiddleware, todoRoute);



app.use(notFoundMiddleware);
app.use(errorMiddleware);


app.listen(8007 , ()=> {console.log('Server runing on port 8007')});