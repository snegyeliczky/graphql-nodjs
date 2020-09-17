const express = require("express");
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();




const uri = "mongodb+srv://sandi:test123@forgraph.rpv7w.mongodb.net/forGraph?retryWrites=true&w=majority";
mongoose.connect(uri,{ useNewUrlParser: true });
mongoose.connection.once('open',()=>{
    console.log("conected to db")
});

app.use(cors());

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));



app.listen(4000, ()=>{
    console.log('listening on port 4000')
});