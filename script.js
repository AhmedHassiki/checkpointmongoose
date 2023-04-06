require('dotenv').config({path:"./.env"});
// const port = process.env.PORT;
const mongoAtlasUri = process.env.MONGO_URI;
const mongoose = require('mongoose');
const Person = require('./Persons');

const connectDB = async () => {
try {
  // Connect to the MongoDB cluster
    await mongoose.connect(mongoAtlasUri)
    console.log(" Mongoose is connected")
} catch (e) {
  console.log("Could not connect",e);
}
}
connectDB()




// Search 
// run()
// async function run(){
   
//       try {
//         const person = await Person.findByName("Ahmed")
//         const person = await Person.findOneAndUpdate({name : "Ahmed"})
//         // const person = await Person.findOne({name : "Ahmed", email: "gomycodenodemailer@gmail.com"})  
//         // console.log(user)
//         // person.save()
//         console.log(person)
//       } catch (e) {
//         console.log(e.message)
//       }  
//     }



// function call
// run()
// async function run (){
//     try {
//         // Simplest way to create a user
//         const person = await Person.create({
//             name : "Ahmed",
//             age : "32",
//             favoriteFoods : ["Pizza", "Tomato"],
//             email : 'gomycodenodemailer@gmail.com',
//             address : {
//                 street : 'Bir El Ghoul',
//                 zipCode : 8000,                
//             }
//         })
//         // // ******************************* Model.prototype.save() no longer accepts a callback *****************************
//         const data = await person.save();
//         console.log(data);
//         console.log(person)
//     } catch (e) {
//         console.log(e.message);
//     }
// }
// outdated****************************
// var createManyPeople = function (arrayOfPeople, done) {
//     Person.create( arrayOfPeople, (err, data) => err ? done(err) : done(null, data) );
// };


// const arrayOfPeople = [
//     {name : "Lotfi", age : "16", favoriteFoods : ["Pizza", "Tomato"], email : 'lotfi@gmail.com',address : {street : 'bir chalouf', zipCode : 8000}}, {name : "Mohamed", age : "30", favoriteFoods : ["Suchi", "Façous"], email : 'mohamed@gmail.com',address : {street : 'sidi achour', zipCode : 8000}}, {name : "Omar", age : "22", favoriteFoods : ["Panini", "Lasagne"], email : 'omar@gmail.com',address : {street : 'manouba', zipCode : 1015}},
// ]

// Person.create(arrayOfPeople);
run()
async function run(){
    try {
        // const person = await Person.find({name: "Omar"})
        // const person = await Person.findOne({name: "Omar"})
        // const person = await Person.findById("642ec93633da5e48176f5cee")
        // const person = await Person.findByIdAndUpdate("642ec93633da5e48176f5cee", {$push : {favoriteFoods : "hamburger"}})
        // const person = await Person.findOneAndUpdate({name : "Omar"}, {$set : {age : 20}}, { new: true })
        // const person = await Person.findOneAndDelete({_id:"642ec93633da5e48176f5cee"})
        // const person = await Person.deleteMany({ age: { $gte: 15 } })
        // const person = await Person.deleteMany({ age: { $gte: 15 } })
        // const Person = await Person.find({favoriteFoods : "burritos"})
        // .sort({name : 1})
        // .limit(2)
        // .select({age : 0})        
        // .exec(function (err, person))
    

        // const person = await Person.findOne({name : "Ahmed"})        
        // person.name = "Fahd";
        // await person.save()
        // console.log(person)
    } catch (e) {
        console.log(e.message)
    }  
}



