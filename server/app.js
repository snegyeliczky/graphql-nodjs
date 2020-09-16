const express = require("express");
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

const mongoose = require('mongoose');

const uri = "mongodb+srv://sandi:test123@forgraph.rpv7w.mongodb.net/forGraph?retryWrites=true&w=majority";
mongoose.connect(uri,{ useNewUrlParser: true });
mongoose.connection.once('open',()=>{
    console.log("conected to db")
});


app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));


app.listen(4000, ()=>{
    console.log('listening on port 4000')
});