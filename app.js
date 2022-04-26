const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB");
const fruitsSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"Value needed"]},
    rating:{
        type:Number,
        min:1,
        max:10
    },
    review:String
});

const peopleSchema = new mongoose.Schema({
    name:String,
    age:Number
})


const Fruit = mongoose.model("Fruit", fruitsSchema);
const Person = mongoose.model("Person", peopleSchema);

const fruit = new Fruit({
    name:"Peach",
    rating:10,
    review:"Pretty solid as a fruit."
});

const person = new Person({
    name:"John",
    age:42
});

// const kiwi = new Fruit({
//     name:"Kiwi",
//     score:10,
//     review:"The best fruit"
// });
//
// const orange = new Fruit({
//     name:"Orange",
//     score:4,
//     review:"Sour!!"
// });
// const banana = new Fruit({
//     name:"Banana",
//     score:10,
//     review:"A weird one"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if(err){
//         console.log(err);
//     }
//     else {
//         console.log("successfully saved all the fruits to fruitdb");
//     }
// })


// fruit.save();

Fruit.find(function(err, fruits){
    if (err){
        console.log(err);
    }
    else {
        // mongoose.connection.close();
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });

    }
});

Fruit.updateOne({_id:"6266a7c8311f71cbd51e237c"},{name:"Strawwwberry"}, function (err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully updated the document");
    }
})

Fruit.deleteOne({name:"Peach"}, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully deleted the record");
    }

})

Person.deleteMany({name:"John"}, function (err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully deleted name records");
    }
})

// person.save();




