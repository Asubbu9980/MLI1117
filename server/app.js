var express = require('express');
var app = express();
var indexRouter = require('./routes/notebookroute')
app.use(express.json());
let mongoose = require('mongoose');
var cors = require('cors')
require('dotenv').config()

app.use(cors());


app.use('/topic', indexRouter);
mongoose.set('strictQuery', true);

//for database connection
async function forConnection() {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log('db connected');
  } catch (error) {
    console.log(error);
  }
}
forConnection()

//app listening port
app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
})


module.exports = app;
