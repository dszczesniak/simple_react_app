const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Parsers
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Listener
app.listen(3005, ()=>{
    console.log('listening on port 3005')
})

//DB
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test');

const url = 'mongodb://localhost:27017/test'

const perSechema = mongoose.Schema({
    firstName: String,
    secondName: String,
    email: String,
    date: String
});

const Person = mongoose.model('Person', perSechema);

    app.post('/add', (req, res) => {
        const newPerson = new Person(req.body);

        newPerson.save((err, doc) => {
            if(err) return console.log(err);
            res.send(doc);
        });
     })

     app.get('/people', (req, res) =>{
        Person.find((err, doc)=>{
            if(err) return console.log(err);
            res.send(doc)
        })
    })
    