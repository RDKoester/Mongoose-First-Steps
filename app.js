const mongoose = require('mongoose');
// const User = require('./user')
// const Fruit = require('./fruits')

mongoose.connect("mongodb://localhost/fruitsDB", () => {
    console.log("Connected")
})

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema)

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
})

const User = mongoose.model("User", userSchema)


const pineapple = new Fruit({
    name: "Pineapple",
    rating: 9,
    review: "Great fruit."
})

// pineapple.save()

const user = new User ({
    name: "Amy",
    age: 12,
    favoriteFruit: pineapple
})

// user.save()

const apple = new Fruit ({
    rating: 7,
    review: "Pretty solid as a fruit."
})

// apple.save()

User.updateOne(
    {name: "John"},
    {favoriteFruit: apple},
    (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Successfully updated.")
        }
    }
)

// Fruit.deleteOne({name: "Orange"}, (err) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log("Successfully deleted.")
//         }
// })

Fruit.find((err, fruits) => {
    if (err) {
        console.log(err)
    } else {
        fruits.forEach(fruit => {
            console.log(fruit.name)
        })
    }
})

