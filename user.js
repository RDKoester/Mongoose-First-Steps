const mongoose = require('mongoose')
const Fruit = require('./fruits')

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: Fruit
})

module.exports = mongoose.model("User", userSchema)