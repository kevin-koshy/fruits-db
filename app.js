const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB");
const fruitsSchema = new mongoose.Schema({
    name:String,
    rating:Number,
    review:String
});

const peopleSchema = new mongoose.Schema({
    name:String,
    age:Number
})


const Fruit = mongoose.model("Fruit", fruitsSchema);
const Person = mongoose.model("Person", peopleSchema);

const fruit = new Fruit({
    name:"Apple",
    rating:7,
    review:"Pretty solid as a fruit."
});

const person = new Person({
    name:"John",
    age:42
});

const kiwi = new Fruit({
    name:"Kiwi",
    score:10,
    review:"The best fruit"
});

const orange = new Fruit({
    name:"Orange",
    score:4,
    review:"Sour!!"
});
const banana = new Fruit({
    name:"Banana",
    score:10,
    review:"A weird one"
});

Fruit.insertMany([kiwi, orange, banana], function(err){
    if(err){
        console.log(err);
    }
    else {
        console.log("successfully saved all the fruits to fruitdb");
    }
})


person.save();

// fruit.save();


