const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoutes = require('./routes/posts.js');

const app = express();

// enable CORS without external module
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// required for loading .env variables 
app.use(cors());
require('dotenv').config();

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use('/posts', postRoutes);

app.get('/', (req,res) => {
    res.send('Hello to Radio API');
});


// connect to mongoDB 
const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.PASSWORD}@cluster0.csvgw.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

// Connec to MongoDB
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then( () => app.listen(PORT, () => { console.log(`Server running on port ${PORT}`)}))
.catch((error) => console.log(error.message));

// ensure no warnings in the console
mongoose.set('useFindAndModify', false);