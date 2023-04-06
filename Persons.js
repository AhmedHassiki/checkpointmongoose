const mongoose = require('mongoose');

const personAddress = new mongoose.Schema({
    street : String,
    zipCode : Number
})

const personSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        min : 1,
        max : 100,
        validate : {
            validator : v => v%2 === 0,
            message : pers => `${pers.value} is not an even number`,
        },
    },
    favoriteFoods : [""],
    email : {
        type : String,
        required : true,
        minLength : 4,
        lowercase : true,
    },
    adress : personAddress ,
    createdAt : {
        type : Date,
        default : ()=>Date.now()
    }
})

personSchema.statics.findByName = function(name) {
    return this.find({name : new RegExp(name, 'i')})
}
personSchema.query.byName = function (name) {
    return this.where({name : new RegExp(name, 'i')})
}


module.exports = mongoose.model("Person", personSchema)