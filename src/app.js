require('dotenv').config();
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

// process.env = { PORT : 8007 , TEST : 'abcd'}
const port = process.env.port || 8007;
// console.log(process.env.jwt_secret_key)
app.listen(port , ()=> {console.log('Server runing on port:'+ port)});